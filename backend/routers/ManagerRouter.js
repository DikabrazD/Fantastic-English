import ManagerController from '../controllers/ManagerController.js'

import { Router } from 'express'

const managerRouter = new Router()

managerRouter.post('/managers', ManagerController.create)
managerRouter.get('/managers', ManagerController.getAll)

export default managerRouter
