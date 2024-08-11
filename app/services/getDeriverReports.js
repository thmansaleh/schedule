
'use client'

import axios from 'axios';
export const getDriverReports= async (startDate,endDate,jobId) => {
    const url ="https://express-rta.vercel.app/get-reports-by-job-id"
    //  const url ='https://saba.cc/schedule/getDriverCars.php'
    let end = new Date(endDate); 
end.setDate(end.getDate() + 1);
    let start = new Date(startDate); 
startDate.setDate(start.getDate() + 1);

   const response = await axios.get(url,{
     params: {
        job_id:jobId,
       start_date:start,
       end_date:end

      } });

   return response.data;
 };