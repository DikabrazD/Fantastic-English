import { Router } from 'express'

import CourseController from '../controllers/CourseController.js'

const coursesRouter = new Router()

coursesRouter.get('/courses', CourseController.getAll)
coursesRouter.get('/courses/:id', CourseController.getOne)
coursesRouter.put('/courses/:id', CourseController.update)

export default coursesRouter
