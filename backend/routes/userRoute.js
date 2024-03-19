import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../components/user.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router