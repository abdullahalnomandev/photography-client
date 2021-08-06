import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserSlash } from '@fortawesome/free-solid-svg-icons';
const UserSidebar = ({ isShow, setIsShow }) => {

    return (
        <div>
            <div className={isShow ? ' d-flex flex-column text-justify sidebar-open sidebar-main' : 'bg-dark d-flex flex-column text-justify sidebar sidebar-main'} >
                <button href="javascript:void(0)" class="bg-muted btn btn-muted ms-auto text-success  me-4 border-none" style={{ fontSize: '20px' }} onClick={() => setIsShow(false)}><span style={{ fontSize: '50px' }}>&times;</span></button>
                <Link to='/userDashboard/orders' className=' ms-md-3 ms-0  mt-2 sidebar-anchor' onClick={() => setIsShow(false)}><p className='sidebar-link-text'><FontAwesomeIcon icon={faUserSlash} className='me-md-3 me-3' />Product Info</p></Link>
                <Link to="/" className='ms-md-3 ms-0 mt-2 sidebar-link sidebar-anchor' style={{ textDecoration: 'none' }}><h6><FontAwesomeIcon icon={faHome} className='me-md-3 me-0 ms-md-0 ms-0 sidebar-link-text' /><span className='d-md-inline-block d-none'>Home</span></h6></Link>

            </div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} className='ms-3 mt-5' onClick={() => setIsShow(true)}>&#9776; </span>

        </div>
    );
};

export default UserSidebar;