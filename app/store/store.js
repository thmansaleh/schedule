"use client"
import { configureStore } from '@reduxjs/toolkit';
import drivers from './features/drivers';
import checkoutReducer from './features/checkout'
import  cart from "./features/cart"
import wishlist from "./features/wishlist"
const store = configureStore({
    reducer: {
        drivers: drivers,
        checkout: checkoutReducer,
        cart:cart,
        wishlist:wishlist
    },
  });
  
  export default store;