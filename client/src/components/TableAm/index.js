import React from 'react';
import DogRow from '../DogRow';

function TableAm() {

    return (
        // REACT reaallly doesnt like this segment and I am not sure why.
        // <img className="dog-logo" src="/images/bulldog-favicon.png" alt="bulldog waiting to walk"></img>

        // <h4 className="flow-text">AM Shift</h4>
        <table className="striped z-depth-2">
            <thead>
                <tr>
                    <th>Doggy Name</th>
                    <th>AM Potty Break</th>
                    <th>AM Walk</th>
                    <th>Doggy Demeanor</th>
                    <th>Kennel</th>
                </tr>
            </thead>
            <tbody>

                <DogRow />

            </tbody>
        </table>
    );
};


export default TableAm