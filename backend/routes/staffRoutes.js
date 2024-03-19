import express from 'express'
import { createStaff, deleteStaff, getAllStaff, getStaff, updateStaff } from '../components/staff.js'
const router = express.Router()

router.get('/', getAllStaff)
router.post('/', createStaff)
router.get('/:id', getStaff)
router.delete('/:id', deleteStaff)
router.put('/:id', updateStaff)

export default router