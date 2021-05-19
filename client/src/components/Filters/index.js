import React from 'react';


function Filters() {


    return (
        // in Happy Tails 1.0 we have a conditional to render AM or PM filters.  perhaps we can use props for this?

        <ul id='dropdown1' class='dropdown-content'>
            <li id="need-walk-am"><a href="#!">See dogs that need walks</a></li>
            <li id="need-potty-am"><a href="#!">See dogs that need a potty break</a></li>
            <li class="divider" tabindex="-1"></li>
            <li id="have-walked-am"><a href="#!">See dogs who have walked</a></li>
            <li id="have-potty-am"><a href="#!">See dogs who have gone potty</a></li>
            <li class="divider" tabindex="-1"></li>
            <li id="all-happy-am"><a href="#!">See all happy tails</a></li>
            <li id="all-sad-am"><a href="#!">See all sad tails</a></li>
        </ul>
    );
}

export default Filters;