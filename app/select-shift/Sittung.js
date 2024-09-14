import { useDispatch, useSelector } from "react-redux"
import { setSchedule } from "../store/features/schedule"

function Sittung() {
    const dispatch =useDispatch()
    // const data=useSelector(state=>state.schedule)

    return (
        <div id="tools" className="p-4  space-y-4  ">
 

    <div className="flex gap-2 items-center">
        <input id="color" onChange={e => dispatch(setSchedule({action:'color',data:e.target.value}))} type="color" className="form-input h-8 w-8 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        <label htmlFor="color" className="ml-2 text-sm text-gray-700">لون الخط</label>
    </div>
 
</div>
    )
}

export default Sittung