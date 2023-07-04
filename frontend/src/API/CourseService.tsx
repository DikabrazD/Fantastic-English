import { CourseInterface } from 'src/components/Courses/CoursesInterface'
import { CourseDetailInterface } from 'src/pages/CoursePage/CoursePageInterface'

import axios from 'axios'

export default class CourseService {
    static async getAll() {
        try {
            const response = await axios.get<CourseInterface[]>('http://localhost:4000/api/courses')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async getOne(id: string | undefined) {
        try {
            const response = await axios.get<CourseDetailInterface>('http://localhost:4000/api/courses/' + id)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
