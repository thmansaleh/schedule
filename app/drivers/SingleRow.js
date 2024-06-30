import Link from 'next/link'
import React from 'react'

function SingleRow({driver,index}) {
  const url =`drivers/${driver.id}`

  return (
    <tr  key={index}>
    <td className='bg-white border-b border-gray-200 text-xs'>{index}</td>
    <td className=" py-3  bg-white text-xs text-gray-900 whitespace-no-wrap border-b border-gray-200">
      <Link prefetch={true} href={url}>
      {driver.name}
      </Link>
   
    </td>
    <td className=" border-b border-gray-200 bg-white text-xs">
      <p className="text-gray-900 whitespace-no-wrap">{driver.shift}</p>
    </td>
    <td className=" border-b border-gray-200 bg-white text-xs">
      <p className="text-gray-900 whitespace-no-wrap">
        {driver.duty}
      </p>
    </td>
    <td className=" border-b border-gray-200 bg-white text-xs">
     {driver.status=='true'? <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
        <span className="relative">فعال</span>
      </span>: <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
        <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
        <span className="relative">اجازة</span>
      </span>}
    </td>
  </tr>
  )
}

export default SingleRow