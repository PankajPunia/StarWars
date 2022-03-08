import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
//COMPONENTS
import Container from '../components/container/Container';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import PressableText from '../components/button/PressableText';
//REDUX
import {setGuestUser, setLogin} from '../redux/actions/Login';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isEnabled = email && password ? true : false;
  const onLogin = () => {
    dispatch(setLogin());
    dispatch(setGuestUser(false));
  };
  const onContinueAsGuest = () => {
    dispatch(setGuestUser());
  };
  return (
    <Container>
      <Input
        classes="mt-12"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        classes="my-4"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        onSubmitEditing={onLogin}
      />
      <Button text="Log In" isDisable={!isEnabled} onPress={onLogin} />
      <PressableText
        text="Continue as guest"
        classes="self-center"
        onPress={onContinueAsGuest}
      />
    </Container>
  );
};

export default LoginScreen;
