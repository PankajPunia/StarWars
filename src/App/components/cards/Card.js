import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
//CSS
import {tailwind} from '../../../../tailwind';

const CARD_MIN_HEIGHT = tailwind('h-24').height;

const Card = ({children, classes = '', onPress = () => {}, testId = ''}) => {
  return (
    <Pressable
      testID={testId}
      onPress={onPress}
      style={[
        tailwind(
          `p-4 justify-center bg-almond-default mb-2 rounded-lg ${classes}`,
        ),
        {minHeight: CARD_MIN_HEIGHT},
      ]}>
      {children}
    </Pressable>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  onPress: PropTypes.func,
  testId: PropTypes.string,
};

export default Card;
