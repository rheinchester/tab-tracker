const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}


// initializing sequelize
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)



/**
 *  Helper function below:
    Reads through the current directory and gives an array of different files. 
    It then filters any file that is equivalent to, but not, index.js 
    Then for each file that is found it declares a model and imports.
    It is optional function and not part of the db object. It allows us to add more models down
    the road with out having to import and sequelize it again
    Thus every file inside the model folder 'inherits' sequelize properties
 */

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// Binding sequelize and Sequelize to the db object
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
// console.log(db)