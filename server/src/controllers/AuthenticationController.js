const {User} = require('../models')

module.exports = {
    async register (req, res){
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
            //email already exists
        }
    },
    async login (req, res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
                res.status(403).send({
                    error: 'This login information is incorrect'
                })
            }

            const isPassWordValid = password === user.password
            if (!isPassWordValid) {
                return res.status(403).send({
                    error: 'This login information is incorrect'
                })
            }

            const userJson = user.toJSON()

            res.send({
                user : userJson
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
            //email already exists
        }
    }
}

