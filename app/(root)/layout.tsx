import Navbar from "@/components/custom/navbar-components/navbar"
import { ReactNode } from "react"

function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-[5000px]">
            <Navbar />
            <main className="flex-1 absolute top-0">
                {children}
            </main>
        </div>
    )
}

export default HomeLayout