const Book = require('../models/bookModel')

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find().select('-_id -__v')

        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books
            }
        })
    }
    catch(err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

exports.addBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                book: newBook
            }
        })
    }
    catch(err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

exports.removeBook = async (req, res, next) => {
    try {
        await Book.findOneAndDelete({ title: req.params.title })

        res.status(204).json({
            status: 'success'
        })
    }
    catch(err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}