import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { ReactNode } from "react"

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link href="/" className={buttonVariants({ className: "absolute top-10 left-10", variant: "secondary" })}>
        بازگشت به صفحه اصلی
        <HugeiconsIcon icon={ArrowLeft} className="size-5"/>
      </Link>
      <main className="flex items-center justify-center h-screen">
        {children}
      </main>
    </>
  )
}

export default AuthLayout