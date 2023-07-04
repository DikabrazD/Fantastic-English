import CategoryModel from '../models/CategoryModel.js'

class CategoryController {
    async getAll(req, res) {
        try {
            const category = await CategoryModel.find()
            return res.json(category)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CategoryController()
