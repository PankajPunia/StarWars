/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import configureStore from './src/App/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const store = configureStore();

const persistor = persistStore(store, null, () => {
  store?.getState();
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Text>StarWars</Text>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
