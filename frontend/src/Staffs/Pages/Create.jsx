import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [staff, setStaff] = useState([])
    const [userDetails, setUserDetails] = useState([])
    const [orderDetails, setOrderDetails] = useState([])

    useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/app/staff`)    
                .then((response) => {
                    console.log(response.data.data);
                    setStaff(response.data.data)
                })
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/app/user`)
                .then((response) => {
                    console.log(response.data.data);
                    setUserDetails(response.data.data)
                })    
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/app/order`)
                .then((response) => {
                    console.log(response.data.data);
                    setOrderDetails(response.data.data)
                })
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    const getStaff = (singleItem) => {
        const start = staff.map((singleStaff) => singleStaff.startTime)
        const end = staff.map((singleStaff) => singleStaff.endTime)

        console.log(start);
        console.log(end);
    }
  return (
    <div className='ml-5'>
        <p className='mt-5 mb-5 font-bold underline center'>AVAILABLE DELIVERY</p>
        <table className='border-separate border border-slate-500'>
            <thead>
                <tr>
                    <th className='border border-slate-600'>SNO.</th>
                    <th className='border border-slate-600'>Customer Name</th>
                    <th className='border border-slate-600'>Customer Contact</th>
                    <th className='border border-slate-600'>Customer Address</th>
                    <th className='border border-slate-600'>Customer Time</th>
                    <th className='border border-slate-600'>Customer Order</th>
                    <th className='border border-slate-600'>Order Quantity</th>
                    
                </tr>
            </thead>
            <tbody>
                {userDetails.map((item, index) => (
                    <tr key={index}>
                        <td className='border border-slate-700'>{index + 1}</td>
                        <td className='border border-slate-700'>{item.name}</td>
                        <td className='border border-slate-700'>{item.email}</td>
                        <td className='border border-slate-700'>{item.address}</td>
                        <td className='border border-slate-700'>{item.requiredTime}</td>
                        <td className='border border-slate-700'>{item.orders.map(order => order.name)}</td>
                        <td className='border border-slate-700'>{item.orders.map(order => order.quantity)}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>


        <p className='mt-5 mb-5 font-bold underline center'>DELIVERY PEOPLES</p>
        <table>
            <thead>
                <tr>
                    <th className='border border-slate-600'>DELIVERY NAME</th>
                    <th className='border border-slate-600'>DELIVERY DAYS</th>
                    <th className='border border-slate-600'>DELIVERY START TIME</th>
                    <th className='border border-slate-600'>DELIVERY END TIME</th>
                    <th className='border border-slate-600'>LOCATION</th>
                </tr>
            </thead>
            <tbody>
                {staff.map((singleStaff, index) => (
                    <tr key={index}>
                        <td className='border border-slate-700'>{singleStaff.name}</td>
                        <td className='border border-slate-700'>{singleStaff.workingHours.map(singleDay => singleDay.day) + ", "}</td>
                        <td className='border border-slate-700'>{singleStaff.workingHours.map(singleHour => singleHour.startTime) + ", "}</td>
                        <td className='border border-slate-700'>{singleStaff.workingHours.map(singleHour => singleHour.endTime) + ", "}</td>
                        <td className='border border-slate-700'>{singleStaff.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <p className='mt-5 mb-5 font-bold underline center'>ORDER DETAILS</p>
        <table>
            <thead>
                <tr>
                    <th className='border border-slate-600'>S NO.</th>
                    <th className='border border-slate-600'>ITEM NAME</th>
                    <th className='border border-slate-600'>ITEM PRICE</th>
                </tr>
            </thead>
            <tbody>
                {orderDetails.map((order, index) => (
                    <tr key={index}>
                        <td className='border border-slate-700'>{index + 1}</td>
                        <td className='border border-slate-700'>{order.name}</td>
                        <td className='border border-slate-700'>{order.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Create