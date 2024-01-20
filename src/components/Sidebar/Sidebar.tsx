import React from 'react'
import s from './Sidebar.module.scss'
import Link from 'next/link'
import svgIcons from '@/utils/svg-icons'
import classnames from 'classnames'
import { headers } from 'next/headers'

const Sidebar = () => {
    const headersList = headers()
    const pathname = headersList.get('referer') || ''

    const menu = [
        {
            id: 'users',
            icon: svgIcons.sidebar.users,
            href: '/root/users',
            name: 'Члены клуба',
        },
        {
            id: 'events',
            icon: svgIcons.sidebar.events,
            href: '/root/events',
            name: 'Мероприятия',
        },
    ]

    return (
        <aside className={s.sidebar}>
            <Link href="/" className={s.logo}>
                <img src="/img/logo.svg" alt="Клуб22" />
            </Link>
            <nav className={s.menu}>
                {menu.map(item => (
                    <Link
                        href={item.href}
                        key={item.id}
                        className={classnames(
                            s.menu__item,
                            pathname.indexOf(item.id) >= 0 &&
                                s.menu__item_active,
                        )}
                    >
                        <div className={s.icon}>{item.icon}</div>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
