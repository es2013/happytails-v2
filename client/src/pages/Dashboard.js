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
  const { token } = useAuth();
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  React.useEffect(() => {
    setDogData(data?.canines);
  }, [data]);

  const today = new Date();
  const nowIsPM = allHelpers.isPM(today);

  return (
    <div className="dashboard-container">
      <UserMessage />
      {token && <Filters dogData={data?.canines} setDogData={setDogData} />}
      {!nowIsPM && <TableAm dogData={dogData} />}
      {nowIsPM && <TablePm dogData={dogData} />}
    </div>
  );
}

export default Dashboard;
