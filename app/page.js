
import Home from '@/app/home/Home'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import LogoutButton from "./LogoutButton"
export default  function Page() {
    const cookieStore = cookies()
    const user = cookieStore.get('user')

    if(!user) return redirect("/login")

    return  <div className="fixed inset-0">

<LogoutButton/>
<Home/>
</div>
}