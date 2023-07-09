import { ReviewWork } from 'src/components/WorkExperience/WorkExperienceInterface'
import { VideoReviewAxios } from 'src/pages/ReviewPage/ReviewsPageInterface'

import axios from 'axios'

export default class VideoReviewService {
    static async getWorkers() {
        try {
            const response = await axios.get<ReviewWork[]>('http://localhost:4000/api/videoReviews/workers')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async getCustomers(page: number) {
        try {
            const response = await axios.get<VideoReviewAxios>(
                `http://localhost:4000/api/videoReviews/customers?page=${page}&limit=9`
            )
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
