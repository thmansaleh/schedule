'use client'

import axios from 'axios';
import { apiUrl } from '../constants';
 export const deleteNoteById= async (id) => {
// const url =`https://saba.cc/schedule/deleteNote.php?id=${id}`
const url =`${apiUrl}/delete-note?id=${id}`
   const response = await axios.get(url);
   return response.data;
 };