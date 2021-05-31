import React from 'react';
import Hero from '../components/Hero';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../utils/queries';

function Homepage() {
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([]);

  React.useEffect(() => {
    setDogData(data?.canines || []);
  }, [data]);

  return (
    <div>
      <Hero />
      <section className="container center-align">
      <UserMessage />
        <TableAm dogData={dogData} />
        <br /><br />
        <TablePm dogData={dogData} />
        <br /><br /><br /><br /><br /><br />
      </section>
    </div>
  );
}

export default Homepage;
