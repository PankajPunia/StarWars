import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
//CSS
import {tailwind} from '../../../../tailwind';

const Title = ({children, testId = '', classes=''}) => {
  return (
    <Text
      style={tailwind(`text-3xl font-bold mb-2 text-almond-dark ${classes}`)}
      testID={testId}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  testId: PropTypes.string,
};

export default Title;
