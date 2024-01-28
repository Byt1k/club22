import s from './Table.module.scss'
import svgIcons from '@/utils/svg-icons'
import classnames from 'classnames'

const Table = () => {
    const users = [
        {
            id: 1,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 2,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 3,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 4,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 5,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 6,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 7,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 8,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 9,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 10,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 11,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 12,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 13,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 14,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 15,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
        {
            id: 16,
            photo: '/img/fakes/woman.png',
            name: 'Андреев Андрей Витальевич',
            status: 'Участник',
            family: 'Крупчатниковы',
            birthday: '01.08.1984',
            phone: '+7 943 131 54 31',
        },
    ]

    return (
        <div className={s.users}>
            <div className={classnames(s.users__row, s.users__row_head)}>
                <div>ФИО участника</div>
                <div>Статус</div>
                <div>Семья</div>
                <div>Дата рождения</div>
                <div>Телефон</div>
                <div />
            </div>
            <div className={classnames(s.users__content, 'scroll')}>
                {users?.map(user => (
                    <div key={'user-' + user.id} className={s.users__row}>
                        <div className={s.info}>
                            <img src={user.photo} alt={user.name} />
                            <p>{user.name}</p>
                        </div>
                        <div>{user.status}</div>
                        <div>{user.family}</div>
                        <div>{user.birthday}</div>
                        <div>{user.phone}</div>
                        <div className="cursor-pointer">{svgIcons.edit}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table
