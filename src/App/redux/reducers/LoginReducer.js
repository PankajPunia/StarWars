import {SET_LOGIN} from '../constants';

const initialState = {};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      let RandomNumber = Math.floor(Math.random() * 1000000);
      return {
        ...state,
        accessToken: RandomNumber,
      };
    default:
      return state;
  }
};

export default LoginReducer;
