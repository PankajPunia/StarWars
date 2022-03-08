import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
//COMPONENTS
import Container from '../components/container/Container';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import PilotDetails from './components/PilotDetails';
import Loader from '../components/loader/Loader';

const PilotsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const pilotReducer = useSelector(state => state?.PilotReducer);
  const pilots = pilotReducer?.pilots;
  const searchDirectory = pilotReducer?.searchDirectory;

  //Search filter that converts searchQuery to lowercase and compare against data in searchDirectory
  //Returns the index of corresponding array if the array includes searchQuery
  const searchFilter = () => {
    let indexArr = [];
    if (searchQuery) {
      searchDirectory?.filter((item, index) => {
        if (item?.includes(searchQuery?.toLowerCase())) {
          indexArr.push(index);
        }
        return indexArr;
      });
    }
    //Creating new array that includes data to be rendered on screen
    setSearchedData(indexArr?.map(item => pilots[item]));
  };

  return (
    <Container>
      {!pilots && <Loader />}
      <Input
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Search"
        classes="mt-12"
        onSubmitEditing={searchFilter}
      />
      <Button onPress={searchFilter} text="Search" classes="my-4" />

      {searchedData && (
        <FlatList
          extraData={searchedData}
          data={searchedData}
          renderItem={({item, index}) => (
            <PilotDetails item={item} index={index} />
          )}
          keyExtractor={item => item.created}
        />
      )}
    </Container>
  );
};

export default PilotsScreen;
