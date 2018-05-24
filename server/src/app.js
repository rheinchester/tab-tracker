const express = require('express')
const bodyParser = require('body-parser')//allows app to process json easily
const cors = require('cors')//enables http query at the backend
const morgan = require('morgan')// allows us to see which device hit the server

const app = express()


//middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res)=>{
    res.send({
        message:'hello world'
    })
})

app.listen(process.env.PORT || 8081)