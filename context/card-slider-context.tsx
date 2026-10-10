"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { CarouselApi } from "@/components/ui/carousel"

interface CardSliderContextValue {
    api: CarouselApi | undefined
    setApi: (api: CarouselApi) => void
}

const CardSliderContext = createContext<CardSliderContextValue | null>(null)

export function CardSliderProvider({ children }: { children: ReactNode }) {
    const [api, setApi] = useState<CarouselApi>()
    return (
        <CardSliderContext.Provider value={{ api, setApi }}>
            {children}
        </CardSliderContext.Provider>
    )
}

export function useCardSliderApi() {
    const ctx = useContext(CardSliderContext)
    if (!ctx) throw new Error("useCardSliderApi must be used within CardSliderProvider")
    return ctx
}