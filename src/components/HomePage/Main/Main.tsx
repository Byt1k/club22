import s from './Main.module.scss'
import Link from 'next/link'
import svgIcons from '@/utils/svg-icons'

const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.container}>
                <div className={s.title}>
                    <h1>
                        Семейный <span>Клуб 22</span>
                    </h1>
                    <p>
                        Пространство, где семья становится крепче и счастливее
                    </p>
                </div>
                <img src="/img/home/main.png" alt="main" className={s.img} />
                <div className={s.offer}>
                    <p>
                        Создание уникального пространства для единомышленников -
                        где Мы счастливы и талантливые Люди! Вместе стремимся к
                        гармоничному развитию всех аспектов личности и познаем
                        окружающий мир
                    </p>
                    <Link href="/" className={s.offer__btn}>
                        {svgIcons.homePage.main.arrow}
                        ВОЙТИ В КЛУБ
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Main
