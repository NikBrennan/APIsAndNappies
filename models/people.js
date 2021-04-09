const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);