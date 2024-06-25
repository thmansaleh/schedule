export const dynamic = 'force-dynamic' 

import { cookies } from 'next/headers'

export  async function GET(){
    
cookies().delete('user')
 return Response.json(true)  








}