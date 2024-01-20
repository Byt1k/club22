import svgIcons from '@/utils/svg-icons'
import s from './Notifications.module.scss'
import classnames from 'classnames'
import { FC } from 'react'

const Notifications: FC<PropsType> = ({ className }) => {
    return (
        <div className={classnames(s.notifications, className ?? '')}>
            <div className={s.notifications__count}>8</div>
            {svgIcons.notification}
        </div>
    )
}

export default Notifications

type PropsType = {
    className?: string
}
