'use client'

import axios from 'axios';
import { apiUrl } from '../constants';




 
 export const driverDetails= async (id) => {
const url =`${apiUrl}/get-driver?id=${id}`
// const url =`https://saba.cc/schedule/driver-details.php?id=${id}`
   const response = await axios.get(url);

   return response.data;
 };