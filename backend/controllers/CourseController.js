import CourseModel from '../models/CourseModel.js'

class CourseController {
    async getAll(req, res) {
        try {
            const courses = await CourseModel.find()

            const shortCourses = courses.map((item) => {
                const { name, price, number_lectures, img, _id } = item
                return { name, price, number_lectures, img, _id }
            })

            return res.json(shortCourses)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params

            if (!id) {
                res.status(400).json({ message: 'Id nu e indicat' })
            }

            const course = await CourseModel.findById(id)
            return res.json(course)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const course = req.body
            const { id } = req.params

            if (!id) {
                res.status(400).json({ message: 'Id nu e indicat' })
            }

            const updatedCourse = await CourseModel.findByIdAndUpdate(course._id, course, { new: true })

            return res.json(updatedCourse)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CourseController()
