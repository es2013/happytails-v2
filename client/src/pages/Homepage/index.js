import React from 'react';

import Hero from '../../components/Hero';
import TableAm from '../../components/TableAm';
import UserMessage from '../../components/UserMessage';

function Homepage() {

    return (
        <div className="homepage-container">
        <Hero />
        <h2>Hello Folks!</h2>
        <UserMessage />
        <TableAm/>
        </div>
    )
};

export default Homepage;

