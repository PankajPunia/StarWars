/**
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Provider} from 'react-redux';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 import {NavigationContainer} from '@react-navigation/native';
 import MainNavigator from './src/App/navigation/MainNavigator';
 
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
           <NavigationContainer>
             <MainNavigator />
           </NavigationContainer>
         </SafeAreaProvider>
       </PersistGate>
     </Provider>
   );
 };
 
 export default App;
