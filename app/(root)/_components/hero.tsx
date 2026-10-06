import Image from "next/image"
import Link from "next/link"

import { HugeiconsIcon } from "@hugeicons/react"
import { AssignmentsIcon, BookOpen01Icon, CheckIcon, Clock, MentoringIcon, MortarboardIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { buttonVariants } from "@/components/ui/button"

function Hero() {
    return (
        <section className="pt-20 relative flex lg:flex-row flex-col-reverse items-center justify-between px-2 md:px-6 rounded-lg font-dana overflow-hidden">

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "absolute inset-0 -z-10 w-full h-full",
                    "mask-[radial-gradient(circle_at_right,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />

            <div className="text-center lg:text-right">
                <div className="px-4 py-2 shadow rounded-full flex items-center gap-x-2 w-fit bg-white mb-4">
                    <span className="relative flex size-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex size-2.5 rounded-full bg-teal-500"></span>
                    </span>
                    <span className="text-sm text-muted-foreground">از 0 مطلق تا 100 قله کنار شما هستیم</span>
                </div>
                <p className="md:text-5xl text-4xl text-teal-700 leading-normal font-heading dark:text-slate-200">آموزش‌های تخصصی همراه با توسعه فردی
                    برای سازمان‌ها و شرکت‌ها <br /> با <span className="text-secondary dark:text-primary">بنیاد تعالی آموزش نو اندیش</span></p>
                <p className="text-base max-w-lg mx-auto lg:mx-0 text-muted-foreground leading-relaxed my-8 dark:text-gray-200">بهترین و بروزترین
                    آموزش‌ها با بهترین و مجرب‌ترین اساتید ایران از مبتدی تا پیشرفته، کارمند تا فریلنسر همه باهم برای پیشرفت و
                    تعالی</p>

                <Link href="/courses" className={buttonVariants({ className: "bg-secondary text-primary! hover:bg-yellow-300 dark:hover:bg-transparent", size: "lg" })}>
                    <HugeiconsIcon icon={BookOpen01Icon} className="size-6" />
                    <span className="text-lg font-medium cursor-pointer">مشاهده دوره‌ها</span>
                </Link>

                <div className="flex items-center gap-20 mt-8">
                    <div className="flex items-center gap-x-2">
                        <HugeiconsIcon icon={MortarboardIcon} className="size-8 text-secondary" />
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-medium text-primary">+350هزار</span>
                            <span className="text-muted-foreground">
                                دانشجو
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <HugeiconsIcon icon={Clock} className="size-8 text-secondary" />
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-medium text-primary">+5000</span>
                            <span className="text-muted-foreground">
                                ساعت آموزش
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <HugeiconsIcon icon={AssignmentsIcon} className="size-8 text-secondary" />
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-medium text-primary">+170</span>
                            <span className="text-muted-foreground">
                                دوره تخصصی
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/hero.avif"
                    alt="Hero_Image"
                    width={1024}
                    height={1024}
                />

                <div className="absolute top-10 left-24 z-20 bg-white/10 shadow backdrop-blur-sm rounded-2xl w-fit p-4 flex items-center gap-2">
                    <HugeiconsIcon
                        icon={CheckIcon}
                        className="bg-teal-100/50 text-teal-500 p-2 rounded-full size-10"
                    />

                    <div className="flex flex-col items-start gap-2">
                        <span className="text-sm font-bold">پروژه واقعی</span>
                        <span className="text-xs text-muted-foreground">
                            برای رزومه قوی‌تر
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-70 -right-5 z-20 bg-white/10 shadow backdrop-blur-sm rounded-2xl w-fit p-4 flex items-center gap-2">
                    <HugeiconsIcon
                        icon={MentoringIcon}
                        className="bg-yellow-100/50 text-yellow-400 p-2 rounded-full size-10"
                    />

                    <div className="flex flex-col items-start gap-2">
                        <span className="text-sm font-bold">منتور</span>
                        <span className="text-xs text-muted-foreground">
                            تا قله کنار همیم
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero