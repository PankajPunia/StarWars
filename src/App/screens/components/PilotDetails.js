import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
//components
import Body from '../../components/Text/Body';
import Card from '../../components/cards/Card';
import Button from '../../components/button/Button';
//Redux
import {setFavorite, removeFavorite} from '../../redux/actions/Favorite';

const PilotDetails = ({item, index, showAddButton = true}) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const isGuestUser = useSelector(state => state?.GuestReducer?.isGuestUser);

  const onAddFavorite = useCallback(favorite => {
    dispatch(setFavorite(favorite));
  }, []);

  const onRemoveItem = useCallback(favorite => {
    dispatch(removeFavorite(favorite));
  }, []);

  const RenderStarShips = () => {
    return (
      <>
        {item?.starShipDetail?.map((starship, index) => {
          return (
            <Body
              key={
                index
              }>{`${starship?.starshipName} /${starship?.starshipClass} `}</Body>
          );
        })}
      </>
    );
  };

  const onButtonPress = useCallback(item => {
    if (showAddButton) {
      onAddFavorite(item);
      setIsDisabled(true);
    } else {
      onRemoveItem(item);
    }
  });

  const BUTTON_TITLE = showAddButton ? 'Add to favorite' : 'Remove';
  return (
    <Card classes="mt-4" key={index}>
      {!isGuestUser && (
        <Button
          isDisable={isDisabled}
          text={BUTTON_TITLE}
          classes={`self-end`}
          textClasses="text-almond-default text-lg"
          onPress={() => onButtonPress(item)}
        />
      )}
      <Body>{`Name: ${item?.name}`}</Body>
      <Body>{`Gender: ${item?.gender}`}</Body>
      <Body>{'Starship(s):'}</Body>
      <RenderStarShips />
    </Card>
  );
};

PilotDetails.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default PilotDetails;
