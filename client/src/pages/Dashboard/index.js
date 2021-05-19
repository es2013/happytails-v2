import React from 'react';
import Filters from '../../components/Filters';
import TableAm from '../../components/TableAm';
import UserMessage from '../../components/UserMessage';

function Dashboard() {

    return (
        <div className="dashboard-container">
            <UserMessage />

            <Filters />

            {/* currently is just one table, but will work on getting to load based on time */}
            <TableAm />
        </div>
    );
};

export default Dashboard;