"use server"

import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function getWishlistedCourseIds() {
    const user = await getCurrentUser()

    if (!user) {
        return []
    }

    const rows = await prisma.wishlist.findMany({
        where: {
            userId: user.id,
        },
        select: {
            courseId: true,
        },
    })

    return rows.map(row => row.courseId)
}

export async function getWishlistCourses() {
    const user = await getCurrentUser()

    if (!user) {
        return []
    }

    const rows = await prisma.wishlist.findMany({
        where: {
            userId: user.id,
        },
        include: {
            course: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    })

    return rows.map(row => row.course)
}
