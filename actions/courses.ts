"use server"

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { basicCourseInfoSchema, type CourseTitleSchema, type BasicCourseInfoForm, courseTitleSchema } from "@/schemas/teacherCourse";
import { revalidatePath } from "next/cache";

// export async function updateCourse(courseId: string, values: BasicCourseInfoForm) {

//     // بررسی وجود کاربر یا چک role آن 
//     const user = await getCurrentUser()
//     if (!user || user.role !== 'TEACHER') {
//         return { message: "There is no user or access" }
//     }

//     // بررسی دیتاهایی که به سرور می‌آید 
//     const parsed = basicCourseInfoSchema.safeParse(values);
//     if (!parsed.success) {
//         return { message: "Your data is not valid" };
//     }

//     const { title, category, level, price, discount } = parsed.data;

//     const existingCourse = await prisma.course.findUnique({
//         where: { id: courseId },
//         select: { teacherId: true },
//     })

//     // بررسی وجود دوره
//     if (!existingCourse) {
//         return {
//             message: "Course not found",
//         };
//     }

//     // بررسی مالکیت دوره
//     if (existingCourse.teacherId !== user.id) {
//         return { message: "This course is not yours" }
//     }

//     // بررسی وجود دسته‌بندی 
//     const existingCategory = await prisma.category.findUnique({
//         where: {
//             name: category,
//         },
//         select: {
//             id: true,
//         },
//     });
//     if (!existingCategory) {
//         return {
//             message: "Category not found",
//         };
//     }

//     const mainCourseInfo = await prisma.course.upsert({
//         where: {
//             id: courseId
//         },
//         update: {
//             title,
//             categoryId: existingCategory.id,
//             level,
//             price: Number(price),
//             discount: discount ? Number(discount) : 0
//         },
//         create: {
//             title,
//             categoryId: existingCategory.id,
//             level,
//             price: Number(price),
//             discount: discount ? Number(discount) : 0,
//             teacherId: user.id
//         }
//     })

//     return mainCourseInfo
// }

export async function createCourse(values: CourseTitleSchema) {
    const user = await getCurrentUser()
    if (!user || user.role !== 'TEACHER') {
        return {
            success: false,
            message: "دسترسی غیرمجاز است"
        }
    }

    const parsed = courseTitleSchema.safeParse(values);
    if (!parsed.success) {
        return {
            success: false,
            message: "اطلاعات وارد شده معتبر نیست"
        }
    }

    const { title } = parsed.data;

    const course = await prisma.course.create({
        data: {
            title,
            teacherId: user.id
        }
    })

    revalidatePath('/teacher/courses')

    return {
        success: true,
        course
    }
} 