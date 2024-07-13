"use client"
import { configureStore } from '@reduxjs/toolkit';
import drivers from './features/drivers';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
const store = configureStore({
    reducer: {
        drivers: drivers,
        checkout: checkoutReducer,
        cart:cart,
    },
  });
  
  export default store;