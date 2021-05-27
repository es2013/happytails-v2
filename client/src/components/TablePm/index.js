import React from 'react';
import dogImage from '../../images/bulldog-favicon-trans-bg.png';
import allHelpers from '../../utils/helpers';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

const convertActivity = (activity) => {
  return {
    ...activity,
    timestamp: new Date(Number(activity.timestamp)),
  };
};

function TablePm({ dogData }) {
  const { token } = useAuth();

  return (
    <div className="row s8">
      <h4 className="flow-text">
        <span>
          {' '}
          <img
            className="dog-logo"
            src={dogImage}
            alt="bulldog waiting to walk"
          />{' '}
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
          {/* <DogRow dogData={dogData} timeOfDay="AM" /> */}
          {dogData.map((canine) => {
            // console.log(canine.name, canine.potty, canine.walk)

            let todayPresentPotty = canine.potty.filter(
              (p) =>
                allHelpers.isToday(new Date(Number(p.timestamp))) &&
                allHelpers.isPM(new Date(Number(p.timestamp)))
            );

            let todayPresentWalk = canine.walk.filter(
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
                    todayPresentPotty.length &&
                    todayPresentWalk.length ? (
                      <span className="status-emoji">&#128513;</span>
                    ) : (
                      <span className="status-emoji">&#128549;</span>
                    )}
                    {canine.name}
                  </td>
                  <td>
                    {canine.potty
                      .map(convertActivity)
                      .filter((activity) =>
                        allHelpers.isToday(activity.timestamp)
                      )
                      .filter((activity) => allHelpers.isPM(activity.timestamp))
                      .map((activity) => activity.username)
                      .join(', ')}
                  </td>

                  <td>
                    {canine.walk
                      .map(convertActivity)
                      .filter((activity) =>
                        allHelpers.isToday(activity.timestamp)
                      )
                      .filter((activity) => allHelpers.isPM(activity.timestamp))
                      .map((activity) => activity.username)
                      .join(', ')}
                  </td>
                  <td className="Easy"> {canine.demeanor} </td>
                  <td className="Easy"> {canine.status} </td>
                  <td> {canine.kennel} </td>
                  {token && (
                    <td>
                      <button type="submit" className="btn">
                        <Link
                          to={`/single-dog/${canine._id}`}
                          className="select-dog"
                        >
                          Select
                        </Link>
                      </button>
                    </td>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePm;
