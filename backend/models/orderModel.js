import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    createdAt: Date.now
})

const Order = mongoose.model('Order', orderSchema)

export default Order