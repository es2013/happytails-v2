import React from 'react';
import { Link } from 'react-router-dom';

function Filters() {
  return (

    <div>
    <a class="dropdown-trigger btn" href="#" data-target="dropdown1">Additional Filters ⬇</a>
    <ul id="dropdown1" className="dropdown-content">
      <li id="see-add-dogs"><Link to="#!">See all dogs</Link></li>
      <li className="divider" tabIndex="-1"></li>
      <li id="see-easy-dogs"><Link to="#!">See all easy dogs</Link></li>
      <li id="see-moderate-dogs"><Link to="#!">See all moderate dogs</Link></li>
      <li id="see-difficult-dogs"><Link to="#!">See all difficult dogs</Link></li>
      <li className="divider" tabIndex="-1"></li>
      <li id="see-not-walk-dogs"><Link to="#!">See dogs that need walks</Link></li>
      <li id="see-not-potty-dogs"><Link to="#!">See dogs that need a potty break</Link></li>
      <li className="divider" tabIndex="-1"></li>
      <li id="see-walked-dogs"><Link to="#!">See dogs who have walked</Link></li>
      <li id="see-gone-potty-dogs"><Link to="#!">See dogs who have gone potty</Link></li>
      <li className="divider" tabIndex="-1"></li>
      <li id="see-happy-dogs"><Link to="#!">See all happy tails</Link></li>
      <li id="see-sad-dogs"><Link to="#!">See all sad tails</Link></li>
    </ul>
    </div>
  );
};

export default Filters;
