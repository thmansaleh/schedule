import { swrNotes } from '@/app/swr/notes'
import React from 'react'
import DeleteNote from './DeleteNote'

function Notes({userId}) {
    const {data,error,isLoading} = swrNotes(userId)
    if(isLoading) return <h1 className='text-md text-gray-600 mt-8 text-center ' >جاري التحميل</h1>
    if(error) return 'error.....'
    // if(data.length===0) return <h1 className='text-md text-gray-600 mt-8 text-center ' >لاتوجد اي ملاحظات</h1>

    if(data)return (
    <div className="p-3 bg-gray-700 rounded-lg space-y-4 my-3">

    {data.reverse().map((e)=>{
        return <div key={e.id} className="rounded-lg p-2 py-5 bg-white  border-b border-white relative overflow-hidden">
        <p className="text-sm text-gray-700">{e.note} </p>
    <DeleteNote userId={e.user_id} noteId={e.id}/>
        <span className="absolute px-1.5  rounded-tl-lg bottom-0 right-0 bg-yellow-600 text-white  text-xs">{e.date}</span>
      </div >
    })}
  
  
  </div>  )
  return <h1 className='text-md text-gray-600 mt-8 text-center ' >لاتوجد اي ملاحظات</h1>
}

export default Notes