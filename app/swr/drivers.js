'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrDrivers(){

 const url ="https://saba.cc/schedule/drivers.php"
  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading } = useSWR(url,fetcher,{
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
})
return {
  data,
  isLoading,
   error
}


}
