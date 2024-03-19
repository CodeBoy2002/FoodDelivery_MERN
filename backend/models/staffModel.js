import mongoose from 'mongoose'

const workingHoursSchema = mongoose.Schema({
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
})


const staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactInformation: {
        type: String,
        required: true
    },
    workingHours: [workingHoursSchema],
    employmentStatus: {
        type: String,
        enum: ['Active', 'On Leave', 'Terminated'],
        default: 'Active'
    }
}, {
    createdAt: Date.now
})

const Staff = mongoose.model('Staff', staffSchema)

export default Staff