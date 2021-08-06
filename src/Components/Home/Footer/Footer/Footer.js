import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="row container mx-auto">
                <div className="col-lg-3 col-md-6">
                    <li className="logo mt-5">S-PHOTOGRAPHY</li>

                    <div>
                        <h5 className="text-white ">about us</h5>
                        <p className="text-white">We are the best photography center</p>
                    </div>
                    <div>
                        <h4 className="text-white">Contact us</h4>
                        <p className="text-white">call:090909090</p>
                        <p className="text-white">Email: s-ph@gmail.com</p>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mt-5">Information</h4>
                    <div>
                        <li>About us</li>
                        <li>More Search</li>
                        <li>Collection</li>
                        <li>Testimonial</li>

                    </div>

                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mt-5">Helpful Links</h4>
                    <div>
                        <li>Sources</li>
                        <li>Support</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>

                    </div>


                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mt-5">Subscribe</h4>
                    <div>
                        <input type="text" name="subscribe" />
                        <button type="submit">Subscribe now</button>
                    </div>

                </div>

            </div>
            <hr  className="bg-white"/>
            <div>

            </div>
        </div>
    );
};

export default Footer;