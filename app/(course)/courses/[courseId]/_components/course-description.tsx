import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { File } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import DOMPurify from "isomorphic-dompurify"

interface CourseDescriptionProps {
    courseDescription: string
}

function CourseDescription({ courseDescription }: CourseDescriptionProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-x-2">
                    <HugeiconsIcon icon={File} className="text-secondary size-7"/>
                    توضیحات دوره
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(courseDescription),
                }}
                ></div>
            </CardContent>
        </Card>
    )
}

export default CourseDescription