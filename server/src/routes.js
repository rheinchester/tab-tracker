/**
 *  Register endpoint:
 * Pass in app and the function attaches all the endpoints
 * to the application
 */
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.send('Hello world')
    })
    
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login', 
        AuthenticationController.login
    )

    app.get('/songs', 
        SongsController.index
    )

    app.get('/songs/:songId', 
        SongsController.show
    )
    app.post('/songs', 
        SongsController.post
    )
}
 