import React from 'react';

import Hero from '../components/Hero';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';

function Homepage() {

    // do we need to pass state in homepage? I think all that data would be already rendered in our table components..

    return (
        <div className="container homepage-container">
            <Hero />

            <UserMessage />

            <TableAm />

            <TablePm />
        </div>
    )
};

export default Homepage;

