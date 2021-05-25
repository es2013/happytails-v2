import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './stylesheet.css'
import { Container, Row, Col } from 'react-bootstrap';

const options = [
  { value: 'VIEW_ALL_DOGS', label: 'View all dogs' },
  {
    type: 'group',
    name: 'Demeanor',
    items: [
      { value: 'VIEW_EASY_DOGS', label: 'View easy dogs' },
      { value: 'VIEW_MODERATE_DOGS', label: 'View moderate dogs' },
      { value: 'VIEW_DIFFICULT_DOGS', label: 'View difficult dogs' },
    ],
  },
  {
    type: 'group',
    name: 'Walk',
    items: [
      { value: 'VIEW_WALKED_DOGS', label: 'View walked dogs' },
      { value: 'VIEW_NOT_WALKED_DOGS', label: 'View NOT walked dogs' },
    ],
  },
  {
    type: 'group',
    name: 'Potty',
    items: [
      { value: 'VIEW_HAS_POTTY_DOGS', label: 'View has-gone-potty dogs' },
      { value: 'VIEW_NOT_POTTY_DOGS', label: 'View has-NOT-gone-potty dogs' },
    ],
  },
  {
    type: 'group',
    name: 'All Tails',
    items: [
      { value: 'VIEW_HAPPY_TAILS', label: 'View all happy tails' },
      { value: 'VIEW_SAD_TAILS', label: 'View all sad tails' },
    ],
  },
];

// const options = [
//   'first', 'second', 'third'
// ]
const defaultOption = options[0];

function Filters({ dogData, setDogData }) {
  const handleChange = ({ value }) => {
    switch (value) {
      case 'VIEW_EASY_DOGS':
        setDogData(dogData.filter((d) => d.demeanor === 'Easy'));
        break;
      case 'VIEW_MODERATE_DOGS':
        setDogData(dogData.filter((d) => d.demeanor === 'Moderate'));
        break;
      case 'VIEW_DIFFICULT_DOGS':
        setDogData(dogData.filter((d) => d.demeanor === 'Difficult'));
        break;
      case 'VIEW_WALKED_DOGS':
        setDogData(dogData.filter((d) => d.walk.username !== null));
        break;
      case 'VIEW_NOT_WALKED_DOGS':
        setDogData(dogData.filter((d) => d.walk.username === null));
        break;
      case 'VIEW_HAS_POTTY_DOGS':
        setDogData(dogData.filter((d) => d.potty.username !== null));
        break;
      case 'VIEW_NOT_POTTY_DOGS':
        setDogData(dogData.filter((d) => d.potty.username === null));
        break;
      case 'VIEW_HAPPY_TAILS':
        setDogData(
          dogData.filter(
            (d) => d.potty.username !== null && d.walk.username !== null
          )
        );
        break;
      case 'VIEW_SAD_TAILS':
        setDogData(
          dogData.filter(
            (d) => d.potty.username === null || d.walk.username === null
          )
        );
        break;
      default:
        setDogData(dogData);
    };
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 3 }}></Col>
        <Col md={{ span: 2, offset: 2 }}>
          <Dropdown options={options}
                    onChange={handleChange}
                    value={defaultOption}
                    id="drop-down" />
        </Col>
        <Col md={{ span: 4, offset: 3 }}></Col>
      </Row>
    </Container>
  );
};

export default Filters;
