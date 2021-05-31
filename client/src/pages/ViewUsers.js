import React, { useState, useEffect } from 'react';
import { GET_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useAuth } from '../utils/GlobalState';
import { Link } from 'react-router-dom';

function ViewUsers() {
  const { token, isAdmin } = useAuth();
  const [userData, setUserData] = useState();
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    setUserData(data?.users || {});
  }, [userData]);

  let userCount = 0;
  let countActive = 0;
  let countInctive = 0;

  if (data) {
    userCount = data.users.length;

    for (let i = 0; i < data.users.length; i++) {
      if (data.users[i].isActive) {
        countActive++;
      } else {
        countInctive++;
      }
    }
  }

  if (loading) return 'Loading...';
  if (error) return `GET_USERS Error: ${error.message}`;

  return (
    <div className="container user-table-container ">
      <div>
        <br />
        {isAdmin && (
          <h3 className="flow-text speech-bubble">
            There are {userCount} users: {countActive} active users and {countInctive} inactive users.
          </h3>
        )}

        {!isAdmin && <h3 className="center-align">User is not an Admin!</h3>}

        {isAdmin && (
          <table className="striped z-depth-2 container center-align">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((users) => {
                return (
                  <>
                    <tr>
                      {users.isActive && (
                        <td>
                          {users.lastName}, {users.firstName}
                        </td>
                      )}

                      {!users.isActive && (
                        <td className="inactive-text">
                          {users.lastName}, {users.firstName}
                        </td>
                      )}

                      {users.isActive && <td>{users.username}</td>}

                      {!users.isActive && (
                        <td className="inactive-text">{users.username}</td>
                      )}

                      {users.isActive && <td>{users.email}</td>}

                      {!users.isActive && (
                        <td className="inactive-text">{users.email}</td>
                      )}

                      {users.isAdmin && users.isActive && <td>Admin</td>}
                      {users.isAdmin && !users.isActive && (
                        <td className="inactive-text">Admin</td>
                      )}

                      {!users.isAdmin && users.isActive && <td>Caretaker</td>}

                      {!users.isAdmin && !users.isActive && (
                        <td className="inactive-text">Caretaker</td>
                      )}

                      {users.isActive && <td>Active</td>}

                      {!users.isActive && (
                        <td className="inactive-text">Not Active</td>
                      )}

                      {token && (
                        <td>
                          <button type="submit" className="btn">
                            <Link
                              to={`/update-user/${users.username}`}
                              className="select-user"
                            >
                              Update
                            </Link>
                          </button>
                        </td>
                      )}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewUsers;
