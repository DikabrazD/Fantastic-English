import { useEffect, useState } from 'react'
import { TeacherInterface } from 'src/ts/TeacherInterface'
import { ManagerInterface } from 'src/ts/ManagerInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'

import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import List from './Components/List/List'
import Button from 'src/components/Button/Button'
import AsideNav from 'src/components/AsideNav/AsideNav'
import WorkExperience from 'src/components/WorkExperience/WorkExperience'
import TeacherService from 'src/API/TeacherService'
import ManagerService from 'src/API/ManagerService'

import './TeamPage.scss'

const TeamPage = () => {
    const [teachers, setTeachers] = useState<TeacherInterface[]>([])
    const [managers, setManagers] = useState<ManagerInterface[]>([])

    const navLinks = [
        {
            id: 0,
            name: 'Cum e să lucrezi la fantastic english?',
            href: '#workexperience'
        },
        {
            id: 1,
            name: 'Profesori',
            href: '#teachers'
        },
        {
            id: 2,
            name: 'Manageri',
            href: '#managers'
        },
        {
            id: 3,
            name: 'Vrei să fii colegul nostru?',
            href: '#work'
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            const teachersData = await TeacherService.getAll()
            if (teachersData) setTeachers(teachersData)

            const managersData = await ManagerService.getAll()
            if (managersData) setManagers(managersData)
        }
        fetchData()
    }, [])

    return (
        <div className='team'>
            <Breadcrumbs current='Echipa' />
            <div className='team-wrapper'>
                <AsideNav data={navLinks} />
                <div className='team-wrapper-main'>
                    <WorkExperience />
                    <List data={teachers} name='Profesori' id='teachers' />
                    <List data={managers} name='Manageri' id='managers' />
                    <div className='team-wrapper-main-work' id='work'>
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
            <div className='divider'></div>
        </div>
    )
}

export default TeamPage
