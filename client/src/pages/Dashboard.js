import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';

function Dashboard() {

    return (
        <div className="dashboard-container">
            <UserMessage />

            <Filters />

            {/* currently is both tables, but will work on getting to load current table */}

            <TableAm />

            <TablePm />
        </div>
    );
};

export default Dashboard;