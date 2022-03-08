import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Body from '../Text/Body';
//CSS
import {tailwind} from '../../../../tailwind';

const PressableText = ({onPress = () => {}, text = '', classes = ''}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={tailwind(`${classes}`)}>
        <Body classes="underline">{text}</Body>
      </View>
    </TouchableOpacity>
  );
};

export default PressableText;
