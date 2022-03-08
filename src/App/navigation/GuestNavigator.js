import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//SCREENS
import PilotsScreen from '../screens/PilotsScreen';
import LoginScreen from '../screens/LoginScreen';
//UTILS
import Navigation from '../../utils/constants/Navigation';
import TabLabel from '../../utils/constants/TabLabel';
import {FONT_SIZE} from '../../utils/constants/General';

const GuestStack = createBottomTabNavigator();

const GuestNavigator = () => {
  return (
    <GuestStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarIcon: () => {},
        tabBarLabelStyle: {fontSize: FONT_SIZE},
      })}
      initialRouteName={Navigation.Screen.PILOTS_SCREEN}>
      <GuestStack.Screen
        name={Navigation.Screen.PILOTS_SCREEN}
        component={PilotsScreen}
        options={{title: TabLabel.PILOTS_SCREEN}}
      />
      <GuestStack.Screen
        name={Navigation.Screen.LOGIN_SCREEN}
        component={LoginScreen}
        options={{title: TabLabel.LOGIN_SCREEN}}
      />
    </GuestStack.Navigator>
  );
};

export default GuestNavigator;
