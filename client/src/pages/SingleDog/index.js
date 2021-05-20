import React from 'react';


function SingleDog() {

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

                        <label className="check">
                            <input type="checkbox" className="filled-in" id="potty-check" checked="" />
                            <span className="flow-text">Potty</span>
                        </label>

                        <label className="check">
                            <input type="checkbox" className="filled-in" id="walk-check" checked="" />
                            <span className="flow-text">Walk</span>
                        </label>

                        <br>

                            <div className="button-container">
                                <a className="waves-effect waves-light btn doggie" id="27" data-v_id="14" type="submit">Submit</a>
                            </div>

                            <div className="button-container">
                                <a className="waves-effect waves-light btn delete doggie" id="27" data-v_id="14" type="button">Delete</a>
                            </div>
                        </br>
                    </div>
                </div>
            </div>
            <div className="col s12 m4 l2"></div>
        </div>
    );
};


export default SingleDog;