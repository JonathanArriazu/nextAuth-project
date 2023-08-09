import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        maxlength: 32,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 32
    },
    image: String,
    role: {
        type: String,
        default: 'user'
    },
    provider: {
        type: String,
        default: 'credentials'
    }
}, { timestamps: true })

const User = model.user || model('user', userSchema)

export default User