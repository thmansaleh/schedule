'use client'

import axios from 'axios';

import useSWR from 'swr'

export function admins(){
 const url ="https://express-rta.vercel.app/get-admins"
//  const url ="https://saba.cc/schedule/admins.php"
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