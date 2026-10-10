"use server"

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
    basicCourseInfoSchema,
    courseTitleSchema,
    courseDescriptionsSchema,
    courseImageSchema,
    courseChaptersSchema,
    type CourseDescriptionsForm,
    type CourseTitleSchema,
    type BasicCourseInfoForm,
    type CourseImageForm,
    type CourseChaptersForm,
} from "@/schemas/teacherCourse";
import { revalidatePath } from "next/cache";

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

export async function updateCourse(courseId: string, values: BasicCourseInfoForm) {

    // بررسی وجود کاربر یا چک role آن 
    const user = await getCurrentUser()
    if (!user || user.role !== 'TEACHER') {
        return { message: "There is no user or access" }
    }

    // بررسی دیتاهایی که به سرور می‌آید 
    const parsed = basicCourseInfoSchema.safeParse(values);
    if (!parsed.success) {
        return { message: "Your data is not valid" };
    }

    const { title, category, level, price, discount } = parsed.data;

    const existingCourse = await prisma.course.findUnique({
        where: { id: courseId },
        select: { teacherId: true },
    })

    // بررسی وجود دوره
    if (!existingCourse) {
        return {
            message: "Course not found",
        };
    }

    // بررسی مالکیت دوره
    if (existingCourse.teacherId !== user.id) {
        return { message: "This course is not yours" }
    }

    // بررسی وجود دسته‌بندی 
    const existingCategory = await prisma.category.findUnique({
        where: {
            slug: category,
        },
        select: {
            id: true,
        },
    });
    if (!existingCategory) {
        return {
            message: "Category not found",
        };
    }

    const existingLevel = await prisma.level.findUnique({
        where: {
            slug: level
        },
        select: {
            id: true,
        },
    });
    if (!existingLevel) {
        return {
            message: "Level not found",
        };
    }

    const mainCourseInfo = await prisma.course.update({
        where: {
            id: courseId,
            teacherId: user.id
        },
        data: {
            title,
            categoryId: existingCategory.id,
            levelId: existingLevel.id,
            price: Number(price),
            discount: discount ? Number(discount) : 0
        }
    })

    return mainCourseInfo
}

export async function updateCourseDescriptions(courseId: string, values: CourseDescriptionsForm) {
    // بررسی کاربر و نقش
    const user = await getCurrentUser()
    if (!user || user.role !== 'TEACHER') {
        return { success: false, message: "دسترسی غیرمجاز است" }
    }

    // اعتبارسنجی داده‌ها در سمت سرور
    const parsed = courseDescriptionsSchema.safeParse(values)
    if (!parsed.success) {
        return { success: false, message: "اطلاعات وارد شده معتبر نیست" }
    }

    const { description, fullDescription } = parsed.data

    // بررسی وجود دوره و مالکیت آن
    const existingCourse = await prisma.course.findUnique({
        where: { id: courseId },
        select: { teacherId: true },
    })
    if (!existingCourse) {
        return { success: false, message: "دوره پیدا نشد" }
    }
    if (existingCourse.teacherId !== user.id) {
        return { success: false, message: "این دوره متعلق به شما نیست" }
    }

    const course = await prisma.course.update({
        where: { id: courseId, teacherId: user.id },
        data: { description, fullDescription },
    })

    revalidatePath(`/teacher/courses/${courseId}`)

    return { success: true, course }
}

export async function updateCourseImage(courseId: string, values: CourseImageForm) {
    // احراز هویت و نقش
    const user = await getCurrentUser()
    if (!user || user.role !== 'TEACHER') {
        return { success: false, message: "دسترسی غیرمجاز است" }
    }

    // اعتبارسنجی سمت سرور
    const parsed = courseImageSchema.safeParse(values)
    if (!parsed.success) {
        return { success: false, message: "تصویر وارد شده معتبر نیست" }
    }

    const { imageUrl } = parsed.data

    // بررسی وجود دوره و مالکیت آن
    const existingCourse = await prisma.course.findUnique({
        where: { id: courseId },
        select: { teacherId: true },
    })
    if (!existingCourse) {
        return { success: false, message: "دوره پیدا نشد" }
    }
    if (existingCourse.teacherId !== user.id) {
        return { success: false, message: "این دوره متعلق به شما نیست" }
    }

    await prisma.course.update({
        where: { id: courseId, teacherId: user.id },
        data: { imageUrl },
    })

    revalidatePath(`/teacher/courses/${courseId}`)
    revalidatePath('/teacher/courses')

    return { success: true }
}

