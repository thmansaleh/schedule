import { updateDriver } from '@/app/store/features/driver'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Active() {
    const dispatch =useDispatch()  
    const driver =useSelector(state=>state.driver.updateDriver)


  return (
    <div>
    <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">حالة المستخدم</label>
    <select

  onChange={(e)=>{
    dispatch(updateDriver({action:'status',value:e.target.value}))
        }}

     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
     {[{name:"فعال",value:"true"},{name:"غير فعال",value:"false"}].map((e,i)=>{
     
        return  <option key={i} selected={driver.status==e.value?true:false} value={e.value}>{e.name}</option>
    

     })}
    </select>
  </div>  )
}

export default Active