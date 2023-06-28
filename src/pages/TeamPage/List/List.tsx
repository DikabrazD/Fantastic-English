import Card from 'src/components/Card/Card'
import { ListInterface } from './ListInterface'

import './List.scss'

const List = ({ data, name }: ListInterface) => {
    return (
        <div className='list'>
            <h2 className='list-header'>{name}</h2>
            <ul className='list-wrapper'>
                {data.map((item) => {
                    return (
                        <li className='list-wrapper-item'>
                            <Card data={item} descriptionStatus={true} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
