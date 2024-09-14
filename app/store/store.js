"use client"
import { configureStore } from '@reduxjs/toolkit';
import drivers from './features/drivers';
import schedule from './features/schedule';
import driver from './features/driver';
const store = configureStore({
    reducer: {
        drivers: drivers,
        schedule:schedule,
        driver:driver
    },
  });
  
  export default store;