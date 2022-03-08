import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
//COMPONENTS
import Title from '../Text/Title';
//CSS
import {tailwind} from '../../../../tailwind';

const Button = ({
  onPress = () => {},
  text = '',
  classes = '',
  isDisable = false,
  textClasses = '',
}) => {
  const buttonStyle = isDisable ? 'bg-grey-light' : 'bg-almond-dark';
  const textStyle = isDisable ? 'text-grey-default' : 'text-almond-default';
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisable}>
      <View
        style={tailwind(
          `px-4 py-2 self-center items-center justify-center rounded-lg ${buttonStyle} ${classes}`,
        )}>
        <Title classes={`mb-0 ${textStyle} ${textClasses}`}>{text}</Title>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  classes: PropTypes.string,
  isDisable: PropTypes.bool,
  textClasses: PropTypes.string,
};

export default Button;
