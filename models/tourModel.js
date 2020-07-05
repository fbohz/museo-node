const mongoose = require('mongoose');

// tour schema

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'tour must have name'],
        unique: true,
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'tour must have price']
    }
})

// mongoose model - use uppercase on Models

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour