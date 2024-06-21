'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrCars(){

 const url ="https://saba.cc/schedule/cars.php"
  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading } = useSWR(url,fetcher,{
  revalidateIfStale: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
})
return {
  data,
  isLoading,
   error
}


}
