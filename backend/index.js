//Create a Food delivery system, it should also allow crud operation for staff. 
//It should also let the user specify the time and days of operations for the staff. 
//The system should automatically show the list of staff available for delivery of food based 
//on order placed by customers

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import staffRoute from './routes/staffRoutes.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'

const app = express()
dotenv.config()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world'))
app.use('/app/staff', staffRoute)
app.use('/app/user', userRoute)
app.use('/app/order', orderRoute)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Connected to DB`);
        app.listen(PORT, () => console.log(`Server running on ${PORT}`))
    })
    .catch((error) => console.log(error))