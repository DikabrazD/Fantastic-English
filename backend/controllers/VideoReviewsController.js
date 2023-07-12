import VideoReviewModel from '../models/VideoReviewModel.js'

class VideoReviewController {
    async getWorkers(req, res) {
        try {
            const workers = await VideoReviewModel.find({ type: 'workers' })
            return res.json(workers)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async getCustomers(req, res) {
        try {
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)

            const customers = await VideoReviewModel.find({ type: 'customers' })
                .skip(page * limit)
                .limit(limit)

            const totalCount = await VideoReviewModel.countDocuments({ type: 'customers' })

            return res.json({ customers, totalCount: Number(totalCount) })
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const review = await VideoReviewModel.create(req.body)
            return res.json(review)
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default new VideoReviewController()
