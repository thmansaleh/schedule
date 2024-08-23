
'use client'

import axios from 'axios';
export const getDriverCarsHistory= async (jobId,startDate,endDate) => {
     const url ='https://express-rta.vercel.app/get-driver-cars-history'
    //  const url ='https://saba.cc/schedule/getDriverCars.php'
   const response = await axios.get(url,{
     params: {
        job_id:jobId,
       start_date:startDate,
       end_date:endDate
      } });

   return response.data;
 };