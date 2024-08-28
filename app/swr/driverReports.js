
import axios from 'axios';

import useSWR from 'swr'

export function swrDriverReports(jobId){
 const url ="https://express-rta.vercel.app/get-driver-reports-today"
  const fetcher = async () => {
   const response = await axios.get(url,{
    params:{
      job_id:jobId
    }
   });

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}