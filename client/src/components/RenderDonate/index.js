import React from 'react';
import './stylesheet.css';
import happyDoggo from '../../images/happy-doggo-on-walk.jpg';


function RenderDonate() {
  return (
    <section>
      <div className="row">
        <div className="col s12 m center">
          <div className="speech-bubble">
            <p className="donatetext">
              Make a donation today to help our furry friends at the Santa Barbara County Animal Services get the
              love they deserve and make some happy tails!  Any amount is enough, we appreciate your generosity.
              🐶
            </p>
            <a className="donatelink" href="https://licensepet.com/wl3/don/snbrwd/436" target="_blank">
              Click here to Donate today🐶{' '}
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m center">
          <img className="happy-doggo image-border" src={happyDoggo}></img>
        </div>
      </div>
    </section>


  );
}

export default RenderDonate;
