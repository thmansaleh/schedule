'use client'

import axios from 'axios';

import useSWR from 'swr'

export function shiftId(id){

 const url =`https://saba.cc/schedule/shift-id.php?id=${id}`
console.log(url)
  const fetchProduct = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProduct)
return {
  data,
  isLoading,
   error
}


}