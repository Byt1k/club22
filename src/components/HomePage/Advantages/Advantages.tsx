import s from './Advantages.module.scss'

const Advantages = () => {
    return (
        <section className={s.advantages}>
            <div className={s.container}>
                <div className={s.left}>
                    <h2>Что вы получите, став членом Клуба 22</h2>
                    <img src="/img/home/advantages.png" alt="advantages" />
                </div>
                <div className={s.right}>
                    <div className={s.item}>
                        <p className={s.item__number}>I</p>
                        <p className={s.item__text}>
                            Качественный досуг с семьей и участие в
                            мероприятиях, спроектированных для укрепления связей
                            в вашей семье и всестороннее развитие личности
                        </p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__number}>II</p>
                        <p className={s.item__text}>
                            Доступ в закрытое сообщество поддерживающих
                            единомышленников, готовых разделить с вами ценности
                            и традиции
                        </p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__number}>III</p>
                        <p className={s.item__text}>
                            Возможность вносить вклад в формирование плана
                            мероприятий и событий внутри Клуба
                        </p>
                    </div>
                    <div className={s.item}>
                        <p className={s.item__number}>IV</p>
                        <p className={s.item__text}>
                            Обмен контактами и общение, которые могут стать
                            основой для долгих дружественных отношений и
                            реализации совместных проектов
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
