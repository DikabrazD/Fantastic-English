import mongoose from 'mongoose'

const SocialSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const Customer = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String },
    text: { type: String },
    social: { type: SocialSchema }
})

export default mongoose.model('Customer', Customer, 'customers')
