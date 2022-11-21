/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StationService from '../services/stationService';

const initialState = {
  stations: [],
  status: '',
};

export const getStations = createAsyncThunk(
  'stations/fetchStations',
  async (dataObj) => {
    const response = await StationService.getAllStations(dataObj.dataParams, dataObj.apiUrl);
    return response.data.slice(0, 10);
  },
);

export const stationSlice = createSlice({
  name: 'stations',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getstations: {
      reducer: (state, action) => state.map((item) => (
        console.log(state, action.payload, item)
        // item.missionId !== action.payload ? item : { ...item, missionActive: true }
      )),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStations.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getStations.fulfilled, (state, action) => ({ ...state, stations: action.payload, status: 'idling' }))
      .addCase(getStations.rejected, (state, action) => (console.log('REJECTED')));
  },
});

export const { getstations } = stationSlice.actions;
export const stations = (state) => state.stations;
export default stationSlice.reducer;
