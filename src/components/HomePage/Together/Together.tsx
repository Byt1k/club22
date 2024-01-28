import s from './Together.module.scss'
import classnames from 'classnames'

const Together = () => {
    return (
        <section className={s.together}>
            <div className={s.container}>
                <div className={s.left}>
                    <h2>
                        Познаем окружающий мир <span>вместе</span>
                    </h2>
                    <p className={s.text}>
                        От величественных гор Алтая до удивительных вулканов
                        вулканов Камчатки, от красот Грузии до северных
                        просторов Карелии и загадочного озера Байкал
                    </p>
                    <div className={s.card}>
                        Каждая наша поездка — это уникальное приключение для
                        всей семьи
                    </div>
                </div>
                <div className={s.right}>
                    <img
                        src="/img/home/together1.png"
                        alt="together1"
                        className={classnames(s.img, s.img_parent)}
                    />
                    <img
                        src="/img/home/together2.png"
                        alt="together1"
                        className={classnames(s.img, s.img_child)}
                    />
                </div>
            </div>
        </section>
    )
}

export default Together
