"use client"

export default function Table({operations}){
return <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
  <table className="text-center  w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-center  bg-gray-300 text-gray-700 uppercase ">
<tr>
        <th scope="col" className="p-3 font-semibold">
       #
        </th>

        <th scope="col" className="px-6 py-3">
          الاسم
        </th>
        <th scope="col" className="px-6 py-3">
          رقم الهاتف
        </th>
        
      </tr>
    </thead>
    <tbody className="text-md text-center text-black">



{operations.map((e,i)=>{
return <tr key={i} className="border-b ">
 <th scope="row" className="p-3 font-semibold  ">
          {i+1}
        </th>
        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowra">
        <div className="flex items-center gap-x-2">
          <span className="text-sm text-gray-600">{e.name}</span>
        <img className="w-7 h-7 object-contain" src={e.work_place==='rta'?"./rta.png":'./dp.png'}/>

        </div>
        </th>
        <td className="px-6 text-sm text-gray-600 py-4">
          {e.phone}
        </td>
      </tr>
})}

    </tbody>
  </table>
</div>

}