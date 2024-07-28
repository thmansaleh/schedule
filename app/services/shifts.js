'use client'

import axios from 'axios';




 const url ="https://express-rta.vercel.app/get-shifts"
//  const url ="https://saba.cc/schedule/shifts.php"
 export const shifts = async () => {
   const response = await axios.get(url);

   return response.data;
 };

