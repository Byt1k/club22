import s from './Header.module.scss'
import Link from 'next/link'
import Button from '@/components/Button/Button'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href="/" className={s.logo}>
                    <img src="/img/logo.svg" alt="Семейеый клуб 22" />
                </Link>
                <nav className={s.menu}>
                    <Link href="/" className={s.menu__item}>
                        О нас
                    </Link>
                    <Link href="/" className={s.menu__item}>
                        Как вступить
                    </Link>
                    <Link href="/" className={s.menu__item}>
                        Контакты
                    </Link>
                </nav>
                <Button type="main" className={s.btn}>
                    Войти в клуб
                </Button>
            </div>
        </header>
    )
}

export default Header
