import mongoose from 'mongoose'

const TextSectionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    type: { type: String, enum: ['text'], required: true },
    text: { type: String, required: true }
})

const SkillsSectionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    type: { type: String, enum: ['skills'], required: true },
    skills: { type: [String], required: true }
})

const SectionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    sections: { type: [TextSectionSchema | SkillsSectionSchema], required: true }
})

const Course = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    number_lectures: { type: Number, required: true },
    img: { type: String, required: true },
    teachers: { type: [String], required: true },
    info: {
        main: {
            text: { type: String, required: true },
            skills: { type: [String] }
        },
        details: { type: [SectionSchema], required: true }
    }
})

export default mongoose.model('Course', Course, 'courses')
