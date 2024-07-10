import mongoose from 'mongoose'

const {Schema} = mongoose

const cartSchema = new Schema({
	email: String,
	name: String,
	img: String,
	type: String,
	price: Number,
	quantity: Number
}, {timestamps: true});

let Cart;

try {
	Cart = mongoose.model('Cart')
} catch (e) {
	Cart = mongoose.model('Cart', cartSchema)
}

export default Cart
