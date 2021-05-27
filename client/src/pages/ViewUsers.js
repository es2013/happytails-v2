import React, { useState, useEffect } from 'react';
import { GET_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

function ViewUsers() {
  const [userData, setUserData] = useState();

  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    setUserData(data?.users || {});
  }, [data]);

  console.log('*#*#*# GET_USERS data: ');
  console.log(data);

  return (
    <>
      {/* {data.users.map((users) => {
        return (
          <>
            <tr>
              <div>users.firstName</div>
            </tr>
          </>
        );
      })} */}
      <br />
      <h4>All Employees and Volunteers</h4>
      <table className="striped z-depth-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default ViewUsers;
