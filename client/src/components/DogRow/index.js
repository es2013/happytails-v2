import React from 'react';
import { Link } from 'react-router-dom';
// import { useMutation, useState } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
import './stylesheet.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../../utils/queries';
function DogRow() {
  const { data } = useQuery(GET_DOGS);
  console.log('GET_DOGS:', data);
  let dog;
  if (data) {
    dog = data.canines;
    console.log(dog);
  }
  return (
    <>
      {dog
        ? dog.map((canine) => {
            return (
              <>
                <tr>
                  <td className="${canine.demeanor}">
                    {' '}
                    <span className="status-emoji">&#128549;</span>
                    {canine.name}
                  </td>
                  <td> </td>
                  <td> </td>
                  <td className="Easy"> {canine.demeanor} </td>
                  <td className="Easy"> {canine.status} </td>
                  <td> {canine.kennel} </td>
                  <td>
                    <button type="submit" className="btn">
                      <Link
                        to={`/single-dog/${canine._id}`}
                        className="select-dog"
                      >
                        Select
                      </Link>
                    </button>
                  </td>
                </tr>
                {/*
                 */}
              </>
            );
          })
        : null}
    </>
  );
}
export default DogRow;
