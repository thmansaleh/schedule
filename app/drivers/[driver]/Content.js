"use client"
import Nav from "./Nav"
import BackArrowBtn from '@/app/components/BackArrowBtn';
import { swrDriver } from '@/app/swr/driver';
import Active from './Active';
import Shift from './Shift';
import Duty from './Duty';
import Phone from './Phone';
import Name from './Name';
import Avatar from './Avatar';
import UpdateBtn from './UpdateBtn';
import { useDispatch } from 'react-redux';
import { updateDriver } from '@/app/store/features/driver';
import Loading from "./Loading";
export default  function Content({id,driver}){
    const dispatch=useDispatch()
const {data,error,isLoading} =swrDriver(id)
if(data) {
  dispatch(updateDriver({action:'driver',value:{
  name:data[0].name,
  duty:data[0].duty_id,
  phone:data[0].phone,
  shift:data[0].shift_id,
  status:data[0].status,
}}
  ))
}


if(isLoading) return <Loading/>
if(error) return 'errore'

return <>


<BackArrowBtn/>


<div className="py-4 bg-white">

  <Avatar driver={data[0]}/>

<Nav userId={id}/>


  <div className="p-4 space-y-4">
<Name driver={data[0]}/>
<Active driver={data[0]}/>
 <Shift driver={data[0]}/>
<Duty driver={data[0]}/>
<Phone driver={data[0]}/>
    <UpdateBtn driver={data[0]}/>
  </div>
</div>
</>
}