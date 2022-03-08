import {createStore, applyMiddleware, compose} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';

const config = {
  key: 'REDUX_STORE',
  storage: AsyncStorage,
  whitelist: [],
};
let debugWrapper = data => data;

if (__DEV__) {
  debugWrapper = composeWithDevTools({realtime: true, port: 8081});
}

const rootReducer = persistCombineReducers(config, {});

const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    debugWrapper(compose(applyMiddleware(thunk))),
  );
};

export default configureStore;
