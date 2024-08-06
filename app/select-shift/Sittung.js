import { useDispatch, useSelector } from "react-redux"
import { setSchedule } from "../store/features/schedule"

function Sittung() {
    const dispatch =useDispatch()
    // const data=useSelector(state=>state.schedule)

    return (
        <div id="tools" className="p-4  space-y-4  ">
    <div className="flex gap-2 items-center">
        <input id="phons" defaultChecked  onChange={e => dispatch(setSchedule({action:'phones',data:e.target.checked}))} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
        <label htmlFor="phons" className="ml-2 text-sm text-gray-700">اظهار ارقام هواتف خبراء السير</label>
    </div>
    <div className="flex gap-2 items-center">
        <input id='borders' defaultChecked onChange={e => dispatch(setSchedule({action:'borders',data:e.target.checked}))} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
        <label htmlFor="borders" className="ml-2 text-sm text-gray-700">اظهار حدود بين كل مستخدم</label>
    </div>

    <div className="flex gap-2 items-center">
        <input id="color" onChange={e => dispatch(setSchedule({action:'color',data:e.target.value}))} type="color" className="form-input h-8 w-8 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        <label htmlFor="color" className="ml-2 text-sm text-gray-700">لون خط جدول خبراء السير فقط</label>
    </div>
 
</div>
    )
}

export default Sittung