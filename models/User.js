import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    uid: {
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