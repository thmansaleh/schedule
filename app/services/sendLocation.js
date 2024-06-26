'use client'

import axios from 'axios';




export const fetchCars = async () => {
     const url ="https://saba.cc/schedule/sendLocation.php"
   const response = await axios.get(url);

   return response.data;
 };





