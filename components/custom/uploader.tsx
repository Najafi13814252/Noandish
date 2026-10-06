"use client"

import type { ourFileRouter } from "@/app/api/uploadthing/core"
import { UploadDropzone } from "@/lib/uploadthing"

interface FileUploadProps {
    onChange: (url?: string) => void
    endpoint: keyof typeof ourFileRouter
}

function Uploader({ onChange, endpoint }: FileUploadProps) {
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].ufsUrl)
            }}
            onUploadError={(error: Error) => {
                console.error(error.message)
            }}
            className="border-2 border-dashed border-slate-300 bg-input/30 rounded-xl ut-label:text-sm ut-label:text-slate-700 ut-allowed-content:text-xs ut-allowed-content:text-slate-400 dark:border-slate-700"
            appearance={{
                uploadIcon: "text-slate-400",
                button: ({ ready, isUploading }) =>
                    `rounded-md px-4 text-sm text-white ${
                        isUploading
                            ? "bg-slate-400 cursor-not-allowed"
                            : ready
                            ? "bg-teal-600! "
                            : "bg-slate-300"
                    }`,
            }}
            content={{
                label: "فایل را اینجا بکشید یا کلیک کنید",
                allowedContent: "فقط تصویر، حداکثر ۴ مگابایت",
                button: ({ ready, isUploading }) =>
                    isUploading ? "در حال آپلود..." : ready ? "آپلود" : "لطفاً صبر کنید...",
            }}
        />
    )
}

export default Uploader