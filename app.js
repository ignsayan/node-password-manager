import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import DatabaseConnection from './connections/database.js'
import {
    passwordRoute,
} from './routes/index.js'

const policy = {
    origin: [
        process.env.FRONTEND_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

DatabaseConnection()

const app = express()
app.use(express.json())
app.use(cors(policy))

// Registered routes
app.use('/passwords', passwordRoute)

// Listener
app.listen(process.env.PORT, () => console.log('✅ Server started'))