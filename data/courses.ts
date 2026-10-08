import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCourse(courseId: string) {
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
            category: {
                select: {
                    name: true
                }
            }
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