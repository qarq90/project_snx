import mongoose from 'mongoose'

const {Schema} = mongoose

const reviewSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    feedback: String,
})

let Review;

try {
    Review = mongoose.model('Review')
} catch (e) {
    Review = mongoose.model('Review', reviewSchema)
}

export default Review