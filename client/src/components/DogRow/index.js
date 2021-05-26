import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import allHelpers, { happyTail } from '../../utils/helpers';

const convertActivity = (activity) => {
  return {
    ...activity,
    timestamp: new Date(Number(activity.timestamp)),
  };
};

function DogRow(props) {
  //const { token } = useAuth();

  // creating Ref to change the status emoji
  class statusEmoji extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the span DOM element
      this.span = React.createRef();
      this.changeEmoji = this.changeEmoji.bind(this);
    }

    // should this be in helpers?
    happyTail(props) {
      // pass dog activity data to check if potty and / or walk activity in AM has been recorded
      
      // PREVIOUS LOGIC 

      // let has_potty_am;
      // let has_walk_am;

      // // check for potty
      // if (props.potty && !isPM) {
      //   // should this return true?
      //   let has_potty_am = true;
      // }

      // // check for walk
      // if (props.walk && !isPM) {
      //   // should this return true? 
      //   let has_walk_am = true;
      // }

      // // if both conditions are true, return true
      // if (has_potty_am && has_walk_am) {
      //   return true
      // }

      // NEW LOGIC
      // if both conditions are true, return true.  I think there is no need to check isPM
      if (props.potty && props.walk) {
        return true
      }
    }

    emojiChange() {
      if (happyTail) {
        // Explicitly focus the span value using the raw DOM API
        this.changeEmoji.current.value = "😄"
      }
    }

    render() {
      // tell React that we want to associate the <span> ref
      // with the `emojiChange` that we created in the constructor
      return (
        <span className="status-emoji">{this.emojiChange}</span>
      );
    }
  }

  // Returns true if PM
  const renderPM = props.timeOfDay === 'PM';

  return (
    <>
      {props.dogData.map((canine) => {
        return (
          <>
            <tr>
              <td className={`$canine.demeanor`}>
                {' '}
                <span className="status-emoji">😞</span>
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
