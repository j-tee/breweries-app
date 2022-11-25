import { configureStore } from '@reduxjs/toolkit';
import stationReducer from './brewery/brewerySlice';

const store = configureStore({
  reducer: {
    breweries: stationReducer,
  },
});

export default store;
