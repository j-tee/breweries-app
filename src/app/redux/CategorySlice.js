/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  symbols: [],
  status: '',
};

export const getStockSymbols = createAsyncThunk(
  'symbols/fetchSymbols',
  async (dataObj) => {
    const response = await StocKService.getAllStocks(dataObj.dataParams, dataObj.apiUrl);
    return response.data.slice(0, 20);
  },
);

export const stockSlice = createSlice({
  name: 'symbols',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getsymbols: {
      reducer: (state, action) => state.map((item) => (
        console.log(state, action.payload, item)
        // item.missionId !== action.payload ? item : { ...item, missionActive: true }
      )),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStockSymbols.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getStockSymbols.fulfilled, (state, action) => ({ ...state, symbols: action.payload, status: 'idling' }));
  },
});

export const { getsymbols } = stockSlice.actions;
export const symbols = (state) => state.symbols;
export default stockSlice.reducer;
