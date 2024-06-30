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
    },
    setNewDrivers: (state, action) => {
      state.drivers=action.payload;
    },

  },
});

export const { setCurrentDrivers,setNewDrivers } = drivers.actions;

export default drivers.reducer;