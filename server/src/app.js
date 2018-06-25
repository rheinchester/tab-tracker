const express = require('express')

// body-parser allows app to process json easily
const bodyParser = require('body-parser')

// cors enables http query at the backend
const cors = require('cors')

// morgan allows us to see which device hit the server
const morgan = require('morgan')

//returning sequelize object from models
const {sequelize} = require('./models') 

// config file
const config = require('./config/config')

const app = express()

//express middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


/**
 *  sequelize.sync() connects sequelize to whatever database you have it configured
 *  for. Then starts server from a port defined in ./config/config.js
 * NB: {force:true} clears the whole db
 */
sequelize.sync()
  .then(()=>{
    app.listen(config.port)
    console.log('Listening at port',config.port,'...')
  })


