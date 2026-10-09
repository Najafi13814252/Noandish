"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import StepBox from "./step-box";
import { Editor } from "@/components/custom/editor";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { updateCourseDescriptions } from "@/actions/courses";
import { courseDescriptionsSchema, type CourseDescriptionsForm } from "@/schemas/teacherCourse";

interface CourseDescriptionsProps {
    courseId: string;
    initialData: {
        description: string | null;
        fullDescription: string | null;
    };
}

function CourseDescriptions({ courseId, initialData }: CourseDescriptionsProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<CourseDescriptionsForm>({
        resolver: zodResolver(courseDescriptionsSchema),
        defaultValues: {
            description: initialData.description ?? "",
            fullDescription: initialData.fullDescription ?? "",
        },
    });

    function onSubmit(values: CourseDescriptionsForm) {
        startTransition(async () => {
            try {
                const result = await updateCourseDescriptions(courseId, values);

                if (!result.success) {
                    toast.error(result.message || "خطایی رخ داده است");
                    return;
                }

                toast.success("توضیحات دوره با موفقیت بروزرسانی شد");
                router.refresh();
            } catch {
                toast.error("خطایی رخ داده است");
            }
        });
    }

    return (
        <section className="space-y-6">
            <StepBox
                step={2}
                title="توضیحات دوره"
                description="یک توضیح کوتاه و یک شرح کامل برای معرفی دوره بنویسید."
            >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FieldGroup>
                        {/* توضیحات خلاصه */}
                        <Controller
                            name="description"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>توضیحات خلاصه</FieldLabel>
                                    <Textarea
                                        {...field}
                                        id={field.name}
                                        rows={4}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="خلاصه‌ای کوتاه از دوره بنویسید..."
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        {/* شرح کامل دوره */}
                        <Controller
                            name="fullDescription"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>شرح کامل دوره</FieldLabel>
                                    <Editor value={field.value} onChange={field.onChange} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <Button type="submit" disabled={isPending}>
                        {isPending ? (
                            <div className="flex items-center gap-x-2">
                                <Spinner />
                                درحال بروزرسانی
                            </div>
                        ) : "ثبت تغییرات"}
                    </Button>
                </form>
            </StepBox>
        </section>
    );
}

export default CourseDescriptions;