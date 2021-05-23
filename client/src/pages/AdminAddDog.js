import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { ADD_DOG } from '../utils/mutations';


function NewDog(props) {
  const [formState, setFormState] = useState({ name: '', kennel: '' });
  const [addDog, { error }] = useMutation(ADD_DOG);
  const kennelOptions = [
      "Camp Bowwow", "Princess Castle", "Pawty Haus", "Caberet", "Dioji"
  ]

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDog({
        variables: { ...formState },
      });
      Auth.login(data.addDog.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 btn-adddog">
      <h2>Add a Dog</h2>

      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="firstName">
              Dog Name:
            </label>
            <input
              className="input"
              placeholder="Name"
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
            />
          </div>
          {/* <div className="flex-row space-between my-2">
            <label className="input-title-secondary" htmlFor="kennel">
              Kennel:
            </label>
            <div className="select-container"></div>
            <select className="select-container">
            {kennelOptions.map((kennelOptions) => (
              <option value={kennelOptions.value}>{kennelOptions.value}</option>
            ))}
          </select>
          </div> */}

          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" >
              Kennel:
            </label>
            <input
              className="input"
              placeholder="Enter kennel # 1-12"
              name="kennel"
              type="text"
              id="kennel"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary">
              Demeanor:
            </label>
            <input
              className="input"
              placeholder="Easy Medium Hard"
              name="demeanor"
              id="demeanor"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" >
                Status 
            </label>
            <input
              className="input"
              placeholder="Resident Foster Adopted"
              name="status"
              type="text"
              id="status"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewDog;
