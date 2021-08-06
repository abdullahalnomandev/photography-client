import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ManageServices = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://stormy-citadel-51130.herokuapp.com/services")
            .then(response => response.json())
            .then(data => {

                setProducts(data)

            })
    })

    const handleDelete = (id) => {
        fetch(`http://stormy-citadel-51130.herokuapp.com/serviceDelete/${id}`, {
            method: "DELETE"
        })
    }
    return (
        <div className='container'>
            {

                <div class="table-responsive-sm">
                    <h5 class="mt-5">All Services</h5>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Service Name</th>

                                <th scope="col">Price</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr>
                                    <th scope="row">{index = index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><FontAwesomeIcon icon={faTrash} className='text-danger' style={{ cursor: 'pointer' }} onClick={() => handleDelete(product._id)} /><Link to="/admin/updateProduct" >
                                        <FontAwesomeIcon icon={faEdit} as={Link} className='text-dark ms-3' style={{ cursor: 'pointer' }} /></Link></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            }

        </div>
    );
};

export default ManageServices;