import {
  SET_STARSHIPS,
  SET_PILOT_DETAIL,
  ERROR_PILOT_DETAIL,
  ERROR_STARSHIPS,
} from '../constants';
import axios from 'axios';
import domain from '../../../utils/apiDomain';


const STARSHIPS = 'pilots';
const PILOTS = 'starships';

//Recursive function to get all the data from paginated API

const getPaginatedData = async ({url, data, actionType}) => {
  try {
    let newData = data ? data : [];
    const resp = await axios.get(url);

    //Refining incoming data to remove pilots that doesn't have starships
    //or remove starships that doesn't have pilots
    const filterData = resp?.data?.results?.filter(
      obj => obj?.[actionType]?.length > 0,
    );
    newData.push(...filterData);

    const next = resp.data.next;
    if (next !== null) {
      return getPaginatedData({url: next, data: newData, actionType});
    }
    return newData;
  } catch (e) {
    console.log(e);
  }
};

export const getStarships = () => {
  return dispatch => {
    getPaginatedData({
      url: `${domain}/starships`,
      actionType: STARSHIPS,
    })
      .then(resp => dispatch(setStarships(resp)))
      .catch(e => dispatch(errorStarships(e)));
  };
};

export const setStarships = data => {
  return {
    type: SET_STARSHIPS,
    payload: data,
  };
};

export const errorStarships = error => {
  return {
    type: ERROR_STARSHIPS,
    payload: error,
  };
};

export const getPilotDetail = () => {
  return dispatch => {
    getPaginatedData({
      url: `${domain}/people`,
      actionType: PILOTS,
    })
      .then(resp => dispatch(setPilotDetail(resp)))
      .catch(e => dispatch(errorPilotDetail(e)));
  };
};

export const setPilotDetail = data => {
  return {
    type: SET_PILOT_DETAIL,
    payload: data,
  };
};

export const errorPilotDetail = error => {
  return {
    type: ERROR_PILOT_DETAIL,
    payload: error,
  };
};
