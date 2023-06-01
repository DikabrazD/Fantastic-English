import './Courses.scss'
import axios from 'axios'
import { CourseInterface, CategoryInterface } from './CoursesInterface'
import { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight, HiOutlineClock } from 'react-icons/hi'
import { useTransition, animated } from '@react-spring/web'
import { Link, generatePath } from 'react-router-dom'
import { RouterNames } from 'src/router'

const Courses = () => {
    const [category, setCategory] = useState<CategoryInterface[]>([])
    const [courses, setCourses] = useState<CourseInterface[]>([])
    const [isActive, setActive] = useState<number>(0)

    const coursesActive = courses.filter((item) => category[isActive].courses.includes(item.id))

    const transition = useTransition(coursesActive, {
        from: { transform: 'scale(0)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 }
    })

    useEffect(() => {
        const getData = async () => {
            await axios
                .get('http://localhost:3000/courses_category')
                .then((res) => {
                    setCategory(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
            await axios
                .get<CourseInterface[]>('http://localhost:3000/courses')
                .then((res) => {
                    setCourses(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getData()
    }, [])

    const setActiveCategory = (id: number) => {
        setActive(id)
    }

    return (
        <div className='courses'>
            <h2>Cursuri de engleză pentru Începători și Avansaț</h2>
            <p>
                <span>Avem o gamă largă de cursuri de engleză pentru a răspunde nevoilor fiecărui student.</span>
                <span>
                    Astfel, indiferent de vârstă, nivel și scopul pentru care înveţi engleza, avem un curs potrivit
                    pentru tine!
                </span>
            </p>
            {category.length > 0 && (
                <ul className='courses-category-name'>
                    {category.map((item) => {
                        return (
                            <li
                                key={item.id}
                                onClick={() => setActiveCategory(item.id)}
                                className={`${isActive === item.id && 'active-item'} courses-category-name-item`}
                            >
                                <HiOutlineArrowNarrowRight className='courses-category-name-item-icon' />
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            )}

            <div className='courses-list'>
                {transition((style, item) => (
                    <Link to={generatePath(RouterNames.COURSE, { id: `${item.id}` })}>
                        <animated.div key={item.id} style={style} className='courses-list-item'>
                            <div className='courses-list-item-image'>
                                <img src={`${item.img}`} alt='Img of course' />
                                <div className='courses-list-item-image-price'>85 MDL / 60 Min</div>
                            </div>
                            <h3>{item.name}</h3>
                            <div className='courses-list-item-description'>
                                <p className='courses-list-item-description-hours'>
                                    <HiOutlineClock className='courses-list-item-description-hours-icon' />
                                    <span>{item.number_lectures} ore astronomice</span>
                                </p>
                                <p className='courses-list-item-description-more'>
                                    <span className='courses-list-item-description-more-text'>Vezi Detalii</span>
                                    <HiOutlineArrowNarrowRight className='courses-list-item-description-more-icon' />
                                </p>
                            </div>
                        </animated.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Courses
