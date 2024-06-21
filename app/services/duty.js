'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/duty.php"
 export const duty = async () => {
   const response = await axios.get(url);

   return response.data;
 };

