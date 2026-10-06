"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUp01Icon } from "@hugeicons/core-free-icons"

function ScrollToTopButton() {
    return (
        <button
            type="button"
            aria-label="بازگشت به بالای صفحه"
            title="بازگشت به بالا"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary shadow-lg shadow-black/25 transition-transform hover:scale-105 active:scale-95"
        >
            <HugeiconsIcon icon={ArrowUp01Icon} className="size-6" />
        </button>
    )
}

export default ScrollToTopButton
