'use client'

import axios from 'axios';



// {
//     "name": "حمدان رائد صادق",
//     "phone": "0554237999",
//     "shift": "1",
//     "duty": "1",
//     "status": "false"
// }
 
 export const updateDriver = async (id,driver) => {
const url =`https://saba.cc/schedule/update-driver.php?id=${id}&shiftId=${driver.shift}&dutyId=${driver.duty}&phone=${driver.phone}&name=${driver.name}&status=${driver.status}`
   const response = await axios.get(url);

   return response.data;
 };


