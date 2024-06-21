export const dynamic = 'force-dynamic' 
import { login } from "@/app/services/login"
import { cookies } from 'next/headers'

export  async function GET(request){
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')
    const password = searchParams.get('password')
// console.log(username,password)
    const data = await login(username,password)
if(data) {
    const oneDay = 180 * 60 * 60 * 1000
    cookies().set({
        name: 'user',
        value: JSON.stringify(data),
        expires:Date.now() + oneDay,
        // httpOnly: true,
        path: '/',
      })
      return Response.json(true)  
    
}
// if(data) return   Response.json(true)    

return   Response.json(false)   




}