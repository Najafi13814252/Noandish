import { Button } from "@/components/ui/button"
import { Login, Search, ShoppingBag03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { ModeToggle } from "../mode-toggle"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 shadow bg-white/10 backdrop-blur-sm border border-white/20 rounded-full sticky top-5 z-50 mt-5 mx-20">
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

                <Button size="lg">
                    <HugeiconsIcon icon={Login} className="size-5 rotate-180" />
                    ورود | ثبت‌نام
                </Button>
            </div>
        </nav>
    )
}

export default Navbar