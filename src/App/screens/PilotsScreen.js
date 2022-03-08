import React, {useState} from 'react';

//COMPONENTS
import Container from '../components/container/Container';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

const PilotScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <Input
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Search"
        classes="mt-12"
      />
      <Button onPress={() => {}} text="Search" classes="my-4" />
    </Container>
  );
};

export default PilotScreen;
