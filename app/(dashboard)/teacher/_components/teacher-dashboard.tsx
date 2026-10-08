'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Home, Logout, PieChart02Icon, Quiz03Icon, Quiz05Icon, Settings02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
    { id: 1, name: 'خانه', icon: Home, link: '/teacher' },
    { id: 2, name: 'دوره‌ها', icon: BookOpen, link: '/teacher/courses' },
    { id: 3, name: 'پرسش و پاسخ‌ها', icon: Quiz05Icon, link: '/teacher/qa' },
    { id: 4, name: 'آزمون‌ها', icon: Quiz03Icon, link: '/teacher/quize' },
    { id: 5, name: 'آمارها', icon: PieChart02Icon, link: '/teacher/statistics' },
    { id: 6, name: 'تنظیمات', icon: Settings02Icon, link: '/teacher/setting' }
]

function TeacherDashboard() {
    const pathname = usePathname()
    return (
        <aside className="fixed w-72">
            <Card>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Avatar size="lg">
                            <AvatarImage
                                src="#"
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>ا</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">امیرحسین نجفی</span>
                            <span className="text-muted-foreground text-sm">najafi1234@gmail.com</span>
                        </div>
                    </div>

                    <Separator />

                    <ul className="space-y-2">
                        {menu.map(item => (
                            <li key={item.id} className={cn(
                                "hover:text-primary duration-100 px-2 py-3 rounded-lg",
                                pathname === item.link && 'bg-primary/10 text-primary',
                                item.link.startsWith('/teacher/courses') && 'bg-primary/10 text-primary'

                            )}>
                                <Link href={item.link} className="flex items-center gap-x-2">
                                    <HugeiconsIcon icon={item.icon} className="size-5" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Separator />

                    <Link href="/" className="flex items-center gap-x-2 rounded-lg hover:text-red-500 duration-100 cursor-pointer">
                        <HugeiconsIcon icon={Logout} className="size-5" />
                        خروج از پنل
                    </Link>
                </CardContent>
            </Card>
        </aside>
    )
}

export default TeacherDashboard