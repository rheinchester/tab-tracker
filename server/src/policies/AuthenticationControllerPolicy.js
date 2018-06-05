// In this file we create express middle-ware that validated the credential
const Joi = require('Joi')


 module.exports = {
     register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$') //everything passed in has to be lower-case or upper-case a-z, or 0-9 btw 8 & 32 characters
            )
        }

        //using the schema: validate req.body against schema
        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break;
            
                case 'password':
                    res.status(400).send({
                        error: `
                            <h1>Wrong password</h1>
                            1. password must be between 8 and 32 characters<br>
                            2. It must not contain characters that are not alpha-numeric
                        `
                    })
                    break;
                default:
                    res.status(400).send({
                        error:'Invalid registration information'
                    })
                    break;
            }
        } else {
            next()
        }
        next()
     } 
 }
 
