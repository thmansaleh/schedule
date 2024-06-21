'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/admins.php"
 export const fetchAdmins = async () => {
   const response = await axios.get(url);

   return response.data;
 };

