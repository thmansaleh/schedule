'use client'

import { Spinner } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Save({}){
  const today =useSelector(state=>state.schedule.date)
  const [loading,setLoading]=useState(false)

    const save=()=>{


const randoms =document.querySelectorAll('.random')
randoms.forEach(random => {  
random.style.display="none"
  }
)

      // savRef.current.innerText='جاري التحميل .....'
      setLoading(true)
      const texts = document.querySelectorAll('.text')
const deleteBtn = document.querySelectorAll('.delete-btn')
  texts.forEach(text => {  text.innerHTML = text.innerText.replace(/\s/g, "\u00a0")
  })
  deleteBtn.forEach(btn => {  btn.style.display='none'
  })
          const element = document.getElementById('schedule');
          
const opt = {
margin: [0.3, 0, 0.3, 0],
  filename:     `جدول يوم ${today}.pdf`,
  image:        { type: 'jpeg', quality: 1 },
  html2canvas:  { scale: 2},
  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(opt).from(element).save();



setTimeout(() => {
  deleteBtn.forEach(btn => {  btn.style.display='inline-block'

})
randoms.forEach(random => {  
random.style.display="inline-block"
  }
)
setLoading(false)

}, 5000);

  }

    return <>
<div className="p-6">
<button  className='w-full rounded-lg py-4 bg-green-600 text-white' onClick={()=>save()} 
>
تحميل الجدول
{loading&&<Spinner className="mx-4 " color="success" aria-label="Success spinner example" />
}
</button>

</div>
        </>
}