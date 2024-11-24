import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
