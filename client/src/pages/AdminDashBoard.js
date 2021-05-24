import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import AdminMessage from '../components/AdminMessage';

function AdminDashboard() {

    function seeUsers() {

    }

    function showRecords() {

    }

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
                    <button className="btn add-dog-btn" type="button">
                        <Link to="/add-dog" className="add-dog">
                            Add a Dog
                        </Link>
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