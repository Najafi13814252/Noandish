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
            level: { select: { name: true, slug: true } }
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