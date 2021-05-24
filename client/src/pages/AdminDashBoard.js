import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import AdminMessage from '../components/AdminMessage';

function AdminDashboard() {

    // function seeUsers() {

        // Create a value for seeUsers and if true render users table

    // }

    // function showRecords() {

        // Create a value for showRecords and if true render records table

    // }

    return (
        <div className="dashboard-container">

            <AdminMessage />

            <Filters />

            {/* currently is both tables, but will work on getting to load current table */}
            <TableAm />

            <TablePm />

            <div className="row">
                {/* Add Dog button links to add dog page*/}
                <div className="col s4 m2">
                    {/* add on click funtionality to link to add dog page */}
                    <button className="btn add-dog-btn" type="button">
                        <a to="/add-dog" className="add-dog">
                            Add a Dog
                        </a>
                    </button>
                </div>

                {/* See Users shows all users */}
                <div className="col s4 m2">
                    <button className="btn see-users-btn" type="button">
                        {/* create user table and render instead of dog tables. */}

                        <a to="/users" className="see-users">
                            See Users
                        </a>
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