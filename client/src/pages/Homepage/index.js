import React from 'react';

import Hero from '../../components/Hero';
import UserMessage from '../../components/UserMessage';

function Homepage() {

    return (
        <div className="homepage-container">
        <Hero />
        <h2>Hello Folks!</h2>
        <UserMessage />
        </div>
    )
};

export default Homepage;

