import { CourseInterface, CategoryInterface } from './CoursesInterface'
import { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight, HiOutlineClock } from 'react-icons/hi'
import { useTransition, animated } from '@react-spring/web'
import { Link, generatePath } from 'react-router-dom'
import { RouterNames } from 'src/router'

import CourseService from 'src/API/CourseService'
import CategoryService from 'src/API/CategoryService'

import './Courses.scss'

const Courses = () => {
    const [category, setCategory] = useState<CategoryInterface[]>([])
    const [courses, setCourses] = useState<CourseInterface[]>([])
    const [coursesActive, setCoursesActive] = useState<CourseInterface[]>([])

    const [activeCategory, setActiveCategory] = useState<string>('')

    const transition = useTransition(coursesActive, {
        from: { transform: 'scale(0)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 }
    })

    useEffect(() => {
        const getData = async () => {
            const categories = await CategoryService.getAll()

            if (categories) {
                setActiveCategory(categories[0]._id)
                setCategory(categories)
            }

            const courses = await CourseService.getAll()

            if (courses) {
                setCourses(courses)
            }
        }

        getData()
    }, [])

    useEffect(() => {
        //Filtrez categoria dupa id
        const categoryFinded = category.find((item) => item._id === activeCategory)

        //Filtrez doar cursurile care se afla in categoria aleasa
        setCoursesActive(courses.filter((item) => categoryFinded?.courses.includes(item._id)))
    }, [courses, category, activeCategory])

    const changeActiveCategory = (id: string) => {
        setActiveCategory(id)
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
            {category.length && (
                <ul className='courses-category-name'>
                    {category.map((item) => {
                        return (
                            <li
                                key={item._id}
                                onClick={() => changeActiveCategory(item._id)}
                                className={`${activeCategory === item._id && 'active-item'} courses-category-name-item`}
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
                    <Link to={generatePath(RouterNames.COURSE, { id: String(item._id) })}>
                        <animated.div key={item._id} style={style} className='courses-list-item'>
                            <div className='courses-list-item-image'>
                                <img src={`${item.img}`} alt='Img of course' />
                                <div className='courses-list-item-image-price'>{item.price} MDL / 60 Min</div>
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
