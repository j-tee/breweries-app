import { configureStore } from '@reduxjs/toolkit';
import stationReducer from './stocks/stationSlice';

const store = configureStore({
  reducer: {
    stations: stationReducer,
  },
});

export default store;
