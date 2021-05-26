import React from 'react';
import DogRow from '../DogRow';
import dogImage from '../../images/shiba-inu-logo-trans-bg-min.png';
import './stylesheet.css';

function TablePm({ dogData }) {
  return (
    <div className="row s8">
      <h4 className="flow-text">
        <span>
          <img
            className="dog-logo"
            src={dogImage}
            alt="shiba inu waiting to walk"
          />
        </span>
        PM Shift
      </h4>
      <br />
      <br />

      <table className="striped z-depth-2">
        <thead>
          <tr>
            <th>Doggy Name</th>
            <th>PM Potty Break</th>
            <th>PM Walk</th>
            <th>Doggy Demeanor</th>
            <th>Status</th>
            <th>Kennel</th>
          </tr>
        </thead>
        <tbody>
          <DogRow dogData={dogData} timeOfDay="PM" />
        </tbody>
      </table>
    </div>
  );
}

export default TablePm;
