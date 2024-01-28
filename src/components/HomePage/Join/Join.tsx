import s from './Join.module.scss'
import Button from '@/components/Button/Button'

const Join = () => {
    return (
        <section className={s.join}>
            <div className={s.container}>
                <div className={s.left}>
                    <label>Присоединяйтесь к</label>
                    <h2>
                        <span>Семейному Клубу 22</span>
                    </h2>
                    <p>
                        Киноклуб для просмотров многослойных фильмов,
                        увлекательных дискуссий и разгадывания тайн
                        кинематографии в компании единомышленников
                    </p>
                    <Button type="main" className={s.btn}>
                        Войти в клуб
                    </Button>
                </div>
                <div className={s.right}>
                    <img src="/img/home/join.png" alt="join" />
                </div>
            </div>
        </section>
    )
}

export default Join
