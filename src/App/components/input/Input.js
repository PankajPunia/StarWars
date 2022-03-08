import React from 'react';
import {TextInput} from 'react-native';
//CSS
import {tailwind} from '../../../../tailwind';

const Input = ({
  onChangeText = () => {},
  value = '',
  placeholder = '',
  classes = '',
  secureTextEntry = false,
  onSubmitEditing = () => {},
}) => {
  return (
    <>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType="default"
        style={tailwind(
          `border w-full h-12 px-4 rounded-lg ${classes} text-lg`,
        )}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </>
  );
};

export default Input;