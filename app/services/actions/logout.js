'use server'
 import { redirect } from 'next/navigation'
 
import { cookies } from 'next/headers'
 
 function logout() {
"use server"
  cookies().delete("user")
redirect('/login')
}