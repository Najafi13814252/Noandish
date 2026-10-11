import Navbar from "@/components/custom/navbar-components/navbar"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "cn"
import { ReactNode } from "react"

function CourseLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "absolute inset-0 -z-10 w-full h-full",
                    "mask-[radial-gradient(circle_at_center,white,transparent)]",
                )}
            />
            <main className="mx-72 mt-6">

                {children}
            </main>
        </>
    )
}

export default CourseLayout