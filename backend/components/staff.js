import Staff from "../models/staffModel.js";

const getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find()
        if(!staff) return res.status(400).json({ message: 'Error finding staff' })

        return res.status(200).json({ data: staff })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getStaff = async (req, res) => {
    try {
        const { id } = req.params
        const singleStaff = await Staff.findById(id)

        if(!singleStaff) return res.status(400).json({ message: 'Staff with id is not found' })

        return res.status(200).json({ data: singleStaff })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createStaff = async (req, res) => {
    try {
        const staff = await Staff.create(req.body)
        return res.status(200).json({ message: 'Staff is created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteStaff = async (req, res) => {
    try {
        const { id } = req.params
        const deleteStaff = await Staff.findByIdAndDelete(id)

        if(!deleteStaff) return res.status(400).json({ message: 'Staff not deleted' })

        return res.status(200).json({ message: 'Staff deleted successfully' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateStaff = async (req, res) => {
    try {
        const { id } = req.params

        const updateStaff = await Staff.findByIdAndUpdate(id, req.body)

        if(!updateStaff) return res.status(400).json({ message: 'Staff not updated' })

        return res.status(200).json({ message: 'Staff updated successfully' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export { getAllStaff, getStaff, createStaff, deleteStaff, updateStaff }