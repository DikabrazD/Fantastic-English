import { HiArrowRight } from 'react-icons/hi'
import { AsideNavInterface } from './AsideNavInterface'

import './AsideNav.scss'

const AsideNav = ({ data }: AsideNavInterface) => {
    return (
        <nav className='nav'>
            <div className='nav-list'>
                {data.map((item) => {
                    return (
                        <a key={item.id} href={item.href} className='nav-list-item'>
                            <div className='nav-list-item-icon'>
                                <HiArrowRight className='image' />
                            </div>
                            <span className='nav-list-item-text'>{item.name}</span>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default AsideNav
