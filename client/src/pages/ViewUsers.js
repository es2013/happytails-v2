import React, { useState, useEffect } from 'react';
import { GET_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useAuth } from '../utils/GlobalState';

function ViewUsers() {
  const { isAdmin, token } = useAuth();
  const [userData, setUserData] = useState();
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    setUserData(data?.users || {});
  }, [userData]);

  if (loading) return 'Loading...';
  if (error) return `GET_USERS Error: ${error.message}`;

  console.log('*#*#*# GET_USERS data: ');
  console.log(data);

  console.log('&&& isAdmin ', isAdmin);
  console.log('*** token ', token);

  return (
    <>
      <div>
        <br />
        <h4 className="flow-text">Employees and Volunteers</h4>

        <table className="striped z-depth-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((users) => {
              return (
                <>
                  <tr>
                    <td>
                      {users.firstName} {users.lastName}
                    </td>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default ViewUsers;
