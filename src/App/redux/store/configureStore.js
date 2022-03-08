import {createStore, applyMiddleware, compose} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
//REDUCERS
import LoginReducer from '../reducers/LoginReducer';
import PilotReducer from '../reducers/PilotReducer';
import GuestReducer from '../reducers/GuestReducer';
import FavoriteReducer from '../reducers/FavoriteReducer';

const config = {
  key: 'REDUX_STORE',
  storage: AsyncStorage,
  whitelist: ['PilotReducer', 'LoginReducer', 'FavoriteReducer'],
};
let debugWrapper = data => data;

if (__DEV__) {
  debugWrapper = composeWithDevTools({realtime: true, port: 8081});
}

const rootReducer = persistCombineReducers(config, {
  PilotReducer,
  LoginReducer,
  GuestReducer,
  FavoriteReducer,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    debugWrapper(compose(applyMiddleware(thunk))),
  );
};

export default configureStore;
