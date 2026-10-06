import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function course(courseId: string) {
    const user = await getCurrentUser()

    if (!user) {
        return { message: "User not found" }
    }

    const course = await prisma.course.findUnique({
        where: {
            id: courseId,
            teacherId: user.id
        },
        include: {
            category: true
        }
    })

    return course
}