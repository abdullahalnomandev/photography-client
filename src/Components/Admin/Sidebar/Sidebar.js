import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
const Sidebar = ({ isShow, setIsShow }) => {

    return (
        <div>
            <div className={isShow ? ' d-flex flex-column text-justify sidebar-open sidebar-main' : 'bg-dark d-flex flex-column text-justify sidebar sidebar-main'} >
                <button href="javascript:void(0)" class="bg-muted btn btn-muted ms-auto text-success  me-4 border-none" style={{ fontSize: '20px' }} onClick={() => setIsShow(false)}><span style={{ fontSize: '50px' }}>&times;</span></button>
                <Link to='/admin/addServices' className=' ms-md-3 ms-0  mt-md-4 mt-2 sidebar-anchor' onClick={() => setIsShow(false)}><p className='sidebar-link-text'><FontAwesomeIcon icon={faPlus} className='me-md-3 me-3 ' />Add Services</p></Link>
                <Link to='/admin/manageCustomer' className=' ms-md-3 ms-0  mt-2 sidebar-anchor' onClick={() => setIsShow(false)}><p className='sidebar-link-text'><FontAwesomeIcon icon={faSortAmountDown} className='me-md-3 me-3' />Customer Info</p></Link>
                <Link to='/admin/manageServices' className=' ms-md-3 ms-0  mt-2 sidebar-link sidebar-anchor' onClick={() => setIsShow(false)}><p className='sidebar-link-text'><FontAwesomeIcon icon={faSortAmountUp} className='me-md-3 me-3' />Manage Services</p></Link>
                <Link to='/admin/addAdmin' className='ms-md-3 ms-0 mt-2 sidebar-link sidebar-anchor' onClick={() => setIsShow(false)}><p className='sidebar-link-text'><FontAwesomeIcon icon={faPlus} className='me-md-3 me-3' />Add Admin</p></Link>

            </div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} className='ms-3 mt-5' onClick={() => setIsShow(true)}>&#9776; </span>

        </div>
    );
};

export default Sidebar;