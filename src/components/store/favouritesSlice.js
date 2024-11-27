import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const match = action.payload;
      const exists = state.favourites.some((fav) => fav.matchNumber === match.matchNumber);
      if (!exists) {
        state.favourites.push(match);
      }
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (fav) => fav.matchNumber !== action.payload.matchNumber
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;// destructuring concept

export default favouritesSlice.reducer;
