
const { success } = require('../Utils/response.handler')
const BooksService = require('../Services/books.service')

async function getBooks(req, res, next) {
  try {
    const books = await BooksService.getBooks()
    success(req, res, books, 200)
  } catch (error) {
    next(error)
  }
}

async function getBook(req, res, next) {
  try {
    const book = await BooksService.getBook(req.params.id)
    success(req, res, book, 200)
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getBooks,
  getBook
}