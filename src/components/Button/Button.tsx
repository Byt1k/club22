import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import s from './Button.module.scss'

const Button: FC<PropsType> = ({ type, isLink, href, children, className }) => {
    let styles = ''

    switch (type) {
        case 'main':
            styles = s.mainBtn
            break
        case 'secondary':
            styles = s.secondaryBtn
            break
    }

    if (isLink) {
        return (
            <Link
                href={href ?? '/'}
                className={classnames(styles, className ?? '')}
            >
                {children}
            </Link>
        )
    }
    return (
        <button className={classnames(styles, className ?? '')}>
            {children}
        </button>
    )
}

export default Button

type PropsType = {
    type: 'main' | 'secondary'
    isLink?: boolean
    href?: string
    className?: string
    children: ReactNode
}
