'use client'

import axios from 'axios';

import useSWR from 'swr'

export function admins(){
 const url ="https://saba.cc/schedule/admins.php"
  const fetchProduct = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProduct,{ refreshInterval: 100000 })
return {
  data,
  isLoading,
   error
}


}