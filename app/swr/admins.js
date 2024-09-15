'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function admins(){
 const url =`${apiUrl}/get-admins`
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