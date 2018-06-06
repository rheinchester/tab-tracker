/**
 *  Register endpoint:
 * Pass in app and the function attaches all the endpoints
 * to the application
 */
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.send('Hello world')
    })
     
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
    )
}
 