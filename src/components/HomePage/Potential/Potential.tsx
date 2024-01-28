import s from './Potential.module.scss'
import Button from '@/components/Button/Button'

const Potential = () => {
    return (
        <section className={s.potential}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>
                        Реализуем творческий <span>потенциал</span>
                    </h2>
                    <div>
                        <p>
                            Киноклуб для просмотров многослойных фильмов,
                            увлекательных дискуссий и разгадывания тайн
                            кинематографии в компании единомышленников
                        </p>
                        <Button type="main" className={s.btn}>
                            Войти в клуб
                        </Button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/img/home/potential.png" alt="potential" />
                    <div>
                        <p className={s.card__title}>
                            Тех, кто мечтает о собственных киношедеврах,
                            приглашаем на курс кинопроизводства
                        </p>
                        <p className={s.card__text}>
                            Дети и родители познакомятся с основами процесса,
                            примеряя на себя роли режиссера, сценариста,
                            художника-постановщика,многие другие и снимут
                            собственные короткометражные фильмы для прокатов на
                            фестивалях РФ под руководством Бахадыра Реимбаева
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Potential
