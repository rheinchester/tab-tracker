const Promise = require('bluebird') //bluebird is a promise library
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    //function that hashes password
    const SALT_FACTOR = 8
    if (!user.changed('password')){
        return;
    }
    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}

//user sequelize model (read doc)
module.exports = (sequelize, DataTypes) => {
 const User =   sequelize.define('User', {
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },{
        hooks:{
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function(password) {   //compare password to the model's password
        return bcrypt.compareAsync(password, this.password)
    }
    
    return User
    
}