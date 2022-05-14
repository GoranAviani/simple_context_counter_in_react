import React from 'react';

import Counter from "../counter/Counter";

import '../App.css'

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="App">
                Dashboard
            </div>

            <Counter/>
        </React.Fragment>
    )
}

export default Dashboard;