
import { useDispatch, useSelector } from 'react-redux'
import { setNewDrivers } from '../store/features/drivers'

function Filter() {
    const dispatch = useDispatch()
    const currentDrivers = useSelector(state => state.drivers.currentDrivers)

    const search = (inputValue) => {


        const value = inputValue.target.value
        console.log(value)
        const newSearch = currentDrivers.filter(driver => driver.name.toLowerCase().includes(value.toLowerCase()) || driver.phone.includes(value) || driver.job_id.includes(value))
        // dispatch(setNewDrivers(newSearch))

        switch (value) {
            case 'morning':

                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '1')))

                break;
            case 'evening':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '2')))
                break;
            case 'night':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.duty_id == '3')))
                break;
            case '1':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '1')))
                break;
            case '2':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '2')))
                break;
            case '3':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '3')))
                break;
            case '4':
                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.shift_id == '4')))
                break;
                case 'true':

                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.status == 'true')))

                break;
                case 'false':

                dispatch(setNewDrivers(currentDrivers.filter(driver => driver.status == 'false')))

                break;

            default:
                dispatch(setNewDrivers(currentDrivers))

                break;
        }
    }
    return (
        <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
            <div className="relative">
                <select onChange={(e) => search(e)} className="appearance-none h-full rounded border   block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Filter