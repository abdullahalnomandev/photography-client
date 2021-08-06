import React, { useEffect, useState } from 'react';
import TypeWriter from "react-typewriter";
import "./Banner.css"
const Banner = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => setIsShow(true), 6500);
       return () => {
            clearTimeout(timeout);
        };
    })
    return (
        <div className="banner  pe-5">
            <TypeWriter typing={0.6} className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="title">S-Photography</h1>
                <h1>Worlds No.1 Photography</h1>
                <h1>in your town</h1>

            </TypeWriter>
            <div className="d-flex flex-column align-items-center justify-content-center">
                {
                    isShow && <button className="join">Join the party</button>

                }
            </div>

        </div>
    );
};

export default Banner;