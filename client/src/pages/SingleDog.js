import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_DOG } from '../utils/queries';
import { ADD_POTTY, ADD_WALK } from '../utils/mutations';
import allHelpers from '../utils/helpers.js';
import { useAuth } from '../utils/GlobalState';

function SingleDog(props) {
  const { token } = useAuth();
  const [dogPotty, setDogPotty] = useState(false);
  const [dogWalk, setDogWalk] = useState(false);
  const [_id, setId] = useState('');

  const [canine_id, setCanine_id] = useState(props.match.params.id);

  const [addPotty] = useMutation(ADD_POTTY);
  const [addWalk] = useMutation(ADD_WALK);
  const [dogData, setDogData] = useState({});
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    try {
      if (dogWalk) {
        const { error, data } = await addWalk({
          variables: {
            canineId: canine_id,
          },
        });
        console.log('!!! Walk Error: ', { error, data });
        // if (error) {
        //   throw error.message
        // }
      }
      if (dogPotty) {
        const { error, data } = await addPotty({
          variables: {
            canineId: canine_id,
          },
        });

        console.log('!!! Potty Error: ', { error, data });
      }

      // In order for the updated info to show up on the Dashboard, we need
      // to use window.location to do a hard refresh
      window.location = '/dashboard';
    } catch (error) {
      console.log(error);
    }
  };

  const handlePottyChange = (event) => {
    const { checked } = event.target;
    setDogPotty(checked);
  };

  const handleWalkChange = (event) => {
    const { checked } = event.target;
    setDogWalk(checked);
  };

  const { loading, error, data } = useQuery(GET_DOG, {
    variables: {
      id: canine_id,
    },
  });

  useEffect(() => {
    setDogData(data?.canine || {});
  }, [data]);

  useEffect(() => {
    if (dogData.potty) {
      dogData.potty.forEach((p) => {
        if (
          p.username &&
          allHelpers.isToday(new Date(Number(p.timestamp))) &&
          allHelpers.isPM(new Date(Number(p.timestamp)))
        ) {
          setDogPotty(true);
        }
      });
    }

    if (dogData.walk) {
      dogData.walk.forEach((p) => {
        if (
          p.username &&
          allHelpers.isToday(new Date(Number(p.timestamp))) &&
          allHelpers.isPM(new Date(Number(p.timestamp)))
        ) {
          setDogWalk(true);
        }
      });
    }
  }, [dogData]);

  if (loading) return 'Loading...';
  if (error) return `GET_DOG Error: ${error.message}`;

  return (
    <div className="row">
      {!dogData && <h3>No dog selected!</h3>}

      <div className="col s12 m4 l2"></div>

      {!token && (
        <div className="col s12 m4 l8 center">
          <h3>You are not logged in!</h3>
        </div>
      )}

      {token && (
        <div className="col s12 m4 l8 center">
          <div className="card z-depth-2">
            <div className="card-content">
              <h3 className="doggy-name flow-text">{dogData.name}</h3>
              <img
                className="single-dog-image"
                src={`/dogs/${dogData.name}.jpg`}
                alt={`${dogData.name}`}
                width="150"
                heigh="150"
              />
            </div>

            <div className="card-action">
              <p className="flow-text">
                Please check off the activities that have been completed
              </p>

              <label className="check activity-checkbox">
                <input
                  name="potty"
                  onClick={handlePottyChange}
                  type="checkbox"
                  className="filled-in"
                  id="potty-check"
                  checked={dogPotty}
                />
                <span className="flow-text">Potty</span>
              </label>

              <label className="check activity-checkbox">
                <input
                  name="walk"
                  onClick={handleWalkChange}
                  type="checkbox"
                  className="filled-in"
                  id="walk-check"
                  checked={dogWalk}
                />
                <span className="flow-text">Walk</span>
              </label>

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
                <button
                  className="waves-effect waves-light btn doggie-update-submit"
                  id="27"
                  data-v_id="14"
                  type="submit"
                  onClick={() => {
                    handleFormSubmit();
                  }}
                  disabled={!dogWalk && !dogPotty}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="col s12 m4 l2"></div>
    </div>
  );
}

export default SingleDog;
