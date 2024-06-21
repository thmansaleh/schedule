'use client'

import axios from 'axios';




 const url ="https://saba.cc/schedule/operations.php"
 export const fetchOperations = async () => {
   const response = await axios.get(url);

   return response.data;
 };

