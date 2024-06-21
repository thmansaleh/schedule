'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/drivers.php"
  export const fetchDrivers = async () => {
   const response = await axios.get(url);

   return response.data;
 };


