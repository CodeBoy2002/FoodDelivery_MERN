import Order from '../models/orderModel.js'

const getAllOrder = async (req, res) => {
    try {
        const allOrders = await Order.find()
        if(!allOrders) return res.status(400).json({ message: 'Orders not found' })

        return res.status(200).json({ data: allOrders })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    try {
        const { id } = req.params
        const singleOrder = await Order.findById(id) 

        if(!singleOrder) return res.status(400).json({ message: "Order not found" })

        return res.status(200).json({ data: singleOrder })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createOrder = async (req, res) => {
    try {
        const createOrder = await Order.create(req.body)
        if(!createOrder) return res.status(400).json({ message: "Order not created" })

        return res.status(200).json({ message: "Order created successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const deleteOrder = await Order.findByIdAndDelete(id)

        if(!deleteOrder) return res.status(400).json({ message: "Order not deleted" })

        return res.status(200).json({ message: "Order deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params

        const updateOrder = await Order.findByIdAndUpdate(id, req.body)

        if(!updateOrder) return res.status(400).json({ message: "Order not updated" })

        return res.status(200).json({ message: "Order updated successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export { getAllOrder, getOrder, createOrder, deleteOrder, updateOrder }