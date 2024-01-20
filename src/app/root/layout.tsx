import type { Metadata } from 'next'
import { ReactNode } from 'react'
import s from '@/app/root/RootLayout.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
    title: 'Клуб 22',
    description: 'Семейный клуб',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <div className={s.root}>
                    <Sidebar />
                    <Header />
                    <main className={s.content}>{children}</main>
                </div>
            </body>
        </html>
    )
}
