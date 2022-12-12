const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema)