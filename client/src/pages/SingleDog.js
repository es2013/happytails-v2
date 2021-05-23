import React from 'react';
// import { useMutation, useState } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";

function SingleDog() {
    // boilerplate state setup for updateDog
    // const [formState, setFormState] = useState({ walk: '', potty_break: '' })
    // const [updateDog, { error }] = useMutation(UPDATE_DOG);

    // const handleFormSubmit = async event => {
    //   event.preventDefault();
    //   try {
    //     const mutationResponse = await updateDog({ variables: { walk: formState.walk, potty_break: formState.potty_break } })
    //     // const token = mutationResponse.data.login.token;
    //     // Auth.login(token);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    // const handleChange = event => {
    //   const { name, value } = event.target;
    //   setFormState({
    //     ...formState,
    //     [name]: value
    //   });
    // };

    // console.log("here");

  // const handleFormSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await updateDog({ variables: { walk: formState.walk, potty_break: formState.potty_break } })
  //     // const token = mutationResponse.data.login.token;
  //     // Auth.login(token);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value
  //   });
  // };

  // console.log("here");

  return (
    <div className="row">
      <div className="col s12 m4 l2"></div>

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

              <div className="button-container">
                <a
                  className="waves-effect waves-light btn delete doggie"
                  id="27"
                  data-v_id="14"
                  type="button"
                >
                  Delete
                </a>
              </div>
            </br>
          </div>
        </div>
      </div>
      <div className="col s12 m4 l2"></div>
    </div>
  );
}

export default SingleDog;
