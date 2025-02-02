import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firebase_uid: {
        type: String,
        required: false,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
    versionKey: false,
})

const User = mongoose.model('User', userSchema)

export default User