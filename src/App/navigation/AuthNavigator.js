import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//SCREENS
import LoginScreen from '../screens/LoginScreen';
//UTILS
import Navigation from '../../utils/constants/Navigation';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.Screen.LOGIN_SCREEN}>
      <AuthStack.Screen
        name={Navigation.Screen.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
