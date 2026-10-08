import { z } from "zod";

export const basicCourseInfoSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "عنوان دوره الزامی است")
        .min(3, "عنوان دوره باید حداقل ۳ کاراکتر باشد"),

    category: z
        .string()
        .min(1, "دسته‌بندی دوره را انتخاب کنید"),

    level: z
        .string()
        .min(1, "سطح دوره را انتخاب کنید"),

    price: z
        .string()
        .min(1, "قیمت دوره الزامی است")
        .regex(/^\d+$/, "قیمت باید فقط شامل عدد باشد"),

    discount: z
        .string()
        .regex(/^\d+$/, "تخفیف باید فقط شامل عدد باشد")
        .optional()
        .or(z.literal("")),
});

export const courseTitleSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "عنوان دوره الزامی است")
        .min(3, "عنوان دوره باید حداقل ۳ کاراکتر باشد")
})


export type CourseTitleSchema = z.infer<typeof courseTitleSchema>;
export type BasicCourseInfoForm = z.infer<typeof basicCourseInfoSchema>;