// 'use client'

import axios from 'axios';


 
 export const email = async (message) => {
const url =`https://saba.cc/erc/email/email.php/?sender=RTA&message=${message}`
   const response = await axios.get(url);

   return response.data;
 };
