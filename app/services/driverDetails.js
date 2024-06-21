'use client'

import axios from 'axios';




 
 export const driverDetails= async (id) => {
const url =`https://saba.cc/schedule/driver-details.php?id=${id}`
   const response = await axios.get(url);

   return response.data;
 };