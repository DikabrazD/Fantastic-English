import mongoose from 'mongoose'

const Review = mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true }
})

export default mongoose.model('Review', Review, 'reviews')
