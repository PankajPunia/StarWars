import {SET_FAVORITE, REMOVE_FAVORITE} from '../constants';
let favorites = [];

export const setFavorite = (favoriteItem = {}) => {
  favorites?.push(favoriteItem);
  return {
    type: SET_FAVORITE,
    payload: favorites,
  };
};

export const removeFavorite = (favoriteItem = {}) => {
  return {
    type: REMOVE_FAVORITE,
    payload: favoriteItem,
  };
};
