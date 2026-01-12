import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import DatabaseConnection from './connections/database.js';
import home from './templates/home.js';
import {
    passwordRoute,
    userRoute,
} from './routes/index.js';

const policy = {
    origin: [
        process.env.FRONTEND_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

DatabaseConnection();

const app = express()
app.use(express.json())
app.use(cors(policy))

// Registered routes
app.use('/passwords', passwordRoute)
app.use('/users', userRoute)

app.get('/', home);

// Listener
app.listen(process.env.PORT, () => console.log('✅ Server started'))