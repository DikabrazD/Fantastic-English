import CustomerModel from '../models/CustomerModel.js'

class CustomerController {
    async creat(req, res) {
        try {
            const customer = await CustomerModel.create(req.body)
            return res.json(customer)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CustomerController()
