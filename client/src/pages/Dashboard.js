import { useQuery } from '@apollo/client';
import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';
import { GET_DOGS } from '../utils/queries';
import { useAuth } from '../utils/GlobalState';
import allHelpers from '../utils/helpers';

function Dashboard() {
  const { token, isAdmin } = useAuth();
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  if (isAdmin) {
    window.location = '/admin-dashboard';
  };

  React.useEffect(() => {
    setDogData(data?.canines || []);
  }, [data]);

  const today = new Date();
  const nowIsPM = allHelpers.isPM(today);

  return (
    <div className="dashboard-container container center-align">
      <UserMessage />
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
      <section className="container center-align">
        {!nowIsPM && <TableAm dogData={dogData} />}
        {nowIsPM && <TablePm dogData={dogData} />}
      </section>
    </div>
  );
}

export default Dashboard;
