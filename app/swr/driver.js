'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrDriver(id){

 const url =`https://saba.cc/schedule/driver-details.php?id=${id}`

  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading } = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error
}


}
