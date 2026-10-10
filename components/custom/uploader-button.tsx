"use client"

import { useRef } from "react"
import type { ourFileRouter } from "@/app/api/uploadthing/core"
import { UploadButton } from "@/lib/uploadthing"
import { getVideoDuration } from "@/lib/video"

interface UploaderButtonProps {
    onChange: (url?: string, duration?: number) => void
    endpoint: keyof typeof ourFileRouter
    label?: string
    doneLabel?: string
    hasValue?: boolean
    detectDuration?: boolean
}

function UploaderButton({
    onChange,
    endpoint,
    label = "آپلود فایل",
    doneLabel = "تغییر فایل",
    hasValue,
    detectDuration = false,
}: UploaderButtonProps) {
    const durationRef = useRef<number | undefined>(undefined)

    return (
        <UploadButton
            endpoint={endpoint}
            onBeforeUploadBegin={async (files) => {
                durationRef.current = undefined
                if (detectDuration && files[0]) {
                    durationRef.current = await getVideoDuration(files[0])
                }
                return files
            }}
            onClientUploadComplete={(res) => onChange(res?.[0].ufsUrl, durationRef.current)}
            onUploadError={(error: Error) => console.error(error.message)}
            className="items-start"
            appearance={{
                button: ({ ready, isUploading }) =>
                    `h-9 rounded-4xl px-4 text-sm text-white ${
                        isUploading ? "bg-slate-400 cursor-not-allowed" : ready ? "bg-teal-600!" : "bg-slate-300"
                    }`,
                allowedContent: "hidden",
            }}
            content={{
                button: ({ ready, isUploading }) =>
                    isUploading ? "در حال آپلود..." : !ready ? "لطفاً صبر کنید..." : hasValue ? doneLabel : label,
            }}
        />
    )
}

export default UploaderButton