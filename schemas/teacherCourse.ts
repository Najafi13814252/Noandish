import { z } from "zod";

const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();

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

export const courseDescriptionsSchema = z.object({
    description: z
        .string()
        .trim()
        .min(1, "توضیحات خلاصه الزامی است")
        .min(20, "توضیحات خلاصه باید حداقل ۲۰ کاراکتر باشد")
        .max(300, "توضیحات خلاصه نباید بیشتر از ۳۰۰ کاراکتر باشد"),

    fullDescription: z
        .string()
        .refine((html) => stripHtml(html).length > 0, "شرح کامل دوره الزامی است")
        .refine((html) => stripHtml(html).length >= 50, "شرح کامل دوره باید حداقل ۵۰ کاراکتر باشد"),
});

export const courseImageSchema = z.object({
    imageUrl: z
        .string()
        .min(1, "تصویر دوره الزامی است")
        .url("آدرس تصویر معتبر نیست"),
});

export const lessonSchema = z.object({
    id: z.string().optional(),
    title: z
        .string()
        .trim()
        .min(1, "عنوان درس الزامی است")
        .min(3, "عنوان درس باید حداقل ۳ کاراکتر باشد"),
    videoUrl: z.string().optional().or(z.literal("")),
    duration: z.number().nonnegative().nullable().optional(),
    isFree: z.boolean(),
});

export const chapterSchema = z.object({
    id: z.string().optional(),
    title: z
        .string()
        .trim()
        .min(1, "عنوان فصل الزامی است")
        .min(3, "عنوان فصل باید حداقل ۳ کاراکتر باشد"),
    lessons: z.array(lessonSchema),
});

export const courseChaptersSchema = z.object({
    chapters: z.array(chapterSchema),
});

export type CourseChaptersForm = z.infer<typeof courseChaptersSchema>;
export type CourseImageForm = z.infer<typeof courseImageSchema>;
export type CourseDescriptionsForm = z.infer<typeof courseDescriptionsSchema>;
export type CourseTitleSchema = z.infer<typeof courseTitleSchema>;
export type BasicCourseInfoForm = z.infer<typeof basicCourseInfoSchema>;