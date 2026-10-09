"use client"

import Image from "next/image"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import StepBox from "./step-box"
import Uploader from "@/components/custom/uploader"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { updateCourseImage } from "@/actions/courses"
import { courseImageSchema, type CourseImageForm } from "@/schemas/teacherCourse"

import { Edit, ImageIcon, PlusSignCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface CourseImageProps {
    courseId: string
    initialImageUrl: string | null
}

function CourseImage({ courseId, initialImageUrl }: CourseImageProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const toggleEdit = () => setIsEditing((current) => !current)

    function onSubmit(values: CourseImageForm) {
        // اعتبارسنجی سمت کلاینت
        const parsed = courseImageSchema.safeParse(values)
        if (!parsed.success) {
            toast.error(parsed.error.issues[0]?.message ?? "تصویر معتبر نیست")
            return
        }

        startTransition(async () => {
            try {
                const result = await updateCourseImage(courseId, parsed.data)

                if (!result.success) {
                    toast.error(result.message || "خطایی رخ داده است")
                    return
                }

                toast.success("تصویر دوره با موفقیت بروزرسانی شد")
                setIsEditing(false)
                router.refresh()
            } catch {
                toast.error("خطایی رخ داده است")
            }
        })
    }

    return (
        <StepBox
            step={3}
            title="تصویر دوره"
            description="یک تصویر شاخص برای دوره آپلود کنید."
        >
            <div className="space-y-4">
                <div className="flex justify-end">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={toggleEdit}
                        disabled={isPending}
                    >
                        {isEditing && <>لغو</>}
                        {!isEditing && !initialImageUrl && (
                            <>
                                <HugeiconsIcon icon={PlusSignCircleIcon} className="size-4" />
                                افزودن تصویر
                            </>
                        )}
                        {!isEditing && initialImageUrl && (
                            <>
                                <HugeiconsIcon icon={Edit} className="size-4" />
                                ویرایش تصویر
                            </>
                        )}
                    </Button>
                </div>

                {!isEditing ? (
                    !initialImageUrl ? (
                        <div className="flex h-60 items-center justify-center rounded-md bg-muted">
                            <HugeiconsIcon icon={ImageIcon} className="size-10 text-muted-foreground" />
                        </div>
                    ) : (
                        <div className="relative aspect-video overflow-hidden rounded-md">
                            <Image
                                src={initialImageUrl}
                                alt="تصویر دوره"
                                fill
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover"
                            />
                        </div>
                    )
                ) : (
                    <div>
                        <div className="relative">
                            <Uploader
                                endpoint="courseImage"
                                onChange={(url) => {
                                    if (url) {
                                        onSubmit({ imageUrl: url })
                                    }
                                }}
                            />

                            {isPending && (
                                <div className="absolute inset-0 flex items-center justify-center gap-x-2 rounded-xl bg-background/70 backdrop-blur-sm">
                                    <Spinner />
                                    درحال ذخیره تصویر
                                </div>
                            )}
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground">
                            ابعاد ۱۶:۹ توصیه می‌شود
                        </div>
                    </div>
                )}
            </div>
        </StepBox>
    )
}

export default CourseImage