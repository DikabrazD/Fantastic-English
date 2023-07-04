import CustomerController from '../controllers/CustomerController.js'

import { Router } from 'express'

const customerRouter = new Router()

customerRouter.post('/customers', CustomerController.creat)

export default customerRouter
