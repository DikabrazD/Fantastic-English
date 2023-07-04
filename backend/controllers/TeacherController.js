import TeacherModel from '../models/TeacherModel.js'

class TeacherController {
    async getAll(req, res) {
        try {
            const teachers = await TeacherModel.find()
            return res.json(teachers)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const { name, position, courses, description, img, imgKid } = req.body
            const teachers = await TeacherModel.create({ name, position, courses, description, img, imgKid })
            return res.json(teachers)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new TeacherController()
