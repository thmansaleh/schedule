'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrReportPlates(reportNo){
    const apiUrl='https://express-rta.vercel.app'
    const url =`${apiUrl}/report-plates?report_no=${reportNo}`
  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}