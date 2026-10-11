import { course } from "@/data/courses"
import { Suspense } from "react"
import CourseHero from "./_components/course-hero"
import CourseDescription from "./_components/course-description"

async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await params

    const c = await course(courseId)
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="space-y-6">
                <CourseHero
                    courseImage={c?.imageUrl ?? ""}
                    courseTitle={c?.title ?? ""}
                    courseDescription={c?.description ?? ""}
                    coursePrice={c?.price ?? 0}
                    courseDiscount={c?.discount ?? 0}
                />

                <CourseDescription courseDescription={c?.fullDescription ?? ""} />
            </div>
        </Suspense>
    )
}

export default CoursePage