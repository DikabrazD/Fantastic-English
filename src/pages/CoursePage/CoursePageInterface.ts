import { CourseInterface } from 'src/components/Courses/CoursesInterface'

export interface CourseDetailInterface extends CourseInterface {
    teachers: number[]
    info: {
        main: {
            text: string
            skills?: string[]
        }
        details: [
            {
                id: number
                name: string
                section: Section[]
            }
        ]
    }
}

interface TextSection {
    id: number
    type: 'text'
    text: string
}

interface SkillsSection {
    id: number
    type: 'skills'
    skills: string[]
}

type Section = TextSection | SkillsSection

export type CourseItemParam = {
    id?: string
}
