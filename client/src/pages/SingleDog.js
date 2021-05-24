import React, { useEffect } from 'react';
import { useMutation, useState, useQuery } from '@apollo/react-hooks';
import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
// this query has not be created yet so naming may change
// import { GET_DOG } from '../utils/queries';

function SingleDog() {
    // boilerplate state setup for updateDog
    const [formState, setFormState] = useState({ walk: '', potty_break: '' })
    const [updateDog, { error }] = useMutation(UPDATE_DOG);

    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await updateDog({ variables: { walk: formState.walk, potty_break: formState.potty_break } })
        // const token = mutationResponse.data.login.token;
        // Auth.login(token);
      } catch (error) {
        console.log(error)
      }
    };

    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };

    // console.log("here");
    const canine_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const dogIdParam = async (canine_id) => {
        // useQuery(GET_DOG);
    }

    // research useEffect()
    useEffect(dogIdParam, []);

    return (
        <div className="row">
            <div className="col s12 m4 l2"></div>

            <div className="col s12 m4 l8 center">
                <div className="card z-depth-2">
                    <div className="card-content">
                        <h3 className="doggy-name flow-text">Apollo</h3>
                        <img className="single-dog-image" src="/images/dogs/Apollo.jpg" alt="Apollo" width="400" heigh="auto" />
                    </div>

                    {/* <!-- Check boxes for the user to check/uncheck to update a dog's activity status --> */}
                    <div className="card-action">
                        <p className="flow-text">Please check the activities that have been completed</p>

                        <label className="check activity-checkbox">
                            <input type="checkbox" className="filled-in" id="potty-check" checked="" />
                            <span className="flow-text">Potty</span>
                        </label>

                        <label className="check activity-checkbox">
                            <input type="checkbox" className="filled-in" id="walk-check" checked="" />
                            <span className="flow-text">Walk</span>
                        </label>


                        <br></br>
                        <div className="button-container">
                            <a className="waves-effect waves-light btn doggie-update-submit" id="27" data-v_id="14" type="submit">Submit</a>
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
};


export default SingleDog;