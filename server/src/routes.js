/**
 *  Register endpoint:
 * Pass in app and the function attaches all the endpoints
 * to the application
 */
const AuthenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
    app.get('/', ()=>{
        console.log('Hello world')
    } )
    app.post('/register', 
    AuthenticationController.register
    )
}
 