import React from 'react';
// import { useMutation, useState } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
import "./stylesheet.css";

function DogRow() {

    // boilerplate state setup for updated dog info in dog row.
    // const [formState, setFormState] = useState({ status: '', kennel: '', walk: '', potty_break: '' })
    // const [updateDog, { error }] = useMutation(UPDATE_DOG);

    // const handleFormSubmit = async event => {
    //     event.preventDefault();
    //     try {
    //         const mutationResponse = await updateDog({ variables: { status: formState.status, kennel: formState.kennel, walk: formState.walk, potty_break: formState.potty_break } })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // const handleChange = event => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     });
    // };

    // console.log("here");

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