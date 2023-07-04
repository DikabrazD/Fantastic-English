import { Router } from 'express'

import CategoryController from '../controllers/CategoryController.js'

const categoryRouter = new Router()

categoryRouter.get('/categories', CategoryController.getAll)

export default categoryRouter
