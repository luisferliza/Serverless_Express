const serverless = require('serverless-http')
const express = require('express')
const { routerAPI } = require('./Routes')
const CORS = require('./Middleware/CORS.middleware')
const {
  errorLogging,
  boomErrorHandler,
  errorHandler
} = require('./Middleware/error.middleware')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(CORS)
routerAPI(app)
app.use(errorLogging)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})

module.exports.handler = serverless(app)
