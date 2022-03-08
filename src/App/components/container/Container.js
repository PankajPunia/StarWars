import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
//UTILS
import {tailwind} from '../../../../tailwind';

const Container = ({children}) => {
  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <View style={tailwind('px-4 mt-4 flex-1')}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
