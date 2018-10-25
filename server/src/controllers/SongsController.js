const { Song } = require('../models')
// NB: {force:true} clears the whole db. So in case server misbehaves try it. 
// Figure out a better solution later

module.exports = {
  async show(req, res) {
    try {
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch songs'
      })
    }
  },
  async index(req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 15
      })
    }
    res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch songs'
      })
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create songs'
      })
    }
  },
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create songs'
      })
    }
  }
}
