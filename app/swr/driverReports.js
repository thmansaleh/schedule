
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrDriverReports(jobId){
 const url =`${apiUrl}/get-driver-reports-today`
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