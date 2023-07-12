import VideoReviewsController from '../controllers/VideoReviewsController.js'
import Router from 'express'

const videoReviewsRouter = new Router()

videoReviewsRouter.post('/videoReviews', VideoReviewsController.create)
videoReviewsRouter.get('/videoReviews/workers', VideoReviewsController.getWorkers)
videoReviewsRouter.get('/videoReviews/customers', VideoReviewsController.getCustomers)

export default videoReviewsRouter
