import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';
import Ordered from './../ordered/Ordered';



const Orders = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch("https://sleepy-eyrie-54218.herokuapp.com/findOrders?email=" + loggedUser?.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [order])
    
    return (
        <div className='orders'>
           <h1>Your orders</h1>
           {
               order?.map(ord => <Ordered key={ord._id} order={ord} /> )
           }
             
        </div>
    );
};

export default Orders;