import {SET_GUEST_USER} from '../constants';

const initialState = {};

const GuestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUEST_USER:
      return {
        ...state,
        isGuestUser: action?.payload,
      };
    default:
      return state;
  }
};

export default GuestReducer;
