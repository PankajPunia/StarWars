import React from 'react';
import {useDispatch} from 'react-redux';
//COMPONENTS
import Container from '../components/container/Container';
import Button from '../components/button/Button';
import Body from '../components/Text/Body';
//REDUX
import {setLogout} from '../redux/actions/Login';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(setLogout());
  };
  return (
    <Container>
      <Body classes="self-center mt-48">
        {'Are you sure you want to Logout?'}
      </Body>
      <Button text="Logout" classes="mt-4" onPress={onLogout} />
    </Container>
  );
};

export default LogoutScreen;