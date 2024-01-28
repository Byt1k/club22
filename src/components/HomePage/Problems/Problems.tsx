import s from './Problems.module.scss'

const Problems = () => {
    return (
        <section className={s.problems}>
            <div className={s.container}>
                <h2>
                    Работа поглощает большую часть времени,{' '}
                    <span>а семья и призвание ждут на фоне</span>
                </h2>
                <div className={s.wrapper}>
                    <div className={s.problems__item}>
                        <p className={s.number}>I</p>
                        <p className={s.text}>
                            Дети проводят мало времени с родителямииз-за
                            интенсивного учебного графика
                        </p>
                    </div>
                    <div className={s.problems__item}>
                        <p className={s.number}>II</p>
                        <p className={s.text}>
                            Организация досуга для семьи отнимает много времени
                            и энергии
                        </p>
                    </div>
                    <div className={s.problems__item}>
                        <p className={s.number}>III</p>
                        <p className={s.text}>
                            Трудно сочетать семейный быт и личное саморазвитие
                        </p>
                    </div>
                    <div className={s.problems__item}>
                        <p className={s.number}>IV</p>
                        <p className={s.text}>
                            Отсутствует пространство для совместного отдыха
                            детей и родителей
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problems
