import ReviewModel from '../models/ReviewModel.js'

class ReviewController {
    async getAll(req, res) {
        try {
            const reviews = await ReviewModel.find()
            return res.json(reviews)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const review = await ReviewModel.create(req.body)
            return res.json(review)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ReviewController()
