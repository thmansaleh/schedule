import { updateDriver } from "@/app/store/features/driver"
import { duty } from "@/app/swr/duty"
import { useDispatch, useSelector } from "react-redux"

function Duty() {
    const {data,isLoading,error} =duty()
    const dispatch =useDispatch()
    const driver =useSelector(state=>state.driver.updateDriver)

    if(isLoading) return 'loading' 
    if(error) return 'errore' 
  return (
    <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فترة العمل</label>

      <select 
       onChange={(e)=>{
        dispatch(updateDriver({action:'duty',value:e.target.value}))
      }}

      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
       {
data.map((e,i)=>{


return <option  selected={e.id===driver.duty_id?true:false} key={i} value={e.id}>{e.name}</option>
})}

      </select>




    </div>  )
}

export default Duty