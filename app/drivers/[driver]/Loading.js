import { Spinner } from 'flowbite-react'
import React from 'react'

function Loading() {
  return (
    <div className='fixed inset-0 flex justify-center items-center'>
              <Spinner color="success" aria-label="Success spinner example" />

    </div>
  )
}

export default Loading