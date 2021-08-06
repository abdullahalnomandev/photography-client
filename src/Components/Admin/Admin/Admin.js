import React, { useState } from 'react';
import AddServices from '../AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar';
import AddAdmin from "../AddAdmin/AddAdmin"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ManageServices from '../ManageService/ManageServices';
import ManageCustomer from '../ManageCustomer/ManageCustomer';
import UpdateStatus from '../ManageCustomer/UpdateStatus';
const Admin = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
           <Sidebar isShow={isShow} setIsShow={setIsShow}/>
           <Switch>
               <Route path="/admin/addServices">
                   <AddServices />
               </Route>
               <Route path="/admin/manageServices">
                   < ManageServices/>
               </Route>
               <Route path="/admin/addAdmin">
                   < AddAdmin/>
               </Route>
               <Route path="/admin/manageCustomer">
                   < ManageCustomer/>
               </Route>
               <Route path="/admin/updateStatus">
                   <UpdateStatus />
               </Route>
           </Switch>
        </div>
    );
};

export default Admin;