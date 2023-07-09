import { ReviewInterface } from 'src/components/Review/ReviewInterface'

import axios from 'axios'

export default class ReviewService {
    static async getAll() {
        try {
            const response = await axios.get<ReviewInterface[]>('http://localhost:4000/api/reviews')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
