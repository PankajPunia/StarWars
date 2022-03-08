import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
//CSS
import {tailwind} from '../../../../tailwind';

const Body = ({children, testId = '', classes = ''}) => {
  return (
    <Text
      style={tailwind(`mt-2 text-lg text-almond-dark ${classes}`)}
      testID={testId}>
      {children}
    </Text>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  testId: PropTypes.string,
};

export default Body;
