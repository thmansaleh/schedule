import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Content from "./Content"
export default  function page({params}) {
    const id = params.driver
  const cookieStore = cookies()
    const user = cookieStore.get('user')

if(!user) return redirect("/login")

return <Content id={id}/>
}