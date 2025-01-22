require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World 2!')
})

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})