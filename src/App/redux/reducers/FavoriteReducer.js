import {SET_FAVORITE, REMOVE_FAVORITE} from '../constants';

const initialState = {};

const mutateFavoriteState = (state, favItem) => {
  const favorites = state?.favorites;
  const index = favorites?.indexOf(favItem);
  if (index > -1) {
    favorites?.splice(index, 1);
  }
  return favorites;
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      const favorites = action?.payload;
      return {
        ...state,
        favorites: [...favorites],
      };
    case REMOVE_FAVORITE:
      const newFav = mutateFavoriteState(state, action?.payload);
      return {
        ...state,
        favorites: [...newFav],
      };
    default:
      return state;
  }
};

export default FavoriteReducer;
