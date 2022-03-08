import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {tailwind} from '../../../../tailwind';
const Loader = () => {
  return (
    <View
      style={tailwind('absolute bg-black opacity-20 inset-0 justify-center')}>
      {<ActivityIndicator size={'large'} />}
    </View>
  );
};

export default Loader;
