
import { useDispatch, useSelector } from 'react-redux'
import { setNewDrivers } from '../store/features/drivers'

function Filter() {
    const dispatch = useDispatch()
    const currentDrivers = useSelector(state => state.drivers.currentDrivers)

    const search = (inputValue) => {


        const value = inputValue.target.value
        const newSearch = currentDrivers.filter(driver => driver.name.toLowerCase().includes(value.toLowerCase()) || driver.phone.toString().includes(value) || driver.job_id.toString().includes(value))
        // dispatch(setNewDrivers(newSearch))

        switch (value) {
            case 'morning':
                // sort((a, b) => a.name.localeCompare(b.name, 'ar')).
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '1').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))

                break;
            case 'evening':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '2').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
            case 'night':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '3').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
            case '1':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '1').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
            case '2':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '2').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
            case '3':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '3').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
            case '4':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '4').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))
                break;
                case 'true':

                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.status == 'true').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))

                break;
                case 'false':

                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.status == 'false').sort((a, b) => a.name.localeCompare(b.name, 'ar'))))

                break;

            default:
                dispatch(setNewDrivers(currentDrivers))

                break;
        }
    }
    return (
        <div className="flex flex-row mb-1  sm:mb-0">
          
            <div className="relative ">
                <select onChange={(e) => search(e)} className="appearance-none h-full rounded border outline-none   block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l  focus:border-r focus:bg-white focus:border-gray-500">
                    <option value='all'>الكل</option>
                    {/* <option value='true'>فعال</option> */}
                    <option value='morning'>الفترة الصباحية</option>
                    <option value='evening'>الفترة المسائية</option>
                    <option value='night'>الفترة الليلية</option>
                    <option value='1'>الشفت الاول</option>
                    <option value='2'>الشفت الثاني</option>
                    <option value='3'>الشفت الثالث</option>
                    <option value='4'>الشفت الرابع</option>
                    <option value='false' >اجازة سنوية</option>

                
                </select>
            
            </div>
        </div>
    )
}

export default Filter