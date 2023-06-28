import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import List from './List/List'
import axios from 'axios'

import { HiArrowRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { ReviewWork } from './TeamPageInterface'
import { TeacherInterface } from 'src/ts/TeacherInterface'
import { ManagerInterface } from 'src/ts/ManagerInterface'

import './TeamPage.scss'
import Button from 'src/components/Button/Button'
import { ButtonType } from 'src/components/Button/ButtonInterface'

const TeamPage = () => {
    const [reviews, setReviews] = useState<ReviewWork[]>([])
    const [teachers, setTeachers] = useState<TeacherInterface[]>([])
    const [managers, setManagers] = useState<ManagerInterface[]>([])

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get<ReviewWork[]>('http://localhost:3000/work_experience')
                .then((res) => {
                    setReviews(res.data)
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
                .get<ManagerInterface[]>('http://localhost:3000/managers')
                .then((res) => {
                    setManagers(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    return (
        <div className='team'>
            <Breadcrumbs current='Echipa' />
            <div className='team-wrapper'>
                <nav className='team-wrapper-nav'>
                    <ul className='team-wrapper-nav-list'>
                        <li className='team-wrapper-nav-list-item'>
                            <div className='team-wrapper-nav-list-item-icon'>
                                <HiArrowRight className='image' />
                            </div>
                            <span className='team-wrapper-nav-list-item-text'>
                                Cum e să lucrezi la Fantastic English?
                            </span>
                        </li>
                        <li className='team-wrapper-nav-list-item'>
                            <div className='team-wrapper-nav-list-item-icon'>
                                <HiArrowRight className='image' />
                            </div>
                            <span className='team-wrapper-nav-list-item-text'>Profesori</span>
                        </li>
                        <li className='team-wrapper-nav-list-item'>
                            <div className='team-wrapper-nav-list-item-icon'>
                                <HiArrowRight className='image' />
                            </div>
                            <span className='team-wrapper-nav-list-item-text'>Manageri</span>
                        </li>
                        <li className='team-wrapper-nav-list-item'>
                            <div className='team-wrapper-nav-list-item-icon'>
                                <HiArrowRight className='image' />
                            </div>
                            <span className='team-wrapper-nav-list-item-text'>Vrei să fii colegul nostru?</span>
                        </li>
                    </ul>
                </nav>
                <div className='team-wrapper-main'>
                    <div className='team-wrapper-main-workexperience'>
                        <h2 className='team-wrapper-main-workexperience-header'>
                            Cum e să lucrezi la fantastic english?
                        </h2>
                        <ul className='team-wrapper-main-workexperience-list'>
                            {reviews.map((item) => {
                                return (
                                    <li className='team-wrapper-main-workexperience-list-item'>
                                        <iframe
                                            className='image'
                                            src='https://www.youtube.com/embed/cJ3NzL6jAGk'
                                            title={item.title}
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <List data={teachers} name='Profesori' />
                    <List data={managers} name='Manageri' />
                    <div className='team-wrapper-main-work'>
                        <div className='team-wrapper-main-work-info'>
                            <h2 className='team-wrapper-main-work-info-header'>Vrei să fii colegul nostru?</h2>
                            <p className='team-wrapper-main-work-info-text'>
                                Vrei să fii colegul nostru? Aplică pentru un job la Fantastic English
                            </p>
                        </div>
                        <div className='team-wrapper-main-work-button'>
                            <Button text='Aplică acum' type={ButtonType.arrow} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'>a</div>
        </div>
    )
}

export default TeamPage
