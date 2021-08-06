import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SharedDataContext } from '../../../App';
const ManageCustomer = () => {
  const [orderDetails, setOrderDetails] = useState([])
  const {id,setId} = useContext(SharedDataContext)
  useEffect(() => {
    fetch("https://stormy-citadel-51130.herokuapp.com/orders")
      .then(response => response.json())
      .then(data => setOrderDetails(data))

  }, [])

 const handleSetOrderId=(i)=>{
  setId(i)

 }


  return (
    <div className="container">


      <div class="table-responsive-sm">
        <table class="table">

          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Order Service</th>
              <th scope="col">Total Pay</th>
              <th scope="col">Payment Type</th>
              <th scope="col">Payment Id</th>
              <th scope="col">Order Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orderDetails.map(((orders, index) => <tr>
                <th scope="row">{index = index + 1}</th>
                <td className=''>{orders.info.name}</td>
                <td className=''>{orders.info.email}</td>
                <td>{orders.service}</td>
                <td>{orders.total}</td>
                <td>{orders.cardDetails.brand}</td>
                <td>{orders.cardId}</td>
                <td>{orders.orderDate}</td>
                <td>{orders.orderTime}</td>
                <td>{orders.status}</td>
                <td ><Link to="/admin/updateStatus"><FontAwesomeIcon icon={faEdit} className='ms-3' style={{cursor: 'pointer'} } onClick={()=>handleSetOrderId(orders._id)}/></Link></td>
              </tr>))
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageCustomer;