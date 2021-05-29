import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../utils/queries';
import { useAuth } from '../utils/GlobalState';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import AdminMessage from '../components/AdminMessage';
import allHelpers from '../utils/helpers';

function AdminDashboard() {
  const { token } = useAuth();
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  React.useEffect(() => {
    setDogData(data?.canines || []);
  }, [data]);

  const today = new Date();
  const nowIsPM = allHelpers.isPM(today);

  function seeUsers() { }

  function seeRecords() { }

  return (
    <div className="dashboard-container">
      <AdminMessage />
      {token && (
        <div className="center-align">
          <h6>You can choose a filter to view by:</h6>
        </div>
      )}
      {token && (
        <Filters
          dogData={data?.canines}
          setDogData={setDogData}
          pmShift={nowIsPM}
        />
      )}
      {!nowIsPM && <TableAm dogData={dogData} />}
      {nowIsPM && <TablePm dogData={dogData} />}

      <div className="row">
        {/* Add Dog button links to add dog page*/}
        <div className="col s12 center-align">
          <button className="btn admin-btn add-dog-btn" type="button">
            <Link to="/add-dog" className="add-dog">
              Add a Dog
            </Link>
          </button>

          <button
            className="btn admin-btn see-users-btn"
            onClick={seeUsers}
            type="button"
          >
            {/* create user table and render instead of dog tables. */}
            {/* <a to="/users" className="see-users">
                            See Users
                        </a> */}
            See Users
          </button>

          <button
            className="btn admin-btn historical-table-btn"
            onClick={seeRecords}
            type="button"
          >
            See Past Records
          </button>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
