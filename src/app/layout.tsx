import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.scss'
import { ReactNode } from 'react'

const montserrat = Montserrat({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
    title: 'Авторизация',
    description: 'Авторизация в семейный клуб',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
