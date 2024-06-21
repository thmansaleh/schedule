
import Content from "./Content"
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default  function Page() {
  const cookieStore = cookies()
    const user = cookieStore.get('user')
    if(!user) return redirect("/login")
      return <Content/>




}