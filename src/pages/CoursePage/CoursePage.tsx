import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseDetailInterface, CourseItemParam, FaqInterface } from './CoursePageInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { TeacherInterface } from 'src/ts/TeacherInterface'
import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { ReviewInterface } from 'src/components/Review/ReviewInterface'
import { SwiperSlide } from 'swiper/react'

import FaqItem from './Components/FaqItem/FaqItem'
import Slider from 'src/components/Slider/Slider'
import Review from 'src/components/Review/Review'
import Card from 'src/components/Card/Card'
import CourseAside from './Components/CourseAside/CourseAside'
import CourseInfo from './Components/CourseInfo/CourseInfo'
import Button from 'src/components/Button/Button'

import axios from 'axios'

import './CoursePage.scss'
import InfoBar from './Components/InforBar/InfoBar'

const CoursePage = () => {
    const [course, setCourse] = useState<CourseDetailInterface>()
    const [allCourses, setAllCourse] = useState<CourseInterface[]>([])
    const [reviews, setReviews] = useState<ReviewInterface[]>([])
    const [teachers, setTeachers] = useState<TeacherInterface[]>([])
    const [faq, setFaq] = useState<FaqInterface[]>([])
    const [activeIndexs, setActiveIndexs] = useState<number[]>([])

    const params = useParams<CourseItemParam>()

    const breakpointsReview = {
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
    }
    const breakpointsTeachers = {
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
                .get<ReviewInterface[]>('http://localhost:3000/reviews')
                .then((res) => {
                    setReviews(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })

            await axios
                .get<FaqInterface[]>('http://localhost:3000/faq')
                .then((res) => {
                    setFaq(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        fetchData()
    }, [params])

    return (
        <div className='course container'>
            <div className='course-content'>
                <div className='course-content-header'>
                    <h2 className='course-content-header-name'>{course?.name}</h2>
                    <div className='course-content-header-price'>{course?.price} MDL / 60 min</div>
                </div>
                <div className='course-content-quickLinks'>
                    <a href='/#' className='course-content-quickLinks-reviews'>
                        <div className='course-content-quickLinks-reviews-image'>
                            <img
                                className='image'
                                src='https://fantastic-english.md/wp-content/uploads/2021/03/star.png'
                                alt='star reviews'
                            />
                        </div>
                        <span>5/5 Recenzii</span>
                    </a>
                    <span className='course-content-quickLinks-divider'> | </span>
                    <a href='/#' className='course-content-quickLinks-faq'>
                        13 Întrebări/Răspunsuri
                    </a>
                </div>
                <div className='course-content-basicInfo'>
                    <div className='course-content-basicInfo-numberLectures'>
                        <span className='course-content-basicInfo-numberLectures-title'>Lecții cu profesorul:</span>
                        <span className='course-content-basicInfo-numberLectures-info'>
                            {course?.number_lectures} ore astronomice
                        </span>
                    </div>
                    <div className='course-content-basicInfo-duration'>
                        <span className='course-content-basicInfo-duration-title'>Durata lecție:</span>
                        <span className='course-content-basicInfo-duration-info'>60 minute</span>
                    </div>
                    <Button text='Rezervă un loc (300MDL)' type={ButtonType.arrowOutlineInMain} />
                    <Button text='Vreau La Curs' type={ButtonType.changeToWhite} />
                </div>
                <div className='course-content-image'>
                    <img src={course?.img} alt='Course' className='image' />
                </div>
                {course && <CourseInfo data={course} />}
                <div className='course-content-reviews'>
                    <h3 className='course-content-reviews-title'>Vezi părerile studenților noștri</h3>
                    <Slider breakpoints={breakpointsReview}>
                        {reviews.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Review item={item} />
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </div>
                <div className='course-content-teachers' id='course-teachers'>
                    <h3 className='course-content-teachers-title'>Cine ar putea fi profesorul tău</h3>
                    <Slider breakpoints={breakpointsTeachers}>
                        {teachers.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card data={item} descriptionStatus={true} />
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </div>
                <div className='course-content-faq'>
                    <h3 className='course-content-faq-title'>Întrebări și Răspunsuri</h3>
                    <ul className='course-content-faq-list'>
                        {faq.map((item, index) => {
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
            {course && <CourseAside courseID={course.id} teachers={teachers} allCourses={allCourses} />}
            {course && <InfoBar name={course.name} price={course.price} />}
        </div>
    )
}

export default CoursePage
