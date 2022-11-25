/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import StationService from '../services/stationService';

const initialState = {
  breweries: [],
  status: '',
};

export const getBreweries = createAsyncThunk(
  'breweries/fetchBreweries',
  async (dataObj) => {
    console.log(dataObj);
    const response = await axios.get(dataObj.apiUrl);
    // StationService.getAllStations(dataObj.apiUrl);
    console.log(response.data);
    return response.data;
  },
);

export const brewerySlice = createSlice({
  name: 'breweries',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getStation: {
      reducer: (state, action) => state.map((item) => (
        console.log(state, action.payload, item)
        // item.missionId !== action.payload ? item : { ...item, missionActive: true }
      )),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBreweries.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getBreweries.fulfilled, (state, action) => ({ ...state, breweries: action.payload, status: 'idling' }))
      .addCase(getBreweries.rejected, (state, action) => (console.log(action.error)));
  },
});

export const { getstations: getbreweries, getStation } = brewerySlice.actions;
export const stations = (state) => state.stations;
export default brewerySlice.reducer;
