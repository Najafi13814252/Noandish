import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./lib/session"

// 1. تعریف protected and public routes 
const protectedRoutes = ['/profile']
const publicRoutes = ['/login', '/signup', '/']

export default async function proxy(req: NextRequest) {
    // 2. بررسی public یا protected بودن مسیر فعلی 
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. گرفتن session از cookie 
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    // 4. redirect به login اگر authentication نشده بود 
    // مسیر محافظت شده است و session نداریم 
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. redirect به profile اگر authentication شده بود 
    // مسیر public است و session داریم و در مسیری که با profile شروع شود نیستیم
    if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}