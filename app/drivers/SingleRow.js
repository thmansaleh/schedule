import Link from 'next/link'
import React from 'react'

function SingleRow({driver,index}) {
  const url =`drivers/${driver.id}`

  return (
    <tr key={index}>
    <td>{index}</td>
    <td className="p-5 bg-white text-sm text-gray-900 whitespace-no-wrap border-b border-gray-200">
      <Link prefetch={true} href={url}>
      {driver.name}
      </Link>
   
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{driver.shift}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {driver.duty}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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