import React, { useState } from 'react';
import Dashboard from './Dashboard';
import UserSidebar from './UserSidebar/UserSidebar';

const UserDashboard = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className="">
                <div className="">
                    <UserSidebar isShow={isShow} setIsShow={setIsShow} />
                </div>
                <div className="container" onClick={() => setIsShow(false)}>
                    <Dashboard />

                </div>

            </div>
        </div>
    );
};

export default UserDashboard;