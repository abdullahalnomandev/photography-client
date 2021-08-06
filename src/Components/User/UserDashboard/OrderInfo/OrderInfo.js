import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../App';


const OrderInfo = () => {
    const [orders, setOrders] = useState([]);
    const [ loggedInUser, setLoggedInUser ] = useContext(AuthContext)
    useEffect(() => {
        fetch("https://stormy-citadel-51130.herokuapp.com/orders")
            .then(response => response.json())
            .then(data => {
                const newOrders = data.filter((d => d?.info?.email === loggedInUser.email))
                setOrders([...orders, ...newOrders])
            })

    }, [])
    return (

        <div className="table-responsive-sm">

            <table className="table">
                <thead>
                    <tr>
                         <th>No.</th> 
                        <th>Service</th>
                        <th>Card Type</th>
                        <th>Payment Id</th>
                        <th>order Date</th>
                        <th>order Time</th>
                        <th>Total Pay</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index) =><tr>
                         <th>{index = index + 1}</th> 
                            <td>{order.service}</td>
                            <td>{order.cardDetails.brand}</td>
                            <td>{order.cardId}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.orderTime}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;