import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const passwordSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true,
        default: uuidv4,
    },
    account: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
})

const Password = mongoose.model('Password', passwordSchema)

export default Password