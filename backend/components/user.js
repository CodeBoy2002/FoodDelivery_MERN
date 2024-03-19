import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        if(!allUsers) return res.status(400).json({ message: 'Users not found' })

        return res.status(200).json({ data: allUsers })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const singleUser = await User.findById(id)

        if(!singleUser) return res.status(400).status({ message: "User not found" })

        return res.status(200).json({ data: singleUser })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        if(!createdUser) return res.status(400).json({ message: "User not created" })

        return res.status(200).json({ message: 'User created successfully' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        
        const deletedUser = await User.findByIdAndDelete(id)

        if(!deletedUser) return res.status(400).json({ message: 'User not deleted' })

        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        
        const updatedUser = await User.findByIdAndUpdate(id, req.body)

        if(!updatedUser) return res.status(400).json({ message: "User not updated" })

        return res.status(200).json({ message: "User updated successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export { getAllUsers, getUser, createUser, deleteUser, updateUser }