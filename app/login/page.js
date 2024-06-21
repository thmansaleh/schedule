

import { cookies } from 'next/headers'
 import Content from "./Content"
 import {logout} from '@/app/actions'
export default function() {
    const cookieStore = cookies()
    const user = cookieStore.get('user')
  //  logout()
 

  return <Content/>
  
};


