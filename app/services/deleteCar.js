'use client'

import axios from 'axios';


 export const deleteCar= async (id) => {
const url =`https://saba.cc/schedule/delete-car.php?id/${id}`
   const response = await axios.get(url);

   return response.data;
 };