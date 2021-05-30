import React from 'react';

function AdminMessage( {canineCount} ) {
    return (
        <h3 className="flow-text speech-bubble">
            There are currently {canineCount} dogs in the shelter. 🐶
        </h3>
    );
};


export default AdminMessage;