import { ModeToggle } from "@/components/custom/mode-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import { TodayDate } from "./today-date"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Notification } from "@hugeicons/core-free-icons"

function TeacherHeader() {
    return (
        <header className="fixed left-4 top-4 w-full pr-84 z-50">
            <Card className="bg-white/10 backdrop-blur-sm p-4! dark:bg-background/10">
                <CardContent className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <h1 className="font-heading text-xl text-primary">داشبورد معلم</h1>
                        <span className="text-sm text-muted-foreground">مدیریت دوره‌ها، دانشجوها و آمار</span>
                    </div>
                    <div className="flex items-center divide-x">
                        <div className="px-4 space-x-4">
                            <ModeToggle />
                            
                            <Button size="icon-lg" variant="outline" className="border-primary/50">
                                <HugeiconsIcon icon={Notification} className="size-6 text-primary"/>
                            </Button>
                        </div>

                        <div className="px-4">
                            <Suspense fallback={<span className="opacity-50">...</span>}>
                                <TodayDate />
                            </Suspense>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </header>
    )
}

export default TeacherHeader