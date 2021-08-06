import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer/Footer';
import Navigation from '../../../Header/Navigation/Navigation';
import { SharedDataContext } from '../../../../../App';


const SingleService = () => {
    const { id } = useParams()
    const [service, setService] = useState({})
    const { sharedData, setSharedData } = useContext(SharedDataContext)
    const pic = `data:image/png;base64,${service?.image?.img}`
    const handleShare = (name, price) => {
        const newSharedData = { ...sharedData }
        newSharedData.name = name
        newSharedData.price = price
        setSharedData(newSharedData)

    }
    useEffect(() => {
        fetch(`https://stormy-citadel-51130.herokuapp.com/service/${id}`)
            .then(response => response.json())
            .then(data => setService(data[0]))

    }, [])

    return (
        <div>
            <Navigation />
            <div>
                <div className="container mx-auto d-flex flex-md-row flex-column mt-5 mb-4">
                    <div>
                        <img src={pic} className="img-fluid w-100" />
                    </div>
                    <div className='mt-auto mb-auto ms-md-5 ms-0 me-md-5 me-0'>
                        <h1>{service.name}</h1>
                        <p>{service.description}</p>
                        <h3>${service.price}</h3>
                        <Link to="/checkout"> <button className="join mb-2" onClick={() => handleShare(service.name, service.price)}>Buy Now</button> </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default SingleService;