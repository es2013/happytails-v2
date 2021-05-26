import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { useHistory } from 'react-router-dom';
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
// this query has not be created yet so naming may change
import { GET_DOG } from '../utils/queries';
import { ADD_POTTY, ADD_WALK } from '../utils/mutations';

function SingleDog(props) {
  // boilerplate state setup for updateDog
  const [formState, setFormState] = useState({
    walk: false,
    potty: false,
    _id: '',
  });
  const [canine_id, setCanine_id] = useState(props.match.params.id);
  const [singleDogData, setSingleDogData] = useState([]);
  //const [updateDog, setUpdateDog] = useState(UPDATE_DOG);

  const [addPotty] = useMutation(ADD_POTTY);
  const [addWalk] = useMutation(ADD_WALK);
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    try {
      if (formState.walk) {
        const { error, data } = await addWalk({
          variables: {
            canineId: canine_id,
          },
        });
        console.log('!!! Walk', { error, data });
        // if (error) {
        //   throw error.message
        // }
      }
      if (formState.potty) {
        const { error, data } = await addPotty({
          variables: {
            canineId: canine_id,
          },
        });

        console.log('!!! Potty: ', { error, data });
      }

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormState({
      ...formState,
      [name]: checked,
    });
  };

  const { loading, error, data } = useQuery(GET_DOG, {
    variables: {
      id: canine_id,
    },
  });

  if (loading) return 'Loading...';
  if (error) return `GET_DOG Error: ${error.message}`;

  return (
    <div className="row">
      <div className="col s12 m4 l2"></div>

      <div className="col s12 m4 l8 center">
        <div className="card z-depth-2">
          <div className="card-content">
            <h3 className="doggy-name flow-text">{data.canine.name}</h3>
            <img
              className="single-dog-image"
              src="../images/dogs/Apollo.jpg"
              alt="Apollo"
              width="400"
              heigh="auto"
            />
          </div>

          <div className="card-action">
            <p className="flow-text">
              Please check off the activities that have been completed
            </p>

            <label className="check activity-checkbox">
              <input
                name="potty"
                onClick={handleChange}
                type="checkbox"
                className="filled-in"
                id="potty-check"
                checked={formState.potty}
              />
              <span className="flow-text">Potty</span>
            </label>

            <label className="check activity-checkbox">
              <input
                name="walk"
                onClick={handleChange}
                type="checkbox"
                className="filled-in"
                id="walk-check"
                checked={formState.walk}
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
                disabled={!formState.walk && !formState.potty}
              >
                Submit
              </button>
            </div>

            {/* <div className="button-container">
            <a className="waves-effect waves-light btn delete doggie" id="27" data-v_id="14" type="button">Delete</a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="col s12 m4 l2"></div>
    </div>
  );
}

export default SingleDog;