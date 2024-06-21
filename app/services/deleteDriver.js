'use client'

import axios from 'axios';


 export const deleteDriver= async (id) => {
const url =`https://saba.cc/schedule/delete-driver.php?id/${id}`
   const response = await axios.get(url);

   return response.data;
 };