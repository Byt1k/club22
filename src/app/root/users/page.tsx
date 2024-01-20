import s from './Users.module.scss'
import Button from '@/components/Button/Button'
import Filter from '@/components/Users/Filter/Filter'
import Table from '@/components/Users/Table/Table'

const Root = () => {
    return (
        <div className={s.users}>
            <div className={s.title}>
                <h1>Участники клуба</h1>
                <Button type="main">Добавить участника</Button>
            </div>
            <Filter />
            <Table />
        </div>
    )
}

export default Root
