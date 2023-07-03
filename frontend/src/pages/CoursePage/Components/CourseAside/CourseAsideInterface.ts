import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { TeacherInterface } from 'src/ts/TeacherInterface'

export interface CourseAsideInterface {
    courseID: number
    teachers: TeacherInterface[]
    allCourses: CourseInterface[]
}
