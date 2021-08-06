import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrderInfo from './OrderInfo/OrderInfo';
const Dashboard = () => {
    return (
        <div>
            <Switch>
                <Route path="/userDashboard/orders">
                    <OrderInfo />
               </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;