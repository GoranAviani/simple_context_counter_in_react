import React from 'react';

import Counter from "../counter/Counter";

import './Dashboard.css'

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="dashboard">
                This is dashboard
            </div>

            <Counter/>
        </React.Fragment>
    )
}

export default Dashboard;