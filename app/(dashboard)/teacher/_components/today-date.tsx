import { connection } from "next/server"

export async function TodayDate() {
    await connection()
    const day = new Date().toLocaleString("fa", {
        weekday: "long",
        month: "long",
        day: "numeric",
    })
    return <span className="text-[1rem]">{day}</span>
}