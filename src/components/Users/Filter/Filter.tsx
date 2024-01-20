import s from './Filter.module.scss'
import svgIcons from '@/utils/svg-icons'
import classnames from 'classnames'

const Filter = () => {
    return (
        <div className={s.filter}>
            <div className={classnames(s.filter__item, s.filter__item_search)}>
                {svgIcons.inputs.search}
            </div>
            <div className={classnames(s.filter__item, s.filter__item_select)}>
                Статус участника
                {svgIcons.inputs.arrow}
            </div>
            <div className={classnames(s.filter__item)}>Семья</div>
            <div className={classnames(s.filter__item)}>Роль участника</div>
            <div className={classnames(s.filter__item)}>Совет клуба</div>
        </div>
    )
}

export default Filter
