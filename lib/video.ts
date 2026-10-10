export function getVideoDuration(file: File): Promise<number | undefined> {
    return new Promise((resolve) => {
        const video = document.createElement("video")
        const objectUrl = URL.createObjectURL(file)

        const finish = (value?: number) => {
            URL.revokeObjectURL(objectUrl)
            video.removeAttribute("src")
            video.load()
            resolve(value)
        }

        video.preload = "metadata"
        video.onloadedmetadata = () =>
            finish(Number.isFinite(video.duration) ? Math.round(video.duration) : undefined)
        video.onerror = () => finish(undefined)
        video.src = objectUrl
    })
}