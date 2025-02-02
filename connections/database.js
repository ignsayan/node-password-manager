import mongoose from 'mongoose'

// Database credentials
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const database = process.env.DB_NAME
const params = process.env.DB_PARAMS

// Connection string
const uri = process.env.APP_ENVIRONMENT === 'local'
    ? `mongodb://localhost:27017/${database}`
    : `mongodb+srv://${username}:${password}@${host}/${database}?${params}`

const options = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

// Establish connection
const DatabaseConnection = () => {
    mongoose
        .connect(uri, options)
        .then(() => console.log("✅ Database connected"))
        .catch((error) => {
            console.log(error.errorResponse)
            process.exit(1)
        })
}

export default DatabaseConnection