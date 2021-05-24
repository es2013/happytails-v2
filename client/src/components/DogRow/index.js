import React from 'react';
// import { useMutation, useState } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
import './stylesheet.css';

import { useAuth } from '../../utils/GlobalState';

function DogRow({ dogData }) {
  const { token } = useAuth();

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
    <>
      {dogData
        ? dogData.map((canine) => {
            return (
              <tr>
                <td className="Easy">
                  {' '}
                  <span className="status-emoji">😞</span>
                  {canine.name}
                </td>
                <td> </td>
                <td> </td>
                <td className="Easy"> {canine.demeanor} </td>
                <td> {canine.kennel} </td>
                {token && (
                  <td>
                    <button type="submit" className="btn">
                      <a href="/dashboard/edit/26" className="select-dog">
                        Select
                      </a>
                    </button>
                  </td>
                )}
              </tr>
            );
          })
        : null}
    </>
  );
}

export default DogRow;
