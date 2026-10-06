"use server"

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function createCourse(courseId: string) {

    const user = await getCurrentUser()

    if (!user || user.role !== 'TEACHER') {
        return { message: "There is no user or access" }
    }

    const existing = await prisma.course.findUnique({
        where: { id: courseId },
        select: { teacherId: true },
    })
    if (existing && existing.teacherId !== user.id) {
        return { message: "This course is not yours" }
    }

    // const mainCourseInfo = await prisma.course.upsert({
    //     where: {
    //         id: courseId
    //     },
    //     update: {

    //     },
    //     create: {

    //     }
    // })

    // return mainCourseInfo
}   