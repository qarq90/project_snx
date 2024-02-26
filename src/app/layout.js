import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import IsNavFooter from "@/components/IsNavFooter";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        <div className="container">
            <IsNavFooter>
                {children}
            </IsNavFooter>
        </div>
        </body>
        </html>
    )
}

export const metadata = {
    title: 'SnX',
    description: '3D Outfit Customizer',
    manifest: '/manifest.json'
}