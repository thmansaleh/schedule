'use client'

import axios from 'axios';
import { apiUrl } from '../constants';




//  const url ="https://saba.cc/schedule/drivers.php"
 const url =`${apiUrl}/get-all-drivers`
  export const fetchDrivers = async () => {
   const response = await axios.get(url);

   return response.data;
 };


