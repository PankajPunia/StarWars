import {
  SET_STARSHIPS,
  SET_PILOT_DETAIL,
  ERROR_PILOT_DETAIL,
  ERROR_STARSHIPS,
  SET_SEARCH_DIRECTORY
} from '../constants';

const initialState = {
  errorMessage: '',
  starShips: [],
  pilots: [],
};

const PilotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        starShips: action?.payload,
      };
    case ERROR_STARSHIPS:
      return {
        ...state,
        errorMessage: action?.payload,
      };
    case SET_PILOT_DETAIL:
      const updatedPilots = addStarshipDetailsToPilots(
        state?.starShips,
        action?.payload,
      );
      return {
        ...state,
        pilots: updatedPilots,
      };
    case ERROR_PILOT_DETAIL:
      return {
        ...state,
        errorMessage: action?.payload,
      };
    case SET_SEARCH_DIRECTORY:
      return {
        ...state,
        searchDirectory: action?.payload,
      };
    default:
      return state;
  }
};

//HELPERS
//Updating Pilots data with starships details [{starshipName, starshipClass}]
const addStarshipDetailsToPilots = (starShips, pilots) => {
  let starShipDetail = [];
  pilots?.forEach(pilot => {
    pilot?.starships?.forEach(url => {
      for (const starShip of starShips) {
        if (starShip?.url === url) {
          const starShipData = {
            starshipName: starShip?.name,
            starshipClass: starShip?.starship_class,
          };
          starShipDetail.push(starShipData);
          pilot.starShipDetail = starShipDetail;
          break;
        }
      }
    });
    starShipDetail = [];
  });
  return pilots;
};

export default PilotReducer;
