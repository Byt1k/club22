import s from './Health.module.scss'

const Health = () => {
    return (
        <section className={s.health}>
            <div className={s.container}>
                <div className={s.left}>
                    <h2>
                        Поддерживаем физическое <span>здоровье</span>
                    </h2>
                    <p>
                        Киноклуб для просмотров многослойных фильмов,
                        увлекательных дискуссий и разгадывания тайн
                        кинематографии в компании единомышленников
                    </p>
                </div>
                <div className={s.right}>
                    <div className={s.item}>Коньки</div>
                    <div className={s.item}>Лыжи</div>
                    <div className={s.item}>Велосипеды</div>
                    <div className={s.item}>Ролики</div>
                    <div className={s.item}>Футбол</div>
                    <div className={s.item}>Баскетбол</div>
                    <div className={s.item}>Волейбол</div>
                    <div className={s.item}>Шахматы</div>
                    <div className={s.item}>Плавание</div>
                    <div className={s.item}>Функциональные тренировки</div>
                </div>
            </div>
        </section>
    )
}

export default Health
