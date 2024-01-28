import s from './Art.module.scss'

const Art = () => {
    return (
        <section className={s.art}>
            <div className={s.container}>
                <h2>
                    Развиваем общий интерес к <span>искусству</span>
                </h2>
                <p>
                    Собственная театральная студия, где дети и взрослые могут
                    изучать актерское мастерство, сценарное дело и риторику, а
                    также участвовать в создании спектаклей под руководством
                    режиссёра театра и кино Артема Сухорукова
                </p>
            </div>
            <div className={s.gallery}>
                <img src="/img/home/art1.png" alt="art" />
                <img src="/img/home/art2.png" className={s.main} alt="art" />
                <img src="/img/home/art3.png" alt="art" />
            </div>
        </section>
    )
}

export default Art
