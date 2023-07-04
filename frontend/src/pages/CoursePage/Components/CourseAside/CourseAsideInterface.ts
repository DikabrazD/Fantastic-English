import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { TeacherInterface } from 'src/ts/TeacherInterface'

export interface CourseAsideInterface {
    courseID: string
    teachers: TeacherInterface[]
    allCourses: CourseInterface[]
}
