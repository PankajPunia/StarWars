import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//NAVIGATORS
import GuestNavigator from './GuestNavigator';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
//UTILS
import Navigation from '../../utils/constants/Navigation';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const accessToken = useSelector(state => state.LoginReducer?.accessToken);
  const isGuestUser = useSelector(state => state.GuestReducer?.isGuestUser);

  const showAuthStack = !accessToken && !isGuestUser;
  const showHomeStack = accessToken;
  const showGuestStack = !accessToken && isGuestUser;

  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <>
        {showAuthStack && (
          <Stack.Screen
            name={Navigation.Stack.AUTH}
            component={AuthNavigator}
          />
        )}
        {showGuestStack && (
          <Stack.Screen
            name={Navigation.Stack.GUEST}
            component={GuestNavigator}
          />
        )}
        {showHomeStack && (
          <Stack.Screen
            name={Navigation.Stack.HOME}
            component={HomeNavigator}
          />
        )}
      </>
    </Stack.Navigator>
  );
};

export default MainNavigator;
