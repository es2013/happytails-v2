import React from 'react';
import { Link } from 'react-router-dom';


function Filters() {


    return (
        // in Happy Tails 1.0 we have a conditional to render AM or PM filters.  perhaps we can use props for this?
        <div>
            <ul id='dropdown1' className='dropdown-content'>
                <li id="need-walk-am"><Link to="#!">See dogs that need walks</Link></li>
                <li id="need-potty-am"><Link to="#!">See dogs that need a potty break</Link></li>
                <li className="divider" tabIndex="-1"></li>
                <li id="have-walked-am"><Link to="#!">See dogs who have walked</Link></li>
                <li id="have-potty-am"><Link to="#!">See dogs who have gone potty</Link></li>
                <li className="divider" tabIndex="-1"></li>
                <li id="all-happy-am"><Link to="#!">See all happy tails</Link></li>
                <li id="all-sad-am"><Link to="#!">See all sad tails</Link></li>
            </ul>
        </div>
    );
}

export default Filters;