import React from "react"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SEE_ALL_DOGS = 'See all dogs'
const SEE_ALL_EASY_DOGS = 'See all easy dogs'

const options = [
  SEE_ALL_DOGS,
  SEE_ALL_EASY_DOGS
];

const defaultOption = options[0];

function Filters({ dogData, setDogData }) {
  const handleChange = ({ value }) => {
    switch(value){
      case SEE_ALL_EASY_DOGS:
        setDogData(dogData.filter(d => d.demeanor === "Friendly"))
        break;
      case SEE_ALL_DOGS:
      default:
        setDogData(dogData)
    }
  }

  return <Dropdown options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />;

}

export default Filters