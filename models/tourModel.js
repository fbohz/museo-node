const mongoose = require('mongoose');

// tour schema

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'tour must have name'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have difficulty']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'tour must have price']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, 'tour must have summary']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'tour must have cover img']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
})

// mongoose model - use uppercase on Models

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour