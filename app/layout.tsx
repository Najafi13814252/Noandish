import localFont from 'next/font/local'
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Toaster } from "react-hot-toast";

const arad = localFont({
  src: [
    {
      path: '../public/fonts/AradFD-RegularDots3.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-MediumDots3.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-SemiBoldDots3.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-BoldDots3.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-ExtraBoldDots3.woff2',
      weight: '800',
      style: 'normal'
    },
  ],
  variable: "--font-arad",
  display: 'swap',
});

const rokh = localFont({
  src: [
    {
      path: '../public/fonts/Radin3.ttf',
    },
  ],
  variable: "--font-rokh",
  display: 'swap',
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="rtl"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", arad.variable, rokh.variable, "font-arad")}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
