"use client"
import { getTodayNameInArabic } from '@/app/services/today';
import { createSlice } from '@reduxjs/toolkit';

const schedule= createSlice({
  name: 'schedule',
  initialState: {
    phones:true,
    borders:true,
    color:false,
    date:getTodayNameInArabic()
},
  reducers: {
    setSchedule: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
      switch (action.payload.action) {
        case 'date':
            state.date=action.payload.data
            break;
        case 'phones':
            state.phones=action.payload.data
            break;
        case 'borders':
            state.borders=action.payload.data
            break;
        case 'color':
            state.color=action.payload.data
            break;
      
        default:
            break;
      }
    },
 

  },
});

export const { setSchedule} = schedule.actions;

export default schedule.reducer;