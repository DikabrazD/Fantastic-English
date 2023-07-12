import Router from 'express'

import ReviewController from '../controllers/ReviewController.js'

const reviewRouter = new Router()

reviewRouter.get('/reviews', ReviewController.getAll)
reviewRouter.post('/reviews', ReviewController.create)

export default reviewRouter
