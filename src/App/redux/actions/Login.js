import {SET_GUEST_USER, SET_LOGIN, SET_LOGOUT} from '../constants';

export const setLogin = () => {
  return {
    type: SET_LOGIN,
  };
};
export const setGuestUser = (isGuest = true) => {
  return {
    type: SET_GUEST_USER,
    payload: isGuest,
  };
};

export const setLogout = () => {
  return {
    type: SET_LOGOUT,
  };
};
