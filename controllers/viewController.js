const Book = require('../models/bookModel')

exports.getTbr = async (req, res, next) => {
    const tbr = await Book.find()

    res.status(200).render('index', {
        tbr
    })
}