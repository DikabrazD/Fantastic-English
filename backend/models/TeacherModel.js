import mongoose from 'mongoose'

const Teacher = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    courses: { type: [String], required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    imgKid: { type: String, required: true }
})

export default mongoose.model('Teacher', Teacher, 'teachers')
