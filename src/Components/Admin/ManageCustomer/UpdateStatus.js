import React, { useContext, useState } from 'react';
import { SharedDataContext } from '../../../App';

const UpdateStatus = () => {
    const {id,setId} = useContext(SharedDataContext)
    console.log(id)
    const [preStatus,setPrevStatus] = useState({})
    const handleStateChange = (e) => {
        const newStatus = {...preStatus}
        newStatus.status=e.target.value
        setPrevStatus(newStatus)
    }
    const handleUpdate=() => {
        console.log(preStatus)
        fetch(`https://stormy-citadel-51130.herokuapp.com/statusUpdate/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
        },
        body: JSON.stringify(preStatus)
    }
        )
    }
    return (
        <div className=" container">
            <h3>Update Order Status</h3>
            <select name="" className='w-50 ' onChange={handleStateChange}>
                <option value="In progress" >In Progress</option>
                <option value="Done">Done</option>

            </select> <br/>
            <button className="btn btn-success mt-2" onClick={handleUpdate}>Update Now</button>
        </div>
    );
};

export default UpdateStatus;