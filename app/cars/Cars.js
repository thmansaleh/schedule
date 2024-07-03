
export default function Cars({cars}){
return <>
<div className="w-full flex items-center justify-between px-4">
  <img className="w-28 h-28 object-contain" src="./rta.png" alt="ggg" />
  <img className="w-28 h-16 object-contain" src="./DP.png" alt="ggg" />
</div>


<div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
  <table className="text-center  w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-center  text-base text-gray-700 uppercase bg-gray-50 ">
<tr>
        <th scope="col" className="px-6 py-3">
          الدورية
        </th>
        <th scope="col" className="px-6 py-3">
         التمركز
        </th>
        <th scope="col" className="px-6 py-3">
          الموقع
        </th>
      </tr>
    </thead>
    <tbody className="text-md text-center text-black">



{cars.sort((a, b) => Number(a.name) - Number(b.name)).map((e,i)=>{
if(e.name!="5"){
return <tr key={i} className="border-b ">
        <th scope="row" className="px-6 py-4 font-semibold  whitespace-nowra">
          {e.name}
        </th>
        <td className="px-6 py-4">
          {e.station}
        </td>
        <td className="px-6 py-4">
     {e.name!="5"&& <a href={e.location} className="inline-block py-2  px-4 text-white bg-black rounded-lg">عرض </a>}
        </td>
        
      </tr>
}
})}

    </tbody>
  </table>
</div>
</>

}
