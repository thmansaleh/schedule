'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/shifts.php"
 export const shifts = async () => {
   const response = await axios.get(url);

   return response.data;
 };