export async function updateCourseChapters(courseId: string, values: CourseChaptersForm) {
    const user = await getCurrentUser()
    if (!user || user.role !== 'TEACHER') {
        return { success: false, message: "دسترسی غیرمجاز است" }
    }

    const parsed = courseChaptersSchema.safeParse(values)
    if (!parsed.success) {
        return { success: false, message: "اطلاعات وارد شده معتبر نیست" }
    }

    const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: {
            teacherId: true,
            chapters: { select: { id: true, lessons: { select: { id: true } } } },
        },
    })

    if (!course) return { success: false, message: "دوره پیدا نشد" }
    if (course.teacherId !== user.id) return { success: false, message: "این دوره متعلق به شما نیست" }

    // فقط idهایی که واقعاً متعلق به همین دوره‌اند معتبرند
    const existingChapterIds = new Set(course.chapters.map(c => c.id))
    const existingLessonIds = new Set(course.chapters.flatMap(c => c.lessons.map(l => l.id)))

    const { chapters } = parsed.data
    const keepChapterIds = chapters
        .map(c => c.id)
        .filter((id): id is string => !!id && existingChapterIds.has(id))

    await prisma.$transaction(async (tx) => {
        // حذف فصل‌هایی که دیگر در فرم نیستند (درس‌ها با cascade حذف می‌شوند)
        await tx.chapter.deleteMany({
            where: { courseId, id: { notIn: keepChapterIds } },
        })

        for (const [chapterIndex, chapter] of chapters.entries()) {
            let chapterId: string

            if (chapter.id && existingChapterIds.has(chapter.id)) {
                await tx.chapter.update({
                    where: { id: chapter.id },
                    data: { title: chapter.title, position: chapterIndex },
                })
                chapterId = chapter.id
            } else {
                const created = await tx.chapter.create({
                    data: { title: chapter.title, position: chapterIndex, courseId },
                })
                chapterId = created.id
            }

            const keepLessonIds = chapter.lessons
                .map(l => l.id)
                .filter((id): id is string => !!id && existingLessonIds.has(id))

            await tx.lesson.deleteMany({
                where: { chapterId, id: { notIn: keepLessonIds } },
            })

            for (const [lessonIndex, lesson] of chapter.lessons.entries()) {
                const data = {
                    title: lesson.title,
                    videoUrl: lesson.videoUrl || null,
                    duration: lesson.videoUrl ? lesson.duration ?? null : null,
                    isFree: lesson.isFree,
                    position: lessonIndex,
                    chapterId,
                }

                if (lesson.id && existingLessonIds.has(lesson.id)) {
                    await tx.lesson.update({ where: { id: lesson.id }, data })
                } else {
                    await tx.lesson.create({ data })
                }
            }
        }
    })

    // برگرداندن داده‌ی تازه (با idهای جدید) تا فرم reset شود
    const updated = await prisma.chapter.findMany({
        where: { courseId },
        orderBy: { position: "asc" },
        include: { lessons: { orderBy: { position: "asc" } } },
    })

    revalidatePath(`/teacher/courses/${courseId}`)

    return {
        success: true,
        chapters: updated.map(chapter => ({
            id: chapter.id,
            title: chapter.title,
            lessons: chapter.lessons.map(lesson => ({
                id: lesson.id,
                title: lesson.title,
                videoUrl: lesson.videoUrl ?? "",
                duration: lesson.duration ?? null,
                isFree: lesson.isFree,
            })),
        })),
    }
}