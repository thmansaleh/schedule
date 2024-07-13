"use client"
import { createSlice } from '@reduxjs/toolkit';

const drivers= createSlice({
  name: 'drivers',
  initialState: {
currentDrivers:[],
drivers:[],
scheduleDate:''
},
  reducers: {
    setCurrentDrivers: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
    },
    setNewDrivers: (state, action) => {
      state.drivers=action.payload;
    },
    setScheduleDate: (state, action) => {
      state.scheduleDate=action.payload;
    },

  },
});

export const { setCurrentDrivers,setNewDrivers ,setScheduleDate} = drivers.actions;

export default drivers.reducer;