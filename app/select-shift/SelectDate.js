"use client"

import { useDispatch } from "react-redux";
import { setSchedule } from "../store/features/schedule";


function SelectDate() {
  const dispatch=useDispatch()
  const getDateLabel = (daysFromToday) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date.toLocaleDateString('ar-EG', { weekday: 'long' });
  };

  const dates = [
    { daysFromToday: 1 },
    { daysFromToday: 2 },
    { daysFromToday: 3 },
    { daysFromToday: 4 },
    { daysFromToday: 5 },
    { daysFromToday: 6 },
    { daysFromToday: 7 },

  ];

  return   <div className="bg-white p-6 ">
        <h1 className="text-center text-base text-black font-semibold select-none my-4">اختر تاريخ الجدول</h1>

        <select onChange={e=>dispatch(setSchedule({action:'date',data:e.target.value}))}
          className="block w-full md:w-44 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>اختر تاريخاً</option>
          {dates.map((dateInfo, index) => (
            <option key={index} value={getDateLabel(dateInfo.daysFromToday)}>
              {getDateLabel(dateInfo.daysFromToday)}
            </option>
          ))}
        </select>
      </div>
    
}

export default SelectDate
