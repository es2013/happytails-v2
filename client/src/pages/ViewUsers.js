import React, { useState, useEffect } from 'react';
import { GET_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useAuth } from '../utils/GlobalState';

function ViewUsers() {
  const { isAdmin } = useAuth();
  const [userData, setUserData] = useState();
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    setUserData(data?.users || {});
  }, [userData]);

  if (loading) return 'Loading...';
  if (error) return `GET_USERS Error: ${error.message}`;

  return (
    <>
      <div>
        <br />
        {isAdmin && <h4 className="flow-text">Employees and Volunteers</h4>}
        {!isAdmin && <h4 className="flow-text">You are not an Admin!</h4>}

        {isAdmin && (
          <table className="striped z-depth-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((users) => {
                return (
                  <>
                    <tr>
                      <td>
                        {users.lastName}, {users.firstName}
                      </td>
                      <td>{users.username}</td>
                      <td>{users.email}</td>
                      {users.isAdmin && <td>Admin</td>}
                      {!users.isAdmin && <td>Caretaker</td>}
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Blah</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </>
  );
}

export default ViewUsers;
