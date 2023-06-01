import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseDetailInterface, CourseItemParam } from './CoursePageInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { TeacherInterface } from 'src/utils/teachers'
import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import Button from 'src/components/Button/Button'
import axios from 'axios'

import './CoursePage.scss'

const CoursePage = () => {
    const [course, setCourse] = useState<CourseDetailInterface>()
    const [allCourse, setAllCourse] = useState<CourseInterface[]>()

    const [teachers, setTeachers] = useState<TeacherInterface[]>()
    const params = useParams<CourseItemParam>()

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get<CourseDetailInterface>('http://localhost:3000/course_detail/' + params.id)
                .then((res) => {
                    setCourse(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
            await axios
                .get<CourseInterface[]>('http://localhost:3000/courses')
                .then((res) => {
                    setAllCourse(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })

            await axios
                .get<TeacherInterface[]>('http://localhost:3000/teachers')
                .then((res) => {
                    setTeachers(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        fetchData()
    }, [])

    return (
        <div className='course container'>
            <div className='course-main'>
                <div className='course-main-header'>
                    <h2 className='course-main-header-name'>{course?.name}</h2>
                    <div className='course-main-header-price'>{course?.price} MDL / 60 min</div>
                </div>
                <div className='course-main-quickLinks'>
                    <a className='course-main-quickLinks-reviews'>
                        <div className='course-main-quickLinks-reviews-image'>
                            <img
                                className='image'
                                src='https://fantastic-english.md/wp-content/uploads/2021/03/star.png'
                                alt='star reviews'
                            />
                        </div>
                        <span>5/5 Recenzii</span>
                    </a>
                    <span className='course-main-quickLinks-divider'> | </span>
                    <a className='course-main-quickLinks-faq'>13 Întrebări/Răspunsuri</a>
                </div>
                <div className='course-main-basicInfo'>
                    <div className='course-main-basicInfo-numberLectures'>
                        <span className='course-main-basicInfo-numberLectures-title'>Lecții cu profesorul:</span>
                        <span className='course-main-basicInfo-numberLectures-info'>
                            {course?.number_lectures} ore astronomice
                        </span>
                    </div>
                    <div className='course-main-basicInfo-duration'>
                        <span className='course-main-basicInfo-duration-title'>Durata lecție:</span>
                        <span className='course-main-basicInfo-duration-info'>60 minute</span>
                    </div>
                    <Button text='Rezervă un loc (300MDL)' type={ButtonType.arrowInMain} />
                    <Button text='Vreau La Curs' type={ButtonType.changeToWhite} />
                </div>
                <div className='course-main-image'>
                    <img src={course?.img} alt='Image of course' className='image' />
                </div>
            </div>
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
                            ?.filter((item) => (course ? item.courses.includes(course.id) : false))
                            .map((item, index) => {
                                if (index < 2)
                                    return (
                                        <li key={item.id} className='course-aside-teachers-list-item'>
                                            <div className='course-aside-teachers-list-item-image'>
                                                <img src={item.img} alt='Image Teacher' className='image' />
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
                </div>

                <div className='course-aside-course'>
                    <h3 className='course-aside-course-title'>STUDENȚII AU MAI CUMPĂRAT</h3>
                    <ul className='course-aside-course-list'>
                        {allCourse?.map((item, index) => {
                            if (index < 3)
                                return (
                                    <li key={item.id} className='course-aside-course-list-item'>
                                        <div className='course-aside-course-list-item-image'>
                                            <img src={item.img} alt='Image Courses' className='image' />
                                        </div>
                                        <h3 className='course-aside-course-list-item-name'>{item.name}</h3>
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default CoursePage
