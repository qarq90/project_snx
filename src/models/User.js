import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
})

let User;

try {
    User = mongoose.model('User')
}
catch (e) {
    User = mongoose.model('User', userSchema)
}

export default User