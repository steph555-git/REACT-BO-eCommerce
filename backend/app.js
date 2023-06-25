const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()

const initDbConnection = require('./database/db-connect')
const db = new initDbConnection()
module.exports = db

const routes = require('./routes/routes')

app.use('/', routes)

  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })