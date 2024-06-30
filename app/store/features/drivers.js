"use client"
import { createSlice } from '@reduxjs/toolkit';

const drivers= createSlice({
  name: 'drivers',
  initialState: {
currentDrivers:[],
drivers:[]
},
  reducers: {
    setCurrentDrivers: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
    }

  },
});

export const { setCurrentDrivers } = drivers.actions;

export default drivers.reducer;