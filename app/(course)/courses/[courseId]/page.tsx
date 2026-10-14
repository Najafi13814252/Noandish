import { course } from "@/data/courses"
import { Suspense } from "react"
import CourseHero from "./_components/course-hero"
import CourseDescription from "./_components/course-description"
import CourseMembers from "./_components/course-members"
import CourseInfo from "./_components/course-info"
import CourseChapters from "./_components/course-chapters"

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


                <div className="w-full flex gap-x-4">
                    <div className="w-2/3 space-y-6">
                        <CourseDescription courseDescription={c?.fullDescription ?? ""} />

                        <CourseChapters
                            courseId={courseId}
                            courseChapters={c?.chapters ?? []}
                        />
                    </div>

                    <div className="w-1/3 space-y-6">
                        <CourseMembers />
                        <CourseInfo
                            courseDuration={c?.totalDuration ?? 0}
                            courseLevel={c?.level?.name ?? ""}
                        />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default CoursePage