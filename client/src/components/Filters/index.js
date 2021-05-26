import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './stylesheet.css';
import { Container, Row, Col } from 'react-bootstrap';
import allHelpers from '../../utils/helpers';

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
    name: 'Status',
    items: [
      { value: 'VIEW_ADOPTED_DOGS', label: 'View adopted dogs' },
      { value: 'VIEW_FOSTER_DOGS', label: 'View in-foster dogs' },
      { value: 'VIEW_RESIDENT_DOGS', label: 'View resident dogs' },
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

const defaultOption = options[0];

function Filters({ dogData, setDogData, pmShift }) {
  function isActivityDoneForToday(d, activity) {
    const activitiesInShift = (d[activity] || [])
      .map((a) => ({ ...a, timestamp: new Date(Number(a.timestamp)) }))
      .filter((a) => allHelpers.isPM(a.timestamp) === pmShift);
      
    const latestActivity = activitiesInShift?.[activitiesInShift.length - 1];
    const latestActivityDate = latestActivity?.timestamp;

    return latestActivityDate && allHelpers.isToday(latestActivityDate);
  }

  function hasWalkDone(d) {
    return isActivityDoneForToday(d, 'walk');
  }

  function hasPottyDone(d) {
    return isActivityDoneForToday(d, 'potty');
  }

  function isHappyTails(d) {
    return hasWalkDone(d) && hasPottyDone(d);
  }

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
      case 'VIEW_ADOPTED_DOGS':
        setDogData(dogData.filter((d) => d.status === 'Adopted'));
        break;
      case 'VIEW_FOSTER_DOGS':
        setDogData(dogData.filter((d) => d.status === 'In Foster'));
        break;
      case 'VIEW_RESIDENT_DOGS':
        setDogData(dogData.filter((d) => d.status === 'Resident'));
        break;
      case 'VIEW_WALKED_DOGS':
        setDogData(dogData.filter(hasWalkDone));
        break;
      case 'VIEW_NOT_WALKED_DOGS':
        setDogData(dogData.filter((d) => !hasWalkDone(d)));
        break;
      case 'VIEW_HAS_POTTY_DOGS':
        setDogData(dogData.filter(hasPottyDone));
        break;
      case 'VIEW_NOT_POTTY_DOGS':
        setDogData(dogData.filter((d) => !hasPottyDone(d)));
        break;
      case 'VIEW_HAPPY_TAILS':
        setDogData(dogData.filter(isHappyTails));
        break;
      case 'VIEW_SAD_TAILS':
        setDogData(dogData.filter((d) => !isHappyTails(d)));
        break;
      default:
        setDogData(dogData);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 3 }}></Col>
        <Col md={{ span: 2, offset: 2 }}>
          <Dropdown
            options={options}
            onChange={handleChange}
            value={defaultOption}
            id="drop-down"
          />
        </Col>
        <Col md={{ span: 4, offset: 3 }}></Col>
      </Row>
    </Container>
  );
}

export default Filters;
