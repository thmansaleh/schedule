"use client"
import './App.css';

function SelectDate() {
  const getDateLabel = (daysFromToday) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date.toLocaleDateString('ar-EG', { weekday: 'long' });
  };

  const dates = [
    { daysFromToday: 1 },
    { daysFromToday: 2 },
    { daysFromToday: 3 }
  ];

  return   <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
        <select
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
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
