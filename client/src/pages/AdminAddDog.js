import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DOG_WITH_IMAGE } from '../utils/mutations';
import Select from 'react-select';
import { useAuth } from '../utils/GlobalState';

function NewDog(props) {
  const { isAdmin } = useAuth();

  const [formState, setFormState] = useState({
    name: '',
    kennel: '',
    status: '',
    demeanor: '',
    image: undefined,
  });

  const [uploadImage] = useMutation(ADD_DOG_WITH_IMAGE);

  const kennelOptions = [
    { value: 'All-Star', label: 'All-Star' },
    { value: 'Bark Bud', label: 'Bark Bud' },
    { value: 'Bestie', label: 'Bestie' },
    { value: 'Better Bark', label: 'Better Bark' },
    { value: 'Bullpen', label: 'Bullpen' },
    { value: 'Caberet', label: 'Caberet' },
    { value: 'Camp Bowwow', label: 'Camp Bowwow' },
    { value: 'Chiquita Banana', label: 'Chiquita-Banana' },
    { value: 'Crate Escape', label: 'Crate Escape' },
    { value: 'De Treats', label: 'De Treats' },
    { value: 'Dioji', label: 'Dioji' },
    { value: 'Doggie Town', label: 'Doggie Town' },
    { value: 'DogTopia', label: 'DogTopia' },
    { value: 'DogVenture', label: 'DogVenture' },
    { value: 'Happy Tails', label: 'Happy Tails' },
    { value: 'Paw Pal', label: 'Paw Pal' },
    { value: 'Pawsome', label: 'Pawsome' },
    { value: 'Pawty Haus', label: 'Pawty Haus' },
    { value: 'Playpen', label: 'Playpen' },
    { value: 'Princess Castle', label: 'Princess Castle' },
    { value: 'Queens Castle', label: 'Queens Castle' },
    { value: 'Royal Palace', label: 'Royal Palace' },
    { value: 'Ruff Line', label: 'Ruff Line' },
    { value: 'Slobbery', label: 'Slobbery' },
    { value: 'Tall Tails', label: 'Tall Tails' },
    { value: 'The Four Paws', label: 'The Four Paws' },
    { value: 'The Good Life', label: 'The Good Life' },
    { value: 'Unleashed', label: 'Unleashed' },
    { value: 'Wag Zone', label: 'Wag Zone' },
    { value: 'Woody Gang', label: 'Woody Gang' },
    { value: 'Woof Woof', label: 'Woof Woof' },
  ];

  const demeanorOptions = [
    { value: 'Easy', label: 'Easy', default: 'Easy' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Difficult', label: 'Difficult' },
  ];
  const statusOptions = [
    { value: 'Resident', label: 'Resident' },
    { value: 'In Foster', label: 'In Foster' },
    { value: 'Adopted', label: 'Adopted' },
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // TODO: validate that all forms fields are filled in

    const mutationResponse = await uploadImage({
      variables: {
        file: formState.image,
        name: formState.name,
        kennel: formState.kennel,
        demeanor: formState.demeanor,
        status: formState.status,
      },
    });
    
    // In order for the updated info to show up on the Dashboard, we
    // to use window.location to do a hard refresh
    window.location = '/admin-dashboard';
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleKennelChange = (value) => {
    setFormState({ ...formState, ['kennel']: value.value });
  };
  const handleDemeanorChange = (value) => {
    setFormState({ ...formState, ['demeanor']: value.value });
  };
  const handleStatusChange = (value) => {
    setFormState({ ...formState, ['status']: value.value });
  };

  const onImageChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      setFormState({ ...formState, image: file });
    }
  };

  return (
    <div className="container my-1 btn-adddog">
      {isAdmin && <h2>Add a Dog</h2>}
      {!isAdmin && <h3>You are not an admin!</h3>}

      {isAdmin && (
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
              <Select
                class="select"
                options={kennelOptions}
                onChange={handleKennelChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <br />
              <label className="input-title-secondary">Demeanor:</label>
              <Select
                class="select"
                options={demeanorOptions}
                onChange={handleDemeanorChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <br />
              <label className="input-title-secondary">Status</label>
              <Select
                class="select"
                options={statusOptions}
                onChange={handleStatusChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <br />
              <label className="input-title-secondary">
                Upload an image for your dog:
              </label>
              &nbsp;&nbsp;&nbsp;
              <input name="image" type="file" onChange={onImageChange} />
            </div>
            <div className="flex-row flex-end">
              <br />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewDog;
