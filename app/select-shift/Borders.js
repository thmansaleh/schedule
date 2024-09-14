import React from 'react'
import { setSchedule } from '../store/features/schedule'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleSwitch } from 'flowbite-react'

function Borders() {
    const dispatch=useDispatch()
    const value =useSelector(state=>state.schedule.borders)
  return <>
        <ToggleSwitch checked={value} label="اظهار حدود الجدول"
         onChange={e => dispatch(setSchedule({action:'borders',data:!value}))}
         />

    </>
}

export default Borders