const express = require('express')
const { getBooks, getBook } = require('../Controllers/books.controller')

const router = express.Router()

router.get('/', getBooks)
router.get('/:id', getBook)

module.exports = { booksRouter: router }
