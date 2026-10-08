"use client";

import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import StepBox from "./step-box";
import { basicCourseInfoSchema, type BasicCourseInfoForm } from "@/schemas/teacherCourse";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Course } from "@/generated/prisma/client";
import { updateCourse } from "@/actions/courses";
import toast from "react-hot-toast";


interface BasicCourseInfoProps {
  initialData?: Course & {
    category: {
      name: string
    }
  }
  courseId: string
}

const CATEGORY_ITEMS = ["فرانت‌اند", "بک اند"];
const LEVEL_ITEMS = ["مقدماتی", "متوسط", "پیشرفته", "مقدماتی تا پیشرفته",];

function BasicCourseInfo({initialData, courseId}: BasicCourseInfoProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<BasicCourseInfoForm>({
    resolver: zodResolver(basicCourseInfoSchema),
    defaultValues: {
      title: "",
      category: "",
      level: "",
      price: "",
      discount: "",
    },
  });

  function onSubmit(values: BasicCourseInfoForm) {
    startTransition(async () => {
      try {
        await updateCourse(courseId, values)
        toast.success("دوره با موفقست بروزرسانی شد")
        router.refresh()
      } catch {
        toast.error("خطایی رخ داده است")
      }
    })
  }

  return (
    <section className="space-y-6">
      <StepBox
        step={1}
        title="اطلاعات اصلی دوره"
        description="عنوان، دسته‌بندی، سطح و قیمت دوره را مشخص کنید."
      >

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
          <FieldGroup>
            {/* عنوان دوره */}
            <Controller name="title" control={form.control} render={({ field, fieldState }) => (
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
            )}>
            </Controller>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* دسته‌بندی */}
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      دسته‌بندی دوره
                    </FieldLabel>

                    <Combobox
                      items={CATEGORY_ITEMS}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <ComboboxInput
                        id={field.name}
                        placeholder="دسته‌بندی را انتخاب کنید"
                        aria-invalid={fieldState.invalid}
                      />

                      <ComboboxContent>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* سطح دوره */}
              <Controller
                name="level"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      سطح دوره
                    </FieldLabel>

                    <Combobox
                      items={LEVEL_ITEMS}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <ComboboxInput
                        id={field.name}
                        placeholder="سطح را انتخاب کنید"
                        aria-invalid={fieldState.invalid}
                      />

                      <ComboboxContent>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* قیمت دوره */}
              <Controller name="price" control={form.control} render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>قیمت دوره (تومان)</FieldLabel>
                  <Input
                    type="text"
                    inputMode="numeric"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="قیمت دوره را وارد کنید"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}>
              </Controller>
              {/* تخفیف دوره */}
              <Controller name="discount" control={form.control} render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>تخفیف دوره (اختیاری)</FieldLabel>
                  <Input
                    type="text"
                    inputMode="numeric"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="تخفیف دوره را وارد کنید"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}>
              </Controller>
            </div>
          </FieldGroup>

          <Button type="submit">
           {isPending ? 'درحال بروزرسانی' : ' ثبت تغییرات'}
          </Button>
        </form>
      </StepBox>
    </section>
  );
}

export default BasicCourseInfo;