import React from 'react';
import './stylesheet.css';


function RenderDonate() {
  return (
    
    <div className="row ">
    <div className="col s12 m3 ">
      <div className="card ">
        <div className="card-image">
        <img
                src={require("../../images/doggie.png").default}
                className="card-img-top"
                alt="happy-tails-project"
              />
          <p className="card-title">Going to the Moon!</p>
        </div>
        <div className="card-content">
          <p className="donateP">Making a small donation today will help our fury friends get the love they deserve and allow them to continue having happy tails 🐶.</p>
        </div>
        <div className="card-action">
          <a href="https://licensepet.com/wl3/don/snbrwd/436">Click here to Donate today🐶 </a>
        </div>
      </div>
    </div>
  </div>

  );
}

export default RenderDonate;