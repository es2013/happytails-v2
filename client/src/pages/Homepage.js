import React from 'react';
import Filters from '../components/Filters';
import Hero from '../components/Hero';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../utils/queries';
import { useAuth } from '../utils/GlobalState';

function Homepage() {
  const { token } = useAuth();
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  React.useEffect(() => {
    setDogData(data?.canines || []);
  }, [data]);

  return (
    <div>
      <Hero />
      <UserMessage />
      <section className="container center-align">
        <TableAm dogData={dogData} />
        <br /><br />
        <TablePm dogData={dogData} />
        <br /><br /><br /><br /><br /><br />
      </section>
    </div>
  );
}

export default Homepage;
