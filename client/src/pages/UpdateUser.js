import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_ONE_USER } from '../utils/queries';
import { UPDATE_USER_STATUS } from '../utils/mutations';
import { useAuth } from '../utils/GlobalState';

function UpdateUser(props) {
  const { token, isAdmin } = useAuth();
  const [updateUsername] = useState(props.match.params.username);
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const [updateUserStatus, { updateUserError }] =
    useMutation(UPDATE_USER_STATUS);

  const { loading, getUserError, data } = useQuery(GET_ONE_USER, {
    variables: { username: updateUsername },
  });

  useEffect(() => {
    setUserData(data?.users || {});
  }, [data]);

  if (loading) return 'Loading...';
  if (getUserError) return `GET_ONE_USER Error: ${getUserError.message}`;

  const handleFormSubmit = async (userStatus) => {
    const mutationResponse = await updateUserStatus({
      variables: { username: updateUsername, isActive: userStatus },
    });

    if (updateUserError)
      return `UPDATE_USER_STATUS Error: ${updateUserError.message}`;

    // In order for the updated info to show up on the Dashboard, we
    // to use window.location to do a hard refresh
    window.location = '/view-users';
  };

  return (
    <div className="container update-user-container">
      <div className="row">
        {!data && <h3>No User selected!</h3>}

        <div className="col s12 m4 l2"></div>

        {!token && (
          <div className="col s12 m4 l8 center">
            <h3>You are not logged in!</h3>
          </div>
        )}

        {!isAdmin && (
          <div className="col s12 m4 l8 center">
            <h3>You are not an Admin!</h3>
          </div>
        )}

        {token && isAdmin && (
          <div className="col s12 m4 l8 center">
            <div className="card z-depth-2">
              <div className="card-content">
                <h3 className="update-text-name flow-text">
                  <span>
                    {data.user.firstName} {data.user.lastName}
                  </span>
                </h3>
              </div>

              {data.user.isActive && (
                <div className="update-text-name2 flow-text">
                  User{' '}
                  <span className="emphasized-text">{data.user.username}</span> is
                currently an
                  <span className="emphasized-text"> active</span> user.
                  <br />
                Click on the blue button to de-activate this user.
                </div>
              )}

              {!data.user.isActive && (
                <div className="update-text-name2 flow-text">
                  User{' '}
                  <span className="emphasized-text">{data.user.username}</span> is
                currently an
                  <span className="emphasized-text"> inactive</span> user.
                  <br />
                Click on the blue button to activate this user.
                </div>
              )}
              <div className="card-action">
                <br></br>
                <div className="button-container">
                  <a
                    className="waves-effect waves-light red btn doggie-update-submit"
                    id="27"
                    data-v_id="14"
                    type="submit"
                    onClick={() => history.goBack()}
                  >
                    Cancel
                </a>

                  {data.user.isActive && (
                    <button
                      className="waves-effect waves-light btn doggie-update-submit"
                      id="27"
                      data-v_id="14"
                      type="submit"
                      onClick={() => {
                        handleFormSubmit(false);
                      }}
                    >
                      De-Activate {data.user.username}
                    </button>
                  )}

                  {!data.user.isActive && (
                    <button
                      className="waves-effect waves-light btn doggie-update-submit"
                      id="27"
                      data-v_id="14"
                      type="submit"
                      onClick={() => {
                        handleFormSubmit(true);
                      }}
                    >
                      Activate {data.user.username}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col s12 m4 l2"></div>
      </div>
    </div>
  );
}

export default UpdateUser;
