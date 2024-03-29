import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import courseRouter from './routers/CourseRouter.js'
import categoryRouter from './routers/CategoryRouter.js'
import teacherRouter from './routers/TeacherRouter.js'
import managerRouter from './routers/ManagerRouter.js'
import customerRouter from './routers/CustomerRouter.js'
import reviewRouter from './routers/ReviewRouter.js'
import videoReviewsRouter from './routers/VideoReviewRouter.js'

const PORT = 4000
const DB_URL = 'mongodb+srv://user:user@cluster0.7kgaaac.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', courseRouter)
app.use('/api', categoryRouter)
app.use('/api', teacherRouter)
app.use('/api', managerRouter)
app.use('/api', customerRouter)
app.use('/api', reviewRouter)
app.use('/api', videoReviewsRouter)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, {
            dbName: 'fantastic'
        })
        app.listen(PORT, () => console.log('Start Serve on PORT 4000'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
