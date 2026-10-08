import { Button } from "@/components/ui/button"
import { Login, Search, ShoppingBag03Icon, User } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { ModeToggle } from "../mode-toggle"
import { getCurrentUser } from "@/lib/auth"
import Link from "next/link"
import { Suspense } from "react"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 shadow bg-white/10 backdrop-blur-sm border border-white/20 rounded-full sticky top-5 z-50 mt-5 mx-20 dark:bg-background/10">
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                    <Image src="/logo.avif" fill alt="Logo" />
                </div>

                <ul className="flex items-center gap-4 text-primary">
                    <li>دوره‌ها</li>
                    <li>مسیر یادگیری</li>
                    <li>مقالات</li>
                    <li>درباره‌ما</li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon-lg" className="border-primary/50">
                    <HugeiconsIcon icon={Search} className="size-6 text-primary" />
                </Button>

                <ModeToggle />

                <Button variant="outline" size="icon-lg" className="border-primary/50">
                    <HugeiconsIcon icon={ShoppingBag03Icon} className="size-6 text-primary" />
                </Button>

                <Suspense fallback={<p>loading...</p>}>
                    <AuthHandle />
                </Suspense>
            </div>
        </nav>
    )
}

export default Navbar

async function AuthHandle() {
    const user = await getCurrentUser()
    return (
        <>
            {user ? (
                <div className="hidden md:block">

                    <Button variant="outline" size="icon-lg" className="border border-primary/50">
                        <Link href="/teacher/courses">
                            <HugeiconsIcon icon={User} className="size-6 text-primary" />
                        </Link>
                    </Button>
                </div>
            ) : (
                <Button size="lg">
                    <Link href="/login" className="flex gap-2 items-center">
                        <HugeiconsIcon icon={Login} className="size-5 rotate-180" />
                        ورود | ثبت‌نام
                    </Link>
                </Button>
            )}
        </>
    )
}