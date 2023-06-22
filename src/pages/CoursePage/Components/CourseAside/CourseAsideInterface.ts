import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { TeacherInterface } from 'src/utils/teachers'

export interface CourseAsideInterface {
    courseID: number
    teachers: TeacherInterface[]
    allCourses: CourseInterface[]
}
