import ManagerModel from '../models/ManagerModel.js'

class ManagerController {
    async getAll(req, res) {
        try {
            const managers = await ManagerModel.find()
            return res.json(managers)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const { name, position, description, img, imgKid } = req.body
            const managers = await ManagerModel.create({ name, position, description, img, imgKid })
            return res.json(managers)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ManagerController()
