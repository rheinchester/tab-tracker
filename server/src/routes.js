/**
 *  Register endpoint:
 * Pass in app and the function attaches all the endpoints
 * to the application
 */
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
 