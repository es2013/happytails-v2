import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import allHelpers from '../../utils/helpers';

const convertActivity = (activity) => {
  return {
    ...activity,
    timestamp: new Date(Number(activity.timestamp)),
  };
};

function DogRow(props) {
  //const { token } = useAuth();

  // Returns true if PM
  const renderPM = props.timeOfDay === 'PM';

  return (
    <>
      {props.dogData.map((canine) => {
        //console.log(canine.name, canine.potty.length, canine.walk.length)

        let todayPresentPottyAM = canine.potty.filter(
          (p) =>
            allHelpers.isToday(new Date(Number(p.timestamp))) &&
            allHelpers.isPM(new Date(Number(p.timestamp))) === false
        );

        let todayPresentWalkAM = canine.walk.filter(
          (p) =>
            allHelpers.isToday(new Date(Number(p.timestamp))) &&
            allHelpers.isPM(new Date(Number(p.timestamp))) === false
        );

        let todayPresentPottyPM = canine.potty.filter(
          (p) =>
            allHelpers.isToday(new Date(Number(p.timestamp))) &&
            allHelpers.isPM(new Date(Number(p.timestamp)))
        );

        let todayPresentWalkPM = canine.walk.filter(
          (p) =>
            allHelpers.isToday(new Date(Number(p.timestamp))) &&
            allHelpers.isPM(new Date(Number(p.timestamp)))
        );

        

        return (
          <>
            <tr>
              <td className={`$canine.demeanor`}>
                {canine.potty.length !== 0 &&
                canine.walk.length !== 0 &&
                todayPresentPottyAM.length &&
                todayPresentWalkAM.length ? (
                  <span className="status-emoji">H</span>
                ) : canine.potty.length !== 0 &&
                  canine.walk.length !== 0 &&
                  todayPresentPottyPM.length &&
                  todayPresentWalkPM.length ? (
                  <span className="status-emoji">H</span>
                ) : (
                  <span className="status-emoji">&#128549;</span>
                )}
                {canine.name}
              </td>
              <td>
                {canine.potty
                  .map(convertActivity)
                  .filter((activity) => allHelpers.isToday(activity.timestamp))
                  .filter(
                    (activity) =>
                      allHelpers.isPM(activity.timestamp) === renderPM
                  )
                  .map((activity) => activity.username)
                  .join(', ')}
              </td>

              <td>
                {canine.walk
                  .map(convertActivity)
                  .filter((activity) => allHelpers.isToday(activity.timestamp))
                  .filter(
                    (activity) =>
                      allHelpers.isPM(activity.timestamp) === renderPM
                  )
                  .map((activity) => activity.username)
                  .join(', ')}
              </td>
              <td className="Easy"> {canine.demeanor} </td>
              <td className="Easy"> {canine.status} </td>
              <td> {canine.kennel} </td>
              {/* {token && ( */}
              <td>
                <button type="submit" className="btn">
                  <Link to={`/single-dog/${canine._id}`} className="select-dog">
                    Select
                  </Link>
                </button>
              </td>
              {/* )} */}
            </tr>
          </>
        );
      })}
    </>
  );
}

export default DogRow;
