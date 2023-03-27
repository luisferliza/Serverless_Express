const boom = require('@hapi/boom')
const books = [
  {
    id: 1,
    title: 'El señor de los anillos'
  },
  {
    id: 2,
    title: 'Harry Potter'
  },
  {
    id: 3,
    title: 'El principito'
  }
]

function getBooks() {
  return Promise.resolve(books)
}

function getBook(id) {
  const book = books.find((book) => book.id === parseInt(id))
  if (!book) {
    return Promise.reject(boom.notFound('Book not found'))
  }
  return Promise.resolve(book)
}

module.exports = {
  getBooks,
  getBook
}
