import {
  SET_STARSHIPS,
  SET_PILOT_DETAIL,
  ERROR_PILOT_DETAIL,
  ERROR_STARSHIPS,
  SET_SEARCH_DIRECTORY,
} from '../constants';
import axios from 'axios';
import domain from '../../../utils/apiDomain';
import {flattenDeep} from 'lodash';

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

export const getPilotDetail = () => async dispatch => {
  try {
    const resp = await getPaginatedData({
      url: `${domain}/people`,
      actionType: PILOTS,
    });
    dispatch(setPilotDetail(resp)).then(() => {
      dispatch(makeSearchDirectory());
    });
  } catch (error) {
    dispatch(errorPilotDetail(e));
  }
};

export const setPilotDetail = data => dispatch => {
  dispatch({type: SET_PILOT_DETAIL, payload: data});
  return Promise.resolve();
};

export const errorPilotDetail = error => {
  return {
    type: ERROR_PILOT_DETAIL,
    payload: error,
  };
};

export const makeSearchDirectory = () => {
  return (dispatch, getState) => {
    const state = getState();
    const pilots = state?.PilotReducer?.pilots;
    const searchDirectory = createSearchDirectory(pilots);
    return dispatch({type: SET_SEARCH_DIRECTORY, payload: searchDirectory});
  };
};

//Helpers
// Creating a search directory Array that includes ["Name", "Gender", "StarshipName", "StarshipClass"]
// Converting all the keyword to lowercase ["name", "gender", "starshipName", "starshipClass"]
const createSearchDirectory = (pilots = []) => {
  return pilots
    ?.map(pilot => {
      return [
        ...pilot?.name?.split(' '),
        ...pilot?.gender?.split(' '),
        ...flattenDeep(
          pilot?.starShipDetail?.map(starship =>
            starship?.starshipName?.split(' '),
          ),
        ),
        ...flattenDeep(
          pilot?.starShipDetail?.map(starship =>
            starship?.starshipClass?.split(' '),
          ),
        ),
      ];
    })
    .map(pilot => pilot?.map(string => string?.toLowerCase()));
};
