import React from 'react';

import Hero from '../components/Hero';
import TableAm from '../components/TableAm';
import TablePm from '../components/TablePm';
import UserMessage from '../components/UserMessage';

function Homepage() {

    return (
        <div className="container">
            <Hero />

            <UserMessage />

            <TableAm />

            <TablePm />
        </div>
    )
};

export default Homepage;

