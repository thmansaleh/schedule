"use client"
import { createSlice } from '@reduxjs/toolkit';

const driver= createSlice({
  name: 'driver',
  initialState: {
updateDriver:{
    name:'',
    phone:'',
    shift:'',
    duty:'',
    status:'',
}
},
  reducers: {
    updateDriver: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
      switch (action.payload.action) {
        case 'name':
            state.updateDriver.name=action.payload.value
            break;
        case 'driver':
            state.updateDriver.name=action.payload.value.name
            state.updateDriver.phone=action.payload.value.phone
            state.updateDriver.shift=action.payload.value.shift
            state.updateDriver.duty=action.payload.value.duty
            state.updateDriver.status=action.payload.value.status
            break;
        case 'duty':
            state.updateDriver.duty=action.payload.value

            break;
        case 'shift':
            state.updateDriver.shift=action.payload.value

            break;
        case 'phone':
            state.updateDriver.phone=action.payload.value

            break;
        case 'status':
            state.updateDriver.status=action.payload.value

            break;
      
        default:
            break;
      }
    },

  },
});

export const { updateDriver} = driver.actions;

export default driver.reducer;