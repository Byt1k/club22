import s from './Table.module.scss'
import svgIcons from '@/utils/svg-icons'

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
        <table className={s.users}>
            <thead>
                <tr>
                    <td>ФИО участника</td>
                    <td>Статус</td>
                    <td>Семья</td>
                    <td>Дата рождения</td>
                    <td>Телефон</td>
                    <td />
                </tr>
            </thead>
            <tbody className="scroll">
                {users?.map(user => (
                    <tr key={'user-' + user.id}>
                        <td>
                            <div className={s.info}>
                                <img src={user.photo} alt={user.name} />
                                <p>{user.name}</p>
                            </div>
                        </td>
                        <td>{user.status}</td>
                        <td>{user.family}</td>
                        <td>{user.birthday}</td>
                        <td>{user.phone}</td>
                        <td className="cursor-pointer">{svgIcons.edit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
