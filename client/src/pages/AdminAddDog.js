import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { ADD_DOG } from '../utils/mutations';
import Select from 'react-select';


function NewDog(props) {
  const [formState, setFormState] = useState({ name: '', kennel: '' });
  const [addDog, { error }] = useMutation(ADD_DOG);
  const kennelOptions = [
      {value: 1, label: "Camp Bowwow"}, 
      {value: 2, label:"Princess Castle"},
      {value:3, baleb: "Pawty Haus"},
      {value:4, label: "Caberet"},
      {value: 5, label: "Dioji"}
  ]

  const demeanorOptions = [
    {value: 1, label: "Easy"}, 
    {value: 2, label:"Medium"},
    {value:3, baleb: "Hard"}
]
const statusOptions = [
    {value: 1, label: "Resident"}, 
    {value: 2, label:"in Foster"},
    {value:3, baleb: "Adopted"}
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
            <label className="input-title-secondary" >
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
            <Select options={kennelOptions} />

        
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary">
              Demeanor:
            </label>
            <Select options={demeanorOptions} />

          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary" >
                Status 
            </label>
            <Select options={statusOptions} />
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
