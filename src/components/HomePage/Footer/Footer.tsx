import s from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <Link href="/" className={s.footer__logo}>
                    <img src="/img/logo.svg" alt="Клуб 22" />
                </Link>
                <nav className={s.menu}>
                    <Link href="/" className={s.menu__item}>
                        О нас
                    </Link>
                    <Link href="/" className={s.menu__item}>
                        Как вступить
                    </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
