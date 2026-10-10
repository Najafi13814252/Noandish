import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCourse(courseId: string) {
    "use cache: private"
    const user = await getCurrentUser()

    if (!user) {
        return null
    }

    const course = await prisma.course.findUnique({
        where: {
            id: courseId,
            teacherId: user.id
        },
        include: {
            category: { select: { name: true, slug: true } },
            level: { select: { name: true, slug: true } },
            chapters: {
                orderBy: { position: "asc" },
                include: { lessons: { orderBy: { position: "asc" } } },
            },
        }
    })

    return course
}

export async function getCourses() {
    'use cache: private'

    const user = await getCurrentUser()
    if (!user) {
        return null
    }


    const courses = await prisma.course.findMany({
        where: {
            teacherId: user.id
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return courses
}

export async function getCourseFormOptions() {
    "use cache"
    const [categories, levels] = await Promise.all([
        prisma.category.findMany({
            select: { name: true, slug: true },
            orderBy: { name: "asc" },
        }),
        prisma.level.findMany({
            select: { name: true, slug: true },
        }),
    ])

    return {
        categories,
        levels
    }
}

export type SelectOption = { name: string, slug: string }

export async function getCoursesWithMeta() {
    "use cache"

    const courses = await prisma.course.findMany({
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            title: true,
            imageUrl: true,
            price: true,
            discount: true,
            teacher: {
                select: {
                    user: { select: { name: true, avatar: true } },
                },
            },
            chapters: {
                select: {
                    lessons: { select: { duration: true } },
                },
            },
        },
    })

    return courses.map(({ chapters, teacher, ...course }) => {
        const lessons = chapters.flatMap((chapter) => chapter.lessons)

        return {
            ...course,
            teacher: teacher.user, // { name, avatar }
            lessonsCount: lessons.length,
            totalDuration: lessons.reduce((sum, l) => sum + (l.duration ?? 0), 0), // ثانیه
        }
    })
}

export type CourseWithMeta = Awaited<ReturnType<typeof getCoursesWithMeta>>[number]