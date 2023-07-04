import { CategoryInterface } from 'src/components/Courses/CoursesInterface'

import axios from 'axios'

export default class CategoryService {
    static async getAll() {
        try {
            const response = await axios.get<CategoryInterface[]>('http://localhost:4000/api/categories')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
