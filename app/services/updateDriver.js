'use client'

import axios from 'axios';




 
 export const updateDriver = async (driver) => {
const url =`https://saba.cc/schedule/update-driver.php?id=${driver.id}&shiftId=${driver.shift_id}&dutyId=${driver.duty_id}&phone=${driver.phone}&name=${driver.name}&status=${driver.status}`
   const response = await axios.get(url);

   return response.data;
 };


