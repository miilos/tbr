const express = require('express')
const tbrController = require('../controllers/tbrController')

const router = express.Router()

router.get('/view', tbrController.getAllBooks)
router.post('/add', tbrController.addBook)
router.delete('/remove/:title', tbrController.removeBook)

module.exports = router