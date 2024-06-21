'use server'



import { cookies } from 'next/headers'

    async function logout() {

      cookies().delete('user')
      const user = cookieStore.get('user')
      console.log('useru',user)

    }
 
    