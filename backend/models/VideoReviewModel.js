import mongoose from 'mongoose'

const VideoReviewModel = mongoose.Schema({
    title: { type: String, required: true },
    src: { type: String, required: true },
    type: { type: String, enum: ['customers', 'workers'], required: true }
})

export default mongoose.model('VideoReviewModel', VideoReviewModel, 'videoReviews')
