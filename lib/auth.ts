import 'server-only'
import { redirect } from 'next/navigation'
import { getSession } from './session'
import { prisma } from './prisma'

export type CurrentUser = {
    id: string
    name: string
    email: string
    avatar: string | null
    role: 'USER' | 'TEACHER'
}

export async function getCurrentUser(): Promise<CurrentUser | null> {
    'use cache: private'

    const session = await getSession()

    if (!session?.userId) {
        return null
    }

    const user = await prisma.user.findUnique({
        where: { id: session.userId as string },
        select: { id: true, name: true, email: true, avatar: true, role: true },
    })

    if (!user) {
        redirect('/login')
    }

    return user
}