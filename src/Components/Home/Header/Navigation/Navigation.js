import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedDataContext, AuthContext } from "../../../../App"
import "./Navigation.css"
const Navigation = () => {
    const {  role, setRole } = useContext(SharedDataContext)
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
    const handleSignOut = () =>{
        setRole("")
        setLoggedInUser({})
    }
    return (
        <div className="navigation">
            <div className="d-flex  justify-content-between pt-3 ">
                <div className="ms-3 logo">
                    <Link to="/" className="logo-link link">S-PHOTOGRAPHY</Link>
                </div>
                <div className="d-flex ">
                    {
                        loggedInUser.email ? <Link to="/" className="me-3 login link" onClick={handleSignOut}>Log Out</Link> : <Link to="/login" className="me-3 login link">Login</Link>
                    }
                    {
                        role === "admin" ? <Link to="/admin/manageServices" className="me-3 login link">Dashboard</Link> : role === "user" ?
                            <Link to="/userDashboard/orders" className="me-3 login link">Dashboard</Link> :
                            <Link to="/signup" className="me-3 login link">Sign Up</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navigation;