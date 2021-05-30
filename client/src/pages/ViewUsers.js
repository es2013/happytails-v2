import React, { useState, useEffect } from 'react';
import { GET_USERS, GET_USER_COUNT } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useAuth } from '../utils/GlobalState';

function ViewUsers() {
  const { isAdmin } = useAuth();
  const [userData, setUserData] = useState();
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    setUserData(data?.users || {});
  }, [userData]);

  let userCount = 0
  if (data) {
    userCount = data.users.length;
  } 

  if (loading) return 'Loading...';
  if (error) return `GET_USERS Error: ${error.message}`;

  return (
    <>
      <div>
        <br />
        {isAdmin && <h4 className="flow-text">There are currently {userCount} Employees and Volunteers.</h4>}
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
                    <tr key={users._id}>
                      <td key={users.lastname}>
                        {users.lastName}, {users.firstName}
                      </td>
                      <td key={users.username}>{users.username}</td>
                      <td key={users.email}>{users.email}</td>
                      {users.isAdmin && <td key={users.firstName}>Admin</td>}
                      {!users.isAdmin && (
                        <td key={users.firstName}>Caretaker</td>
                      )}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ViewUsers;
