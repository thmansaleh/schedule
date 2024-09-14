import React from 'react'
import { setSchedule } from '../store/features/schedule'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleSwitch } from 'flowbite-react'

function Phones() {
    const dispatch=useDispatch()
    const value =useSelector(state=>state.schedule.phones)
  return <>
        <ToggleSwitch checked={value} label="اظهار ارقام الهواتف "
         onChange={e => dispatch(setSchedule({action:'phones',data:!value}))}
         />
 </>
}

export default Phones