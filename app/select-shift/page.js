"use client"

import {shifts} from "@/app/swr/shifts"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default async function Page(){
  const router =useRouter()

let shiftId=false
const {data,error,isLoading} = await shifts()


const nextBtn=()=>{
// console.log(shiftId)
if(shiftId){ 
const shiftNextTitle = document.getElementById("shift-next-title")
const loader = document.getElementById('loader')

loader.style.display='block'
shiftNextTitle.style.display='none'
setTimeout(() => {
  router.push(`/schedule?shift-off-id=${shiftId}`)
}, 3000);
}else{
  notify()
}
}
const notify = () =>{
  toast.warn('  يرجئ اختيار شفت النزول للمواصلة!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"

    });
}
return <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

 />
 <div className=" text-center relative  w-full">
<h1 className="text-center text-base text-black font-semibold select-none my-4">يرجى اختيار شفت النزول</h1>
  <div id="navs" className="   w-screen py-4 bg-white  flex items-center  justify-around ">
    








{isLoading&&[1,2,3].map((e,i)=>{
  
  return <div key={i} className="w-screen py-4 bg-white  flex items-center  justify-around">
  <div className="animate-pulse h-16 w-16 bg-green-400 rounded-full ">
  </div>
</div>
})
}



{data&&data.map((e,i)=>{
  return <div key={e.name} className="navs     overflow-hidden   ">
      <input onChange={()=>shiftId=e.id} name="shift" type="radio" id={i} className="hidden shift" />
      <label className=" relative flex items-center justify-center  h-16 w-16 inline-block bg-green-600 text-white rounded-full " htmlFor={i}>
        {e.name}
        <svg className="opacity-0 fill-white inset-x-1/2  transition-all duration-200 translate-x-1/2 absolute  h-8 w-8" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={512} height={512}><path d="M7.8,21.425A2.542,2.542,0,0,1,6,20.679L.439,15.121,2.561,13,7.8,18.239,21.439,4.6l2.122,2.121L9.6,20.679A2.542,2.542,0,0,1,7.8,21.425Z" /></svg>
      </label>
    </div>

})
}

  </div>
  <button className="my-4 w-3/4 py-2 font-semibold text-white bg-green-600 rounded-lg" id="nextbtn" onClick={nextBtn}
>
<span id="loader" className="loader"></span>
<span id="shift-next-title">التالي</span>
</button>
</div>

  </>
}