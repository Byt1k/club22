import s from './Header.module.scss'
import Search from '@/components/Search/Search'
import Notifications from '@/components/Notifications/Notifications'

const Header = () => {
    return (
        <header className={s.header}>
            <Search className={s.search} />
            <Notifications className={s.notifications} />
            <div className={s.profile}>
                <img src="/img/fakes/woman.png" alt="username" />
            </div>
        </header>
    )
}

export default Header
