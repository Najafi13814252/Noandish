export function formatDuration(seconds: number) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)

    if (h === 0) return `${m.toLocaleString("fa")} دقیقه`
    return `${h.toLocaleString("fa")} ساعت و ${m.toLocaleString("fa")} دقیقه`
}