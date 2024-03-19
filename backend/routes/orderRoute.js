import express from 'express'
const router = express.Router()
import { createOrder, deleteOrder, getAllOrder, getOrder, updateOrder } from '../components/order.js'

router.get('/', getAllOrder)
router.post('/', createOrder)
router.get('/:id', getOrder)
router.delete('/:id', deleteOrder)
router.put('/:id', updateOrder)

export default router