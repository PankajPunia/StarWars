import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Container from '../components/container/Container';
import PilotDetails from './components/PilotDetails';

const FavoriteScreen = () => {
  const favorites = useSelector(state => state?.FavoriteReducer?.favorites);

  return (
    <Container>
      <FlatList
        data={favorites}
        extraData={favorites}
        renderItem={({item, index}) => (
          <PilotDetails item={item} index={index} showAddButton={false} />
        )}
        keyExtractor={item => item.created}
      />
    </Container>
  );
};

export default FavoriteScreen;
