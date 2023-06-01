import { CourseInterface } from 'src/components/Courses/CoursesInterface'

export interface CourseDetailInterface extends CourseInterface {
    teachers: number[]
}

export type CourseItemParam = {
    id?: string
}
