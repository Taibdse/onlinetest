const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    topic: { type: Schema.Types.ObjectId, ref: 'topic' },
    questions: [
        { 
            id: Schema.Types.ObjectId,
            content: String, 
            A: String,
            B: String,
            C: String, 
            D: String,
            correctAnswer: { type: String, enum: ['A', 'B', 'C', 'D'] }
        }
    ],
    isTested: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: true }
}, { timestamps: true });

const Exam = mongoose.model('exam', ExamSchema);
module.exports = Exam;