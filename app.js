require('dotenv').config()

const policy = {
    origin: [
        process.env.FRONTEND_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT
app.use(cors(policy))

// Listener
app.listen(port, () => {
    console.log(`App running at port ${port}`)
})

// Registered routes
const passwordRoute = require('./routes/passwordRoute')
app.use('/passwords', passwordRoute)
