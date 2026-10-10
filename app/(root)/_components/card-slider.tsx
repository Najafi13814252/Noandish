"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import CourseCard from "@/components/custom/course-card"
import { useCardSliderApi } from "@/context/card-slider-context"
import { CourseWithMeta } from "@/data/courses"

interface CardSliderProps {
    courses: CourseWithMeta[]
}

function CardSlider({ courses }: CardSliderProps) {
    const { setApi } = useCardSliderApi()

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "start",
                direction: "rtl"
            }}
            className="w-full"
        >
            <CarouselContent className="my-4 mr-1">
                {courses.map(course => (
                    <CarouselItem key={course.id} className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                        <CourseCard {...course} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CardSlider
