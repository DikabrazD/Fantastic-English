import { ManagerInterface } from 'src/ts/ManagerInterface'

import axios from 'axios'

export default class ManagerService {
    static async getAll() {
        try {
            const response = await axios.get<ManagerInterface[]>('http://localhost:4000/api/managers')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
