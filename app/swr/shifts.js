'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function shifts(){
//  const url ="https://saba.cc/schedule/shifts.php"
 const url =`${apiUrl}/get-shifts`
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