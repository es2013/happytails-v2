import React from 'react';
import DogRow from '../DogRow';

function TablePm() {

    return (

        // <h4 class="flow-text"><span><img class="dog-logo" src="/images/shiba-inu-logo.png" alt="shiba inu waiting to walk"></span>PM Shift</h4>

        <table className="striped z-depth-2">
            <thead>
                <tr>
                    <th>Doggy Name</th>
                    <th>PM Potty Break</th>
                    <th>PM Walk</th>
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

export default TablePm;