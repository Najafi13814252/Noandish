import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from 'cn';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface RegisterProps {
    children: ReactNode
    footer: string
    title: string
    description: string
    href: string
}

function Register({ children, title, footer, description, href }: RegisterProps) {
    return (
        <div className="text-center">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "absolute inset-0 -z-10 w-full h-full",
                    "mask-[radial-gradient(circle_at_center,white,transparent)]",
                )}
            />
            <div className="w-full h-auto flex flex-col items-center my-2">
                <Image
                    src="/logo.avif"
                    width={75}
                    height={75}
                    alt="Logo"
                    priority
                    className="rounded-full"
                />
                <div className="flex flex-col gap-2 mb-4">
                    <h2 className="text-primary text-4xl font-heading">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-lg dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>

            {children}

            {/* <div className="flex items-center gap-3 w-full my-4">
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                <span className="text-xs text-gray-400 dark:text-gray-500">یا</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div> */}

            <Link
                href={href}
                className="mt-4 text-sm text-gray-800 hover:text-sky-600 duration-200 cursor-pointer dark:text-white inline-block">
                {footer}
            </Link>
        </div>
    );
};

export default Register;