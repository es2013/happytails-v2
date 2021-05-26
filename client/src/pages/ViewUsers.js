import React, { useState } from 'react';
import { GET_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

function ViewUsers() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log('*#*#*# GET_USERS data: ');
  console.log(data);

  return (
    <>
      {data.users.map((users) => {
        return (
          <>
            <tr>
              <div>users.firstName</div>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default ViewUsers;
