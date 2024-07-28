'use client'

import axios from 'axios';
 export const deleteNoteById= async (id) => {
// const url =`https://saba.cc/schedule/deleteNote.php?id=${id}`
const url =`https://express-rta.vercel.app/delete-note?id=${id}`
   const response = await axios.get(url);
   return response.data;
 };