import { FC } from 'react'
import svgIcons from '@/utils/svg-icons'
import classnames from 'classnames'
import s from './Search.module.scss'

const Search: FC<PropsType> = ({ className }) => {
    return (
        <div className={classnames(s.search, className ?? '')}>
            <button>{svgIcons.inputs.search}</button>
            <input type="text" placeholder="Поиск" />
        </div>
    )
}

export default Search

type PropsType = {
    className?: string
}
