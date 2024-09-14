export const viewport ={
width:'800',
userScalable: true

}
// export const viewport = {
//   userScalable: false
// }

import { redirect } from 'next/navigation'
import Content from "./Content"
import { cookies } from 'next/headers'

export default function(){

  const cookieStore = cookies()
    const user = cookieStore.get('user')
    if(!user) return redirect("/login")

return <Content/>
}
