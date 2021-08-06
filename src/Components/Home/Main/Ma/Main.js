import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card/Card';

const Main = () => {
    const [services,setServices] = useState([])
    useEffect(() => {

        fetch("https://stormy-citadel-51130.herokuapp.com/services")
        .then(response => response.json())
        .then(data=>setServices(data))

    },[]);
    

    return (
        <div className="container row mx-auto mt-4">
            {
                services.map(data => <Card data={data} />)
            }
        </div>
    );
};

export default Main;