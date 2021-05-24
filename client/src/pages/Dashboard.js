import { useQuery } from '@apollo/client';
import React from 'react';
import Filters from '../components/Filters';
import TableAm from '../components/TableAm';
import UserMessage from '../components/UserMessage';
import { GET_DOGS } from '../utils/queries';

function Dashboard() {
  const { data } = useQuery(GET_DOGS);
  console.log('GET_DOGS: ', data);
  
  return (
    <div className="dashboard-container">
      <UserMessage />

      <Filters />

      {/* currently is just one table, but will work on getting to load based on time */}
      <TableAm dogdata={ data }/>
    </div>
  );
}

export default Dashboard;
