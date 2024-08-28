'use client'
import Login from './Login'
import {  useSearchParams } from 'next/navigation'
import Reports from './Reports'

function page() {
    const jobId =useSearchParams().get('job_id')
    if(jobId){
        if(jobId.length>0) return <Reports jobId={jobId}/>
    }
    return (
    <div>
        <Login/>
    </div>
  )
}

export default page