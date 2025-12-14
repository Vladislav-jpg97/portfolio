import "./../css/globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Lobster } from "next/font/google"
const Lobster_font = Lobster({
    subsets: ["latin"],
    weight:["400"]
})
interface LayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: {
        default: "Portfolio",
        template: "%s | My Portfolio",
    },
    icons: {
        icon: "/vercel.svg",
    },
}

export default function RootLayout({ children }: LayoutProps) {
    
    return (
        <html lang="en">
            <body className={`${Lobster_font.className}  min-h-screen flex flex-col bg-white text-black`}>
                <Header />

                <main className="flex-1 w-full container px-4 mx-auto">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}

