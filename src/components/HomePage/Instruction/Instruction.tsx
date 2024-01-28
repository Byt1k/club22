import s from './Instruction.module.scss'

const Instruction = () => {
    return (
        <section className={s.instruction}>
            <div className={s.container}>
                <h2>
                    Как вступить в <span>Клуб 22?</span>
                </h2>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <p className={s.item__title}>
                            Получение рекомендаций от двух членов Клуба
                        </p>
                        <p className={s.item__text}>
                            Дает возможность вступить в Клуб и повышает доверие
                            к Вам
                        </p>
                        <p className={s.item__number}>I</p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__title}>Решение совета Клуба</p>
                        <p className={s.item__text}>
                            Принимает решение о вступлении в Клуб новых
                            участников
                        </p>
                        <p className={s.item__number}>II</p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__title}>Подписание договора</p>
                        <p className={s.item__text}>
                            Символ взаимного обязательства и внутренней
                            ответственности перед участниками клуба
                        </p>
                        <p className={s.item__number}>III</p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__title}>Оплата взноса</p>
                        <p className={s.item__text}>
                            Участники Клуба ежегодно вносят свой вклад в
                            поддержание высокого стандарта качества мероприятий
                            и обеспечение комфорта, которые мы ценим.
                        </p>
                        <p className={s.item__number}>IV</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instruction
