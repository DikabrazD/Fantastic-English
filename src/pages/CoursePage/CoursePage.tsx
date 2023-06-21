import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { CourseDetailInterface, CourseItemParam } from './CoursePageInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { TeacherInterface } from 'src/utils/teachers'
import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { ReviewInterface } from 'src/components/Review/ReviewInterface'
import { useSpring, animated } from '@react-spring/web'
import { useMeasure } from 'src/hooks/useMeasure'
import { SwiperSlide } from 'swiper/react'

import Button from 'src/components/Button/Button'
import axios from 'axios'

import './CoursePage.scss'
import FaqItem from './Components/FaqItem/FaqItem'
import Slider from 'src/components/Slider/Slider'
import Review from 'src/components/Review/Review'
import Card from 'src/components/Card/Card'

const CoursePage = () => {
    const [course, setCourse] = useState<CourseDetailInterface>()
    const [allCourse, setAllCourse] = useState<CourseInterface[]>([])
    const [reviews, setReviews] = useState<ReviewInterface[]>([])
    const [teachers, setTeachers] = useState<TeacherInterface[]>([])
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [heightDetailsRef, heightDetails] = useMeasure()
    const styleDetails = useSpring({
        opacity: showDetails ? 1 : 0,
        height: showDetails ? heightDetails : 0,
        overflow: 'hidden'
    })
    const [activeIndexs, setActiveIndexs] = useState<number[]>([])

    const params = useParams<CourseItemParam>()

    const FAQ = [
        {
            title: 'Ce înseamnă ”o oră astronomică”?',
            text: 'O oră astronomică reprezintă o unitate de timp folosită pentru a măsura durata unei lecții. Ora astronomică are 60 de minute. Acest curs de engleză are o durată totală de 42 de ore astronomice, ceea ce înseamnă că acesta va dura în total 42 de ore. Acest timp permite studenților să aprofundeze subiectele într-un ritm mai lejer și să-și întărească cunoștințele, fără a simți presiunea timpului.'
        },
        {
            title: 'Ce înseamnă ”o oră astronomică”?',
            text: 'O oră astronomică reprezintă o unitate de timp folosită pentru a măsura durata unei lecții. Ora astronomică are 60 de minute. Acest curs de engleză are o durată totală de 42 de ore astronomice, ceea ce înseamnă că acesta va dura în total 42 de ore. Acest timp permite studenților să aprofundeze subiectele într-un ritm mai lejer și să-și întărească cunoștințele, fără a simți presiunea timpului.'
        },
        {
            title: 'Ce înseamnă ”o oră astronomică”?',
            text: 'O oră astronomică reprezintă o unitate de timp folosită pentru a măsura durata unei lecții. Ora astronomică are 60 de minute. Acest curs de engleză are o durată totală de 42 de ore astronomice, ceea ce înseamnă că acesta va dura în total 42 de ore. Acest timp permite studenților să aprofundeze subiectele într-un ritm mai lejer și să-și întărească cunoștințele, fără a simți presiunea timpului.'
        },
        {
            title: 'Ce înseamnă ”o oră astronomică”?',
            text: 'O oră astronomică reprezintă o unitate de timp folosită pentru a măsura durata unei lecții. Ora astronomică are 60 de minute. Acest curs de engleză are o durată totală de 42 de ore astronomice, ceea ce înseamnă că acesta va dura în total 42 de ore. Acest timp permite studenților să aprofundeze subiectele într-un ritm mai lejer și să-și întărească cunoștințele, fără a simți presiunea timpului.'
        }
    ]

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    const toggleActiveIndex = (index: number) => {
        if (activeIndexs.includes(index)) {
            setActiveIndexs(activeIndexs.filter((i) => i !== index))
        } else {
            setActiveIndexs([...activeIndexs, index])
        }
    }

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

            await axios
                .get('http://localhost:3000/reviews')
                .then((res) => {
                    setReviews(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='course container'>
            <div className='course-main'>
                <div className='course-main-header'>
                    <h2 className='course-main-header-name'>{course?.name}</h2>
                    <div className='course-main-header-price'>{course?.price} MDL / 60 min</div>
                </div>
                <div className='course-main-quickLinks'>
                    <a href='/#' className='course-main-quickLinks-reviews'>
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
                    <a href='/#' className='course-main-quickLinks-faq'>
                        13 Întrebări/Răspunsuri
                    </a>
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
                    <img src={course?.img} alt='Course' className='image' />
                </div>
                <div className='course-main-info'>
                    <h2 className='course-main-info-header'>CE VEI ÎNVĂȚA LA ACEST CURS</h2>
                    <div className='course-main-info-main'>
                        <p className='course-main-info-main-text'>{course?.info.main.text}</p>
                        <ul className='course-main-info-main-skills'>
                            {course?.info.main.skills?.map((item, index) => {
                                return (
                                    <li className='course-main-info-main-skills-item' key={index}>
                                        <div className='course-main-info-main-skills-item-icon'>
                                            <FaCheck className='image' />
                                        </div>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='course-main-info-showDetails' onClick={toggleDetails}>
                        <div className='course-main-info-showDetails-icon'>
                            <HiOutlineArrowNarrowRight className='image' />
                        </div>
                        <p className='course-main-info-showDetails-text'>Vezi mai multe detaii...</p>
                    </div>
                    <animated.div style={styleDetails}>
                        <div ref={heightDetailsRef} className='course-main-info-details'>
                            {course?.info.details.map((item) => {
                                return (
                                    <div key={item.id} className='course-main-info-details-item'>
                                        <h3 className='course-main-info-details-item-name'>{item.name}</h3>
                                        <div className='course-main-info-details-item-wrapper'>
                                            {item.section.map((item) => {
                                                if (item.type === 'text')
                                                    return (
                                                        <p
                                                            className='course-main-info-details-item-wrapper-text'
                                                            key={item.id}
                                                        >
                                                            {item.text}
                                                        </p>
                                                    )
                                                else {
                                                    return (
                                                        <ul
                                                            className='course-main-info-details-item-wrapper-skills'
                                                            key={item.id}
                                                        >
                                                            {item.skills.map((item, index) => {
                                                                return (
                                                                    <li
                                                                        key={index}
                                                                        className='course-main-info-details-item-wrapper-skills-item'
                                                                    >
                                                                        <div className='course-main-info-details-item-wrapper-skills-item-icon'>
                                                                            <FaCheck className='image' />
                                                                        </div>
                                                                        {item}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </animated.div>
                </div>
                <div className='course-main-reviews'>
                    <h3 className='course-main-reviews-title'>Vezi părerile studenților noștri</h3>
                    <Slider
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50
                            }
                        }}
                    >
                        {reviews.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Review item={item} />
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </div>
                <div className='course-main-teachers'>
                    <h3 className='course-main-teachers-title'>Cine ar putea fi profesorul tău</h3>
                    <Slider
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }
                        }}
                    >
                        {teachers.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card data={item} descriptionStatus={true} />
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </div>
                <div className='course-main-faq'>
                    <h3 className='course-main-faq-title'>Întrebări și Răspunsuri</h3>
                    <ul className='course-main-faq-list'>
                        {FAQ.map((item, index) => {
                            return (
                                <FaqItem
                                    key={index}
                                    data={item}
                                    isActive={activeIndexs.includes(index)}
                                    handleClick={() => toggleActiveIndex(index)}
                                />
                            )
                        })}
                    </ul>
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
                </div>

                <div className='course-aside-course'>
                    <h3 className='course-aside-course-title'>STUDENȚII AU MAI CUMPĂRAT</h3>
                    <ul className='course-aside-course-list'>
                        {allCourse?.map((item, index) => {
                            if (index < 3)
                                return (
                                    <li key={item.id} className='course-aside-course-list-item'>
                                        <div className='course-aside-course-list-item-image'>
                                            <img src={item.img} alt='Courses' className='image' />
                                        </div>
                                        <h3 className='course-aside-course-list-item-name'>{item.name}</h3>
                                    </li>
                                )
                            else return null
                        })}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default CoursePage
