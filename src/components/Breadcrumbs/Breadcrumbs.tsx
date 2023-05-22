import './Breadcrumbs.scss'
import { RouterNames } from 'src/router'
import { Link } from 'react-router-dom'
import { BreadcrumbsInterface } from './BreadcrumbsInterface'

const Breadcrumbs = ({ current }: BreadcrumbsInterface) => {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <h2 className='breadcrumbs-header'>{current}</h2>
                <div className='breadcrumbs-list'>
                    <Link to={RouterNames.HOME}>Home</Link>
                    <span>/</span>
                    <span>{current}</span>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
