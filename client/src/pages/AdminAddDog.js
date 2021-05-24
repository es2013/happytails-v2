import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CANINE } from '../utils/mutations';
import Select from 'react-select';
import { ValuesOfCorrectTypeRule } from 'graphql';
import { useHistory } from 'react-router-dom';


function NewDog(props) {
  const [formState, setFormState] = useState({ name: '', kennel: '', status:'', demeanor:'' });
  const [addDog] = useMutation(ADD_CANINE);
  const history = useHistory();

  const kennelOptions = [
    { value: 'Camp Bowwow', label: 'Camp Bowwow' },
    { value: 'Princess Castle', label: 'Princess Castle' },
    { value: 'Pawty Haus', label: 'Pawty Haus' },
    { value: 'Caberet', label: 'Caberet' },
    { value: 'Dioji', label: 'Dioji'},
    { value: 'Chiquita Banana', label: 'Chiquita-Banana'},
    { value: 'HappyTails', label: 'HappyTails'},
    { value: 'Playpen', label: 'Playpen'},
    { value: 'Bullpen', label: 'Bullpen'},

  ];

  const demeanorOptions = [
    { value: 'Easy', label: 'Easy', default: 'Easy' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Difficult', label: 'Difficult' },
  ];
  const statusOptions = [
    { value: 'Resident' , label: 'Resident' },
    { value: 'In Foster', label: 'In Foster' },
    { value: 'Adopted' , label: 'Adopted' },
  ];
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDog({
      variables: {
        name: formState.name,
        kennel: formState.kennel,
        demeanor: formState.demeanor,
        status: formState.status,
      }
    });
    history.push('/');
  }

function handleInputChange(event)  {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
    console.log(event)

  };

  const handleKennelChange = (value) => {
    setFormState({...formState, 
      ['kennel']: value.value})
    }
    const handleDemeanorChange = (value) => {
      setFormState({...formState, 
        ['demeanor']: value.value})
      }
      const handleStatusChange = (value) => {
        setFormState({...formState, 
          ['status']: value.value})
        }

  return (
    <div className="container my-1 btn-adddog">
      <h2>Add a Dog</h2>

      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary">Dog Name:</label>
            <input
              className="input"
              placeholder="Name"
              name="name"
              type="text"
              id="name"
             onChange={handleInputChange}
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
            <label className="input-title-secondary">Kennel:</label>
            <Select class="select" options={kennelOptions} onChange={handleKennelChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary">Demeanor:</label>
            <Select class="select" options={demeanorOptions} onChange={handleDemeanorChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label className="input-title-secondary">Status</label>
            <Select class="select" options={statusOptions} onChange={handleStatusChange} />
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
