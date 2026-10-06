import z from "zod";

export const upsertCourseSchema = z.object({
    title: z
        .string()
        .min(2, "عنوان باید حداقل 2 کاراکتر باشد")
        .max(50, "عنوان باید حداکثر 50 کاراکتر باشد"),

    category: z
        .string()
        .min(1, "انتخاب دسته‌بندی الزامی است"),

    level: z
        .string()
        .min(1, "انتخاب سطح دوره الزامی است"),

    price: z
        .number()
        .int()
        .min(0, "قیمت نمی‌تواند منفی باشد"),

    discount: z
        .number()
        .optional()
})