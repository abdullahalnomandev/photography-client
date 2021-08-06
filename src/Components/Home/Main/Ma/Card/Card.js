import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedDataContext } from '../../../../../App';

const Card = ({ data }) => {
    const {sharedData,setSharedData} = useContext(SharedDataContext)
    const pic = `data:image/png;base64,${data.image.img}`
    const handleShare = (name,price) => {
        const newSharedData = {...sharedData}
        newSharedData.name=name
        newSharedData.price=price
        setSharedData(newSharedData)

    }
    return (
        <div className="col-md-4 mt-md-0 mt-1 mb-2">
            <div className="card w-100" style={{ height: "100%" }}>
                <img src={pic} className="card-img-top img-fluid h-75 w-100" />
                <h4 className="card-title text-center ">{data.name}</h4>
                <h5 className="card-title text-center ">${data.price}</h5>
                <div className="d-flex align-items-center justify-content-center">
                   <Link to="/checkout"> <button className="btn btn-success mb-2" onClick={()=>handleShare(data.name,data.price)}>Buy Now</button> </Link>
                    <Link to={"/service/" + data._id}> <FontAwesomeIcon icon={faEye} className={'text-muted ms-4'} style={{ cursor: 'pointer' }} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;