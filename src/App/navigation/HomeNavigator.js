import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//SCREENS
import PilotsScreen from '../screens/PilotsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CreatePilotScreen from '../screens/CreatePilotScreen';
import LogoutScreen from '../screens/LogoutScreen';

//UTILS
import Navigation from '../../utils/constants/Navigation';
import TabLabel from '../../utils/constants/TabLabel';
import {FONT_SIZE} from '../../utils/constants/General';

const HomeStack = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarIcon: () => {},
        tabBarLabelStyle: {fontSize: FONT_SIZE},
      })}
      initialRouteName={Navigation.Screen.PILOTS_SCREEN}>
      <HomeStack.Screen
        name={Navigation.Screen.PILOTS_SCREEN}
        component={PilotsScreen}
        options={{title: TabLabel.PILOTS_SCREEN}}
      />
      <HomeStack.Screen
        name={Navigation.Screen.FAVORITE_SCREEN}
        component={FavoriteScreen}
        options={{title: TabLabel.FAVORITE_SCREEN}}
      />
      <HomeStack.Screen
        name={Navigation.Screen.CREATE_PILOT_SCREEN}
        component={CreatePilotScreen}
        options={{title: TabLabel.CREATE_PILOT_SCREEN}}
      />
      <HomeStack.Screen
        name={Navigation.Screen.LOGOUT_SCREEN}
        component={LogoutScreen}
        options={{title: TabLabel.LOGOUT_SCREEN}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
