import React from 'react';
import './stylesheet.css';

function Donate() {
  return (
    <div className="card" style="width: 18rem;">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Donate to our Fury Friends</h5>
        <p className="card-text">
          Making a small donation today will help our fury friends get the love they deserve and allow them to continue having happy tails 🐶.
        </p>
        <a href="https://licensepet.com/wl3/don/snbrwd/436" className="btn btn-primary">
          Go Donate
        </a>
      </div>
    </div>
  );
}

export default Donate;