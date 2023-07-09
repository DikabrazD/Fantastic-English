import { TeacherInterface } from 'src/ts/TeacherInterface'

import axios from 'axios'

export default class TeacherService {
    static async getAll() {
        try {
            const response = await axios.get<TeacherInterface[]>('http://localhost:4000/api/teachers')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
