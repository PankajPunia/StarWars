import {createStore, applyMiddleware, compose} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
//REDUX
import LoginReducer from '../reducers/LoginReducer';
import GuestReducer from '../reducers/GuestReducer';

const config = {
  key: 'REDUX_STORE',
  storage: AsyncStorage,
  whitelist: ['LoginReducer'],
};
let debugWrapper = data => data;

if (__DEV__) {
  debugWrapper = composeWithDevTools({realtime: true, port: 8081});
}

const rootReducer = persistCombineReducers(config, {
  LoginReducer,
  GuestReducer,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    debugWrapper(compose(applyMiddleware(thunk))),
  );
};

export default configureStore;
