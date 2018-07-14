const {Song} = require('../models')
// NB: {force:true} clears the whole db. So in case server misbehaves try it. 
// Figure out a better solution later

module.exports = {
    async show (req, res){
        try {
            const songs = await Song.findById(req.params.songId)
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to fetch songs'
            })
        }
    },
    async index(req, res){
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to fetch songs'
            })
        }
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch(err){
            res.status(500).send({
                error: 'An error has occured trying to create songs'
            })
        }
    }
}

