'use client'

import { Button } from "@/components/ui/button"
import { useCardSliderApi } from "@/context/card-slider-context"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useState } from "react"

function CardSliderControls() {
    const {api} = useCardSliderApi()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    useEffect(() => {
        if (!api) return

        const update = () => {
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }

        update()
        api.on("select", update)
        api.on("reInit", update)

        return () => {
            api.off("select", update)
            api.off("reInit", update)
        }
    }, [api])

    return (
        <div className="hidden md:flex items-center gap-2">
            <Button
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
            >
                <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4 rtl:rotate-180" />
            </Button>

            <Button
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
            >
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 rtl:rotate-180" />
            </Button>
        </div>
    )
}

export default CardSliderControls