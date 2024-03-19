import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [userOrder, setUserOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    requiredTime: "",
    requiredDay: "",
    orders: [{ name: "", description: "", quantity: 1 }],
  });

  const [itemOrders, setItemOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/app/order`)
      .then((response) => {
        console.log(response.data.data);
        setItemOrders(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const isValidOrder = userOrder.orders.every(item => {
    //   const matchingOrder = itemOrders.find(orderData => orderData.name === item.name)
    //   return matchingOrder && matchingOrder.price === item.price
    // });

    // if (!isValidOrder) {
    //   alert("Please enter valid item name.");
    //   return;
    // }

    try {
      await axios
        .post(`http://localhost:5000/app/user`, userOrder)
        .then((response) => {
          alert("Successfully places order");
          setUserOrder({
            name: "",
            email: "",
            phone: "",
            address: "",
            requiredTime: "",
            requiredDay: "",
            orders: [{ name: "", description: "", quantity: 1 }],
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newOrders = [...userOrder.orders];
    newOrders[index][name] = value;
    setUserOrder({
      ...userOrder,
      orders: newOrders,
    });
  };

  const addOrder = () => {
    setUserOrder({
      ...userOrder,
      orders: [
        ...userOrder.orders,
        {
          name: "",
          description: "",
          price: "",
          quantity: 1,
        },
      ],
    });
  };

  const removeOrder = (index) => {
    const newOrders = [...userOrder.orders];
    newOrders.splice(index, 1);
    setUserOrder({
      ...userOrder,
      orders: newOrders,
    });
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <p className="underline font-bold mb-3">PLACE ORDER</p>
      <form onSubmit={handleSubmit}>
        <p className="font-semibold">Name: </p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={userOrder.name}
          onChange={(e) => setUserOrder({ ...userOrder, name: e.target.value })}
        />
        <p className="font-semibold">Email: </p>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={userOrder.email}
          onChange={(e) => setUserOrder({ ...userOrder, email: e.target.value })}
        />
        <p className="font-semibold">Phone: </p>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={userOrder.phone}
          onChange={(e) => setUserOrder({ ...userOrder, phone: e.target.value })}
        />
        <p className="font-semibold">Address: </p>
        <input
          type="text"
          name="address"
          placeholder="Enter address"
          value={userOrder.address}
          onChange={(e) => setUserOrder({ ...userOrder, address: e.target.value })}
        />
        <p className="font-semibold">Required Time: </p>
        <input
          type="text"
          name="requiredTime"
          placeholder="Enter require time"
          value={userOrder.requiredTime}
          onChange={(e) => setUserOrder({ ...userOrder, requiredTime: e.target.value })}
        />
        <p className="font-semibold">Required Day: </p>
        <select
          name="requiredDay"
          value={userOrder.requiredDay}
          onChange={(e) => setUserOrder({ ...userOrder, requiredDay: e.target.value })}
          required
        >
          <option>Select</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <div className="mt-3">
          {userOrder.orders.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">Item Name: </p>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={(e) => handleChange(e, index)}
                required
              />

              <p className="font-semibold">Description: </p>
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e) => handleChange(e, index)}
                required
              />

              <p className="font-semibold">Quantity: </p>
              <input
                type="Number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleChange(e, index)}
                required
              />

              <button
                className="ring w-[50%] mt-5 cursor-pointer bg-red-400 text-white rounded-md"
                onClick={() => removeOrder(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          className="ring w-[50%] mt-5 cursor-pointer bg-blue-400 text-white rounded-md"
          type="button"
          onClick={addOrder}
        >
          Add Order
        </button>

        <button className="ring w-[50%] mt-6 ml-2 cursor-pointer bg-orange-400 text-white rounded-md">
          Place Order
        </button>
      </form>

      <div className="mt-5 flex flex-col items-center">
        <p className="font-semibold underline">Available Items</p>
        <div className="flex">
          {itemOrders.map((order) => {
            const { id, name, price } = order;
            return (
              <div key={id} className="ring rounded-md m-5 p-5">
                <p className="text-xl">{name}</p>
                <p className="text-xl">{price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Create;
