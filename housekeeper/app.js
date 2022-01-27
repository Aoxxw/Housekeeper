
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'source')))

app.listen(3000, function(){
    console.log('server started at http://localhost:3000');
})