import { Link, generatePath } from 'react-router-dom'
import { CourseAsideInterface } from './CourseAsideInterface'
import { RouterNames } from 'src/router'

import './CourseAside.scss'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const CourseAside = ({ courseID, teachers, allCourses }: CourseAsideInterface) => {
    return (
        <aside className='course-aside'>
            <div className='course-aside-info'>
                <h3 className='course-aside-info-title'>CURSUL INCLUDE</h3>
                <ul className='course-aside-info-list'>
                    <li className='course-aside-info-list-item'>
                        <span className='course-aside-info-list-item-name'>Lecții</span>{' '}
                        <span className='course-aside-info-list-item-feature'>/ Fizice sau Online</span>
                    </li>
                    <li className='course-aside-info-list-item'>
                        <span className='course-aside-info-list-item-name'>După absolvire</span>{' '}
                        <span className='course-aside-info-list-item-feature'>/ Certificat</span>
                    </li>
                    <li className='course-aside-info-list-item'>
                        <span className='course-aside-info-list-item-name'>Manual</span>{' '}
                        <span className='course-aside-info-list-item-feature'>/ Format Digital</span>
                    </li>
                    <li className='course-aside-info-list-item'>
                        <span className='course-aside-info-list-item-name'>Studenți</span>
                        <span className='course-aside-info-list-item-feature'> / = 10</span>
                    </li>
                    <li className='course-aside-info-list-item'>
                        <span className='course-aside-info-list-item-name'>Garanție</span>{' '}
                        <span className='course-aside-info-list-item-feature'>/ 110%</span>
                    </li>
                </ul>
            </div>
            <div className='course-aside-teachers'>
                <h3 className='course-aside-teachers-title'>PROFESORI</h3>
                <ul className='course-aside-teachers-list'>
                    {teachers
                        ?.filter((item) => item.courses.includes(courseID))
                        .map((item, index) => {
                            if (index < 2)
                                return (
                                    <li key={item.id} className='course-aside-teachers-list-item'>
                                        <div className='course-aside-teachers-list-item-image'>
                                            <img src={item.img} alt='Teacher' className='image' />
                                        </div>
                                        <div className='course-aside-teachers-list-item-info'>
                                            <h3>{item.name}</h3>
                                            <h4>{item.position}</h4>
                                        </div>
                                    </li>
                                )
                            else return null
                        })}
                </ul>
                <a className='course-aside-teachers-link' href='#course-teachers'>
                    <span className='course-aside-teachers-link-text'>Vezi cine poate fi profesorul tău</span>
                    <div className='course-aside-teachers-link-icon'>
                        <HiOutlineArrowNarrowRight className='image' />
                    </div>
                </a>
            </div>
            <div className='course-aside-course'>
                <h3 className='course-aside-course-title'>STUDENȚII AU MAI CUMPĂRAT</h3>
                <ul className='course-aside-course-list'>
                    {allCourses?.map((item, index) => {
                        if (index < 3)
                            return (
                                <Link key={item.id} to={generatePath(RouterNames.COURSE, { id: String(item.id) })}>
                                    <li key={item.id} className='course-aside-course-list-item'>
                                        <div className='course-aside-course-list-item-image'>
                                            <img src={item.img} alt='Courses' className='image' />
                                        </div>
                                        <h3 className='course-aside-course-list-item-name'>{item.name}</h3>
                                    </li>
                                </Link>
                            )
                        else return null
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default CourseAside
