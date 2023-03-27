const express = require('express')
const { booksRouter } = require('./books.routes')

function routerAPI(app) {
  const routerV1 = express.Router()
  app.use('/api/v1', routerV1)
  routerV1.use('/books', booksRouter)
}

module.exports = {
  routerAPI
}
