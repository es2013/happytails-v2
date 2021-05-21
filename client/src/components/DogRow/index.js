// create a dog row component to insert into tables conditionally
import React from 'react';
import "./stylesheet.css";

function DogRow() {

    return (
        <tr>
            <td className="Easy"> <span className="status-emoji">😞</span>Belle </td>
            <td> </td>
            <td> </td>
            <td className="Easy"> Easy </td>
            <td> Unleashed </td>

            <td><button type="submit" className="waves-effect  btn"><a href="/dashboard/edit/26" className="select-dog">Select</a></button></td>
        </tr>
    );
};

export default DogRow;