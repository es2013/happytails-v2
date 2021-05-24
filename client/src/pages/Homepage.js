import React from 'react';
import Filters from '../components/Filters';

import Hero from '../components/Hero';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';

import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../utils/queries';

function Homepage() {
  // do we need to pass state in homepage? I think all that data would be already rendered in our table components..
  const { data } = useQuery(GET_DOGS);
  const [dogData, setDogData] = React.useState([])

  React.useEffect(() => {
    setDogData(data?.canines)
  }, [data])

  return (
    <div>
      <Hero />

      <UserMessage />

      <Filters dogData={data?.canines} setDogData={setDogData} />

      <TableAm dogData={dogData} />

      <TablePm />
    </div>
  );
}

export default Homepage;
