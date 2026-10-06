"use client"

import { useTheme } from "next-themes"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { cn } from "cn"
import { buttonVariants } from "../ui/button"

export function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <AnimatedThemeToggler
            theme={resolvedTheme as "light" | "dark"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            variant="circle"
            className={cn(
                buttonVariants({ variant: "outline", size: "icon-lg" }),
                "text-primary border-primary/50 [&_svg]:size-6! hover:text-primary"
            )}
        />


    )
}