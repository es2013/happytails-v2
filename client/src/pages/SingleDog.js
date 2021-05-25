import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Auth from '../utils/auth';
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
// this query has not be created yet so naming may change
import { GET_DOG } from '../utils/queries';

function SingleDog() {
  // boilerplate state setup for updateDog
  const [formState, setFormState] = useState({ walk: '', potty: '', _id: '' });
  const [canine_id, setCanine_id] = useState('60ac815a839e6a3c5042c4bc');

  console.log(GET_DOG);

  const { loading, error, data } = useQuery(GET_DOG, {
    variables: {
      _id: canine_id,
    },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // useEffect(() => {
  //     console.log('useEffect ran');
  //     console.log(window.location.toString().split('/')[
  //         window.location.toString().split('/').length - 1
  //     ]);

  // }, []);

  return (
    <div className="row">
      <div className="col s12 m4 l2"></div>

      <div className="col s12 m4 l8 center">
        <div className="card z-depth-2">
          <div className="card-content">
            <h3 className="doggy-name flow-text">Apollo</h3>
            <img
              className="single-dog-image"
              src="/images/dogs/Apollo.jpg"
              alt="Apollo"
              width="400"
              heigh="auto"
            />
          </div>

          {/* <!-- Check boxes for the user to check/uncheck to update a dog's activity status --> */}
          <div className="card-action">
            <p className="flow-text">
              Please check the activities that have been completed
            </p>
            <label className="check activity-checkbox">
              <input
                name="potty"
                type="checkbox"
                className="filled-in"
                id="potty-check"
              />
              <span className="flow-text">Potty</span>
            </label>

            <label className="check activity-checkbox">
              <input
                name="walk"
                type="checkbox"
                className="filled-in"
                id="walk-check"
                checked=""
              />
              <span className="flow-text">Walk</span>
            </label>

            <br></br>
            <div className="button-container">
              <a
                className="waves-effect waves-light btn doggie-update-submit"
                id="27"
                data-v_id="14"
                type="submit"
              >
                Submit
              </a>
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
