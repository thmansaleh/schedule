'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/cars.php"
 export const fetchCars = async () => {
   const response = await axios.get(url);

   return response.data;
 };





