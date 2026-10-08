"use client"

import { createCourse } from "@/actions/courses"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { type CourseTitleSchema, courseTitleSchema } from "@/schemas/teacherCourse"
import { zodResolver } from "@hookform/resolvers/zod"
import { Add } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState, useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"

function CreateCourse() {
    const [open, setOpen] = useState(false)
    const [isPending, startTransition] = useTransition()

    const form = useForm<CourseTitleSchema>({
        resolver: zodResolver(courseTitleSchema),
        defaultValues: {
            title: ""
        },
    });


    function onSubmit(values: CourseTitleSchema) {
        startTransition(async () => {
            try {
                const result = await createCourse(values)

                if (!result.success) {
                    toast.error(result.message || "خطایی رخ داده است")
                    return
                }
                toast.success("دوره با موفقیت ساخته شد")
                form.reset()
                setOpen(false)
            } catch (error) {
                alert(error)
                toast.error("خطایی رخ داده است ❌")
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={
                <Button>
                    <HugeiconsIcon icon={Add} />
                    دوره جدید
                </Button>}
            />
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle className="text-primary text-xl">ساخت دوره جدید</DialogTitle>
                        <DialogDescription>
                            یک دوره جدید بسازید. نگران نباشید، بعداً می‌توانید جزئیات آن را تکمیل یا ویرایش کنید.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup>
                        <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>عنوان دوره</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="عنوان دوره را وارد کنید"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose render={<Button type="button" variant="outline">لغو</Button>} />
                        <Button type="submit" disabled={isPending}>
                            {isPending ? (
                                <div className="flex items-center gap-x-2">
                                    <Spinner />
                                    درحال ساخت
                                </div>
                            ) : "ساخت دوره"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateCourse