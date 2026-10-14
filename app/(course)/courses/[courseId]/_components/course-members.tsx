import { Card, CardContent } from "@/components/ui/card"

function CourseMembers() {
    return (
        <Card>
            <CardContent className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">تعداد دانشجویان:</span>
                <p className="font-bold text-xl text-primary">12</p>
            </CardContent>
        </Card>
    )
}

export default CourseMembers