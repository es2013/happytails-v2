import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';

function AdminDashboard() {

    return (
        <div className="dashboard-container">
            <UserMessage />

            <Filters />

            {/* currently is both tables, but will work on getting to load current table */}
            <TableAm />

            <TablePm />

            <div className="row">
                {/* Add Dog button links to add dog page*/}
                <div className="col s4 m2">
                    {/* add on click funtionality to link to add dog page */}
                    <button className="btn add-dog-btn" type="button">
                        Add A Dog
                    </button>
                </div>

                {/* See Users shows all users */}
                <div className="col s4 m2">
                    <button className="btn see-users-btn" type="button">
                        See Users
                    </button>
                </div>

                {/* takes admin to historical data table */}
                <div className="col s4 m2">
                    <button className="btn historical-table-btn" type="button">
                        See Past Records
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;