import { updateDriver } from "@/app/store/features/driver"
import { shifts } from "@/app/swr/shifts"
import { useDispatch, useSelector } from "react-redux"

function Shift() {
    const { data , error, isLoading } = shifts()
    const dispatch =useDispatch()
    const driver =useSelector(state=>state.driver.updateDriver)


if(isLoading) return 'loading'
if(error) return 'errore'
  return (
    <div>
    <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الشفت</label>




    <select onChange={(e)=>{
        console.log(e.target.value)
         dispatch(updateDriver({action:'shift',value:e.target.value}))

    }}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
     {
data.map((e,i)=>{


return <option  selected={e.id===driver.shift_id?true:false} key={i} value={e.id}>{e.name}</option>
})}

    </select>


  </div>  )
}

export default Shift