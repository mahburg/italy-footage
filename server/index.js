const express = require('express')
    , config = require('./config.js')

const app = express()

app.use(express.static(__dirname + '/../build'))

app.listen(config.port, _=>{console.log(`Listening on port: ${config.port}`)})