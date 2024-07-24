'use client'

import axios from 'axios';


 export const deleteNoteById= async (id) => {
const url =`https://saba.cc/schedule/deleteNote.php?id=${id}`
   const response = await axios.get(url);
console.log('retern',id,response.data)
   return response.data;
 };