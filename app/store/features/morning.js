"use client"
import { createSlice } from '@reduxjs/toolkit';

const wishlist= createSlice({
  name: 'wishlist',
  initialState: {
drivers:[],
cars:[]
},




  reducers: {




 addItem: (state, action) => {
const carId= action.payload.carId
const driverIndex = action.payload.driverIndex
state.cars[carId].push(drivers[driverIndex]);
state.drivers.splice(driverIndex, 1)


    },








removeItemFromWishlist:(state,action) =>{
const idToRemove = action.payload;
const newItems = state.items.filter(item => item.id !== idToRemove);

state.items=newItems
},
















  },








});

export const { removeItemFromWishlist,addItemToWishlist } = wishlist.actions;

export default wishlist.reducer;