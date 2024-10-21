import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCards from "../../components/OrderCard/OrderCards";
import "./Orders.css"
const Orders = () => {
  const [adminOrder, setAdminOrder] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchAdminOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/payment/adminOrder"
        );
        setAdminOrder(response.data.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching admin orders:", error.message);
      }
    };

    fetchAdminOrders(); // Call the async function inside useEffect
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  console.log(adminOrder);

  return (
    <>
      <div className="orders">
        <div>
          {adminOrder.map((order, index) => (
            <OrderCards
              key={index}
              items={order.items}
              amount={order.amount}
              status={order.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
