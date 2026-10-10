"use client";

import { Controller, useController, useFieldArray, useForm, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Add, Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import StepBox from "./step-box";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import UploaderButton from "@/components/custom/uploader-button";
import { updateCourseChapters } from "@/actions/courses";
import { courseChaptersSchema, type CourseChaptersForm } from "@/schemas/teacherCourse";

interface CourseChaptersProps {
    courseId: string;
    initialChapters: CourseChaptersForm["chapters"];
}

function CourseChapters({ courseId, initialChapters }: CourseChaptersProps) {
    const [isPending, startTransition] = useTransition();

    const form = useForm<CourseChaptersForm>({
        resolver: zodResolver(courseChaptersSchema),
        defaultValues: { chapters: initialChapters },
    });

    // keyName متفاوت لازم است تا id دیتابیس با id داخلی react-hook-form قاطی نشود
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "chapters",
        keyName: "fieldKey",
    });

    function onSubmit(values: CourseChaptersForm) {
        startTransition(async () => {
            try {
                const result = await updateCourseChapters(courseId, values);

                if (!result.success) {
                    toast.error(result.message || "خطایی رخ داده است");
                    return;
                }

                form.reset({ chapters: result.chapters });
                toast.success("فصل‌ها با موفقیت ذخیره شد");
            } catch {
                toast.error("خطایی رخ داده است");
            }
        });
    }

    return (
        <section>
            <StepBox
                step={4}
                title="سرفصل‌ها و درس‌ها"
                description="فصل‌های دوره را بسازید و برای هر فصل درس اضافه کنید."
            >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {fields.map((field, index) => (
                        <ChapterItem
                            key={field.fieldKey}
                            control={form.control}
                            index={index}
                            onRemove={() => remove(index)}
                        />
                    ))}

                    <div>
                        <Button
                            type="button"
                            variant="outline"
                            className="border-dashed border-primary/50 text-primary"
                            onClick={() => append({ title: "", lessons: [] })}
                        >
                            <HugeiconsIcon icon={Add} />
                            افزودن فصل
                        </Button>
                    </div>

                    <Button type="submit" disabled={isPending}>
                        {isPending ? (
                            <div className="flex items-center gap-x-2">
                                <Spinner />
                                درحال ذخیره
                            </div>
                        ) : "ثبت تغییرات"}
                    </Button>
                </form>
            </StepBox>
        </section>
    );
}

export default CourseChapters;

/* ---------------------------- فصل ---------------------------- */

interface ChapterItemProps {
    control: Control<CourseChaptersForm>;
    index: number;
    onRemove: () => void;
}

function ChapterItem({ control, index, onRemove }: ChapterItemProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `chapters.${index}.lessons`,
        keyName: "fieldKey",
    });

    return (
        <div className="space-y-4 rounded-2xl border bg-muted/30 p-4">
            <div className="flex items-end gap-3">
                <Controller
                    name={`chapters.${index}.title`}
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>عنوان فصل</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="مثلاً فصل اول: مقدمات طراحی"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
                <Button type="button" variant="destructive" onClick={onRemove}>
                    حذف فصل
                </Button>
            </div>

            {fields.length > 0 && (
                <Card size="sm">
                    <CardContent>
                        <FieldGroup className="gap-6">
                            {fields.map((lesson, lessonIndex) => (
                                <LessonItem
                                    key={lesson.fieldKey}
                                    control={control}
                                    chapterIndex={index}
                                    lessonIndex={lessonIndex}
                                    onRemove={() => remove(lessonIndex)}
                                />
                            ))}
                        </FieldGroup>
                    </CardContent>
                </Card>
            )}

            <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-dashed border-primary/50 text-primary"
                onClick={() => append({ title: "", videoUrl: "", duration: null, isFree: false })}
            >
                <HugeiconsIcon icon={Add} />
                افزودن جلسه
            </Button>
        </div>
    );
}

/* ---------------------------- درس ---------------------------- */

interface LessonItemProps {
    control: Control<CourseChaptersForm>;
    chapterIndex: number;
    lessonIndex: number;
    onRemove: () => void;
}

function LessonItem({ control, chapterIndex, lessonIndex, onRemove }: LessonItemProps) {
    const base = `chapters.${chapterIndex}.lessons.${lessonIndex}` as const;

    const { field: durationField } = useController({
        name: `${base}.duration`,
        control,
    });

    return (
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_auto_auto_auto]">
            {/* عنوان درس */}
            <Controller
                name={`${base}.title`}
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>عنوان جلسه</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="مثلاً آشنایی با ابزارها"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            {/* ویدئوی درس */}
            <Controller
                name={`${base}.videoUrl`}
                control={control}
                render={({ field }) => (
                    <Field className="w-auto">
                        <FieldLabel>ویدیوی جلسه</FieldLabel>
                        <UploaderButton
                            endpoint="chapterVideo"
                            label="آپلود ویدئو"
                            doneLabel="تغییر ویدئو"
                            hasValue={!!field.value}
                            detectDuration
                            onChange={(url, duration) => {
                                field.onChange(url ?? "");
                                durationField.onChange(url ? duration ?? null : null);
                                if (url) toast.success("ویدئو آپلود شد");
                            }}
                        />
                    </Field>
                )}
            />

            {/* نمایش عمومی */}
            <Controller
                name={`${base}.isFree`}
                control={control}
                render={({ field }) => (
                    <Field orientation="horizontal" className="h-9 w-auto items-center">
                        <Checkbox
                            id={field.name}
                            checked={field.value}
                            onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <FieldLabel htmlFor={field.name}>نمایش عمومی</FieldLabel>
                    </Field>
                )}
            />

            <Button type="button" variant="destructive" size="icon" onClick={onRemove} aria-label="حذف جلسه">
                <HugeiconsIcon icon={Delete02Icon} />
            </Button>
        </div>
    );
}