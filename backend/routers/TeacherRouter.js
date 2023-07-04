import { Router } from 'express'

import TeacherController from '../controllers/TeacherController.js'

const teacherRouter = new Router()

teacherRouter.post('/teachers', TeacherController.create)
teacherRouter.get('/teachers', TeacherController.getAll)

export default teacherRouter
