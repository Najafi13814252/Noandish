import { ReactNode, Suspense } from 'react'
import TeacherDashboard from './_components/teacher-dashboard'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { cn } from 'cn'
import TeacherHeader from './_components/teacher-header'

function CourseCreateLayout({ children }: { children: ReactNode }) {
    return (
        <div className='w-full h-full flex gap-2 p-4'>

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

            <section className='w-1/5'>
                <Suspense fallback={null}>
                    <TeacherDashboard />
                </Suspense>
            </section>
            <div className='space-y-4 w-4/5'>
                <TeacherHeader />
                <main className='mt-26'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default CourseCreateLayout