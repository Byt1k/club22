import s from './Calling.module.scss'

const Calling = () => {
    return (
        <section className={s.calling}>
            <div className={s.container}>
                <div className={s.left}>
                    <h2>
                        Ищем <span>призвание</span>
                    </h2>
                    <p>
                        Организуем встречи с выдающимися людьми, представителями
                        различных профессий, которые нашли своё истинное
                        призвание и горят любовью к тому, что делают. Это
                        уникальная возможность услышать истории о самых первых
                        шагах в поиске себя и процессе профессиональной
                        самореализации
                    </p>
                    <div className={s.card}>
                        Встречи вдохновляют детей задуматься о том, что их
                        привлекает, помогая им сделать осознанный выбор будущей
                        профессии
                    </div>
                </div>
                <div className={s.right}>
                    <img src="/img/home/calling.png" alt="calling" />
                </div>
            </div>
        </section>
    )
}

export default Calling
