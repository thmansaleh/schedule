import { updateDriver } from '@/app/store/features/driver'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Phone() {
    const driver =useSelector(state=>state.driver.updateDriver)
    const dispatch=useDispatch()

  return (
<div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهاتف</label>
      <input
       onChange={(e)=>{
        dispatch(updateDriver({action:'phone',value:e.target.value}))

      }} value={driver.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" />
    </div>  )
}

export default Phone