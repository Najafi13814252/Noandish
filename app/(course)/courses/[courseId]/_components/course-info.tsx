import { Card, CardContent } from "@/components/ui/card"
import { formatDuration } from "@/lib/formatDuration"
import { Award04Icon, Chart, Clock, CourseIcon, CustomerSupportIcon, Progress } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface CourseInfoProps {
    courseDuration: number
    courseLevel: string
}

function CourseInfo({ courseDuration, courseLevel }: CourseInfoProps) {
    const info = [
        { id: 1, icon: CourseIcon, title: "نوع دوره", value: "آنلاین" },
        { id: 2, icon: Clock, title: "زمان دوره", value: formatDuration(courseDuration) },
        { id: 3, icon: Chart, title: "سطح دوره", value: courseLevel },
        { id: 4, icon: Award04Icon, title: "پیش‌نیاز", value: "ندارد" },
        { id: 5, icon: CustomerSupportIcon, title: "پشتیبانی", value: "تلگرام و تیکت" },
        { id: 6, icon: Progress, title: "وضعیت دوره", value: "تکمیل نشده" }
    ]



    return (
        <Card>
            <CardContent className="space-y-8">
                {info.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2 text-sm text-muted-foreground"> 
                            <HugeiconsIcon icon={item.icon} className="size-4"/>
                            {item.title}
                        </div>
                        <p>{item.value}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default CourseInfo