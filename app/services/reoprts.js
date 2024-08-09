import axios from 'axios';
 const url ="https://express-rta.vercel.app/get-reports-by-job-id"

  export const reports= async (start,end,jobId) => {
   const response = await axios.get(url,{
     params: {
       date_start:start,
       date_end:end,
       job_id:jobId
      } });

   return response.data;
 };