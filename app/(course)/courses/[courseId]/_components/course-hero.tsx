import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBagAddIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

interface CoursePageProps {
    courseImage: string
    courseTitle: string
    courseDescription: string
    coursePrice: number
    courseDiscount: number
}

function CourseHero({ courseImage, courseTitle, courseDescription, coursePrice, courseDiscount }: CoursePageProps) {
    return (
        <section>
            <Card className="relative overflow-visible mr-16">
                <CardContent className="flex -space-x-16">
                    <div className="relative w-96 aspect-video shrink-0 translate-x-22">
                        <Image
                            src={courseImage}
                            fill
                            alt={courseTitle}
                            className="object-cover rounded-xl border"
                        />
                    </div>

                    <div className="flex flex-col justify-between w-full">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-heading">
                                {courseTitle}
                            </h1>

                            <p className="text-muted-foreground">
                                {courseDescription}
                            </p>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-x-2">
                                <span>قیمت دوره:</span>
                                <p className="text-xl font-bold">
                                    {coursePrice.toLocaleString("fa-IR")} تومان
                                </p>
                            </div>

                            <Button size="lg">
                                <HugeiconsIcon icon={ShoppingBagAddIcon} className="size-5"/>
                                افزودن به سبد خرید
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default CourseHero