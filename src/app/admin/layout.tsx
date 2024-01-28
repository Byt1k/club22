import type { Metadata } from 'next'
import { ReactNode } from 'react'
import s from './RootLayout.module.scss'
import Sidebar from '@/components/Admin/Sidebar/Sidebar'
import Header from '@/components/Admin/Header/Header'

export const metadata: Metadata = {
    title: 'Сеймейный клуб 22',
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
