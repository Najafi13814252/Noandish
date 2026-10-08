import { getCourses } from "@/data/courses"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { Suspense } from "react"

function CoursePage() {
    return (
        <div className="p-6">
            <Suspense fallback={<p>Loading...</p>}>
                <HandleGetCourses />
            </Suspense>
        </div>
    )
}

export default CoursePage

async function HandleGetCourses() {
    const courses = await getCourses()

    return (
        <DataTable columns={columns} data={courses ?? []} />
    )
}