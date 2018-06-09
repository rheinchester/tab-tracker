const express = require('express')
const bodyParser = require('body-parser')//allows app to process json easily
const cors = require('cors')//enables http query at the backend
const morgan = require('morgan')// allows us to see which device hit the server
const {sequelize} = require('./models') //returns sequelize object from models
const config = require('./config/config')

const app = express()

//middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

/**
 *  sequelize.sync() connects sequelize to whatever database you have it configured
 *  for. Then starts server from a port defined in ./config/config.js
 */
sequelize.sync()
  .then(()=>{
    app.listen(config.port)
  })
