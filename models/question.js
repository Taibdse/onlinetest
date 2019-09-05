const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    content: { type: String, required: true },
    topic: { type: Schema.Types.ObjectId, required: true, ref: 'topic' },
    rightAnswers: { type: String },
    isActive: { type: Boolean, required: true, default: true }
}, { timestamps: true });

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;