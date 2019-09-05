const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    methods: {
        type: String,
        required: true,
        default: 'local',
        enum: ['google', 'facebook', 'local']
    },
    local: {
        username: { type: String },
        password: { type: String },
    },
    google: {
        id: { type: String },
        email: { type: String }
    },
    facebook: {
        id: { type: String },
        email: { type: String },
        displayName: { type: String }
    },
    isCandidate: { type: Boolean, required: true },
    results: [
        { 
            exam: { type: Schema.Types.ObjectId, ref: 'exam' },
            answers: [
                { 
                    id: Schema.Types.ObjectId, 
                    selection: String, 
                    correct: Boolean 
                }
            ],
        }
    ]
}, { timestamps: true })

const User = mongoose.model('user', UserSchema);

module.exports = User;