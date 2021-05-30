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
  const { token, isAdmin } = useAuth();
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  React.useEffect(() => {
    setDogData(data?.canines || []);
  }, [data]);

  let canineCount = 0
  if (dogData) {
    canineCount = dogData.length;
  } 

  const today = new Date();
  const nowIsPM = allHelpers.isPM(today);

  function seeUsers() {}

  function seeRecords() {}

  return (
    <div className="dashboard-container">
      {isAdmin && <AdminMessage canineCount={canineCount}/>}

      {!isAdmin && (
        <div className="center-align">
          <br /><h4>User is not an admin!</h4><br />
        </div>
      )}

      {token && (
        <div className="center-align">
          <h6>Filter dogs by category:</h6>
        </div>
      )}

      {token && (
        <Filters
          dogData={data?.canines}
          setDogData={setDogData}
          pmShift={nowIsPM}
        />
      )}
      
      {isAdmin && (
        <div className="row">
          {/* Add Dog button links to add dog page*/}
          <div className="col s12 center-align">
            <button className="btn admin-btn add-dog-btn" type="button">
              <Link to="/add-dog" className="admin-link add-dog">
                Add a Dog
              </Link>
            </button>

            <button
              className="btn admin-btn see-users-btn"
              onClick={seeUsers}
              type="button"
            >
              <Link to="/view-users" className="admin-link see-users">
                See Users
              </Link>
            </button>
          </div>

          <section className="container center-align">
            {!nowIsPM && <TableAm dogData={dogData} />}
            {nowIsPM && <TablePm dogData={dogData} />}
          </section>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
