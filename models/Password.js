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
    key: {
        type: String,
        required: true,
        select: false,
    }
}, {
    timestamps: true,
    versionKey: false,
})

const Password = mongoose.model('Password', passwordSchema)

export default Password