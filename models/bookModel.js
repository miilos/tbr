const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'A book needs a title!' ],
        unique: [ true, 'Title must be unique!' ]
    },
    author: {
        type: String,
        required: [ true, 'A book needs an author!' ]
    },
    pageCount: {
        type: Number,
        required: [ true, 'A book needs a page count!' ]
    },
    priority: {
        type: String,
        enum: [ 'high', 'mid', 'low' ],
        default: 'high'
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book