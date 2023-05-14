const express = require("express")
const { Pool } = require('pg');
const path = require('path')

const db = require('./queries')



const port = 8000

const app = express();

app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../favlinks/build', 'index.html'))
})

app.get('/links', db.getLinks)

app.get('/api', (request, response) => {
    response.json({message: `Hello from server`})
})

app.listen(port, ()=>{
    console.log(`Server is in port ${port}`)
})