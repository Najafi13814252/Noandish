"use client"

import type { ourFileRouter } from "@/app/api/uploadthing/core"
import { UploadButton } from "@/lib/uploadthing"

interface UploaderButtonProps {
    onChange: (url?: string) => void
    endpoint: keyof typeof ourFileRouter
    label?: string
    doneLabel?: string
    hasValue?: boolean
}

function UploaderButton({ onChange, endpoint, label = "آپلود فایل", doneLabel = "تغییر فایل", hasValue }: UploaderButtonProps) {
    return (
        <UploadButton
            endpoint={endpoint}
            onClientUploadComplete={(res) => onChange(res?.[0].ufsUrl)}
            onUploadError={(error: Error) => console.error(error.message)}
            className="items-start"
            appearance={{
                button: ({ ready, isUploading }) =>
                    `h-9 rounded-4xl px-4 text-sm text-white ${isUploading ? "bg-slate-400 cursor-not-allowed" : ready ? "bg-teal-600!" : "bg-slate-300"
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