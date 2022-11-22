import { configureStore } from '@reduxjs/toolkit';
import stationReducer from './station/stationSlice';

const store = configureStore({
  reducer: {
    stations: stationReducer,
  },
});

export default store;
