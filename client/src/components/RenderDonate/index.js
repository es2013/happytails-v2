import React from 'react';
import './stylesheet.css';


function RenderDonate() {
  return (
    <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
      <div className="col s12 m center">
        <div className="card">
          <div className="card-image">
            <img
              src={require('../../images/doggie.png').default}
              className="card-img-top"
              alt="happy-tails-project"
            />
            {/* <p className="card-title">Going to the Moon!</p> */}
          </div>
          <div className="card-content">
            <p className="donateP">
              Making a small donation today will help our fury friends get the
              love they deserve and allow them to continue having happy tails
              🐶.
            </p>
          </div>
          <div className="card-action">
            <a href="https://licensepet.com/wl3/don/snbrwd/436" target="_blank" rel="noreferrer">
              Click here to Donate today🐶{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderDonate;
