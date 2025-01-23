import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import passwordRoute from './routes/passwordRoute.js'

const policy = {
    origin: [
        process.env.FRONTEND_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

const app = express()
const port = process.env.PORT
app.use(cors(policy))

// Listener
app.listen(port, () => {
    console.log(`App running at port ${port}`)
})

// Registered routes
app.use('/passwords', passwordRoute)
