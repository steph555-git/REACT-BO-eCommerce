const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()
const cors = require('cors')

const dbConnection = require('./database/db-postgres')

const db = dbConnection
module.exports = db

app.use(cors({
  origin: 'http://localhost:3000'
}))

const routes = require('./routes/routes')

app.use('/', routes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})