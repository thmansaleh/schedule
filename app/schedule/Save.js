'use client'

import { useRef } from "react";

export default function Save({}){
  const savRef=useRef(null)
  const today =()=>{
    const today = new Date();
    
    
    const tomorrow = new Date(today); 
    tomorrow.setDate(today.getDate() + 1); 
    const arabicWeekdays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    const arabicWeekdayName = arabicWeekdays[tomorrow.getDay()];
    return `جدول يوم ${arabicWeekdayName} ${tomorrow.toLocaleDateString()} `
    
        }







    const save=()=>{
      document.getElementById('tools').style.display='none'


const randoms =document.querySelectorAll('.random')
randoms.forEach(random => {  
random.style.display="none"
  }
)

      savRef.current.innerText='جاري التحميل .....'
const texts = document.querySelectorAll('.text')
const deleteBtn = document.querySelectorAll('.delete-btn')
  texts.forEach(text => {  text.innerHTML = text.innerText.replace(/\s/g, "\u00a0")
  })
  deleteBtn.forEach(btn => {  btn.style.display='none'
  })
          const element = document.getElementById('schedule');
          
const opt = {
margin: [0, 0, 0, 0],
  filename:     `${today()}.pdf`,
  image:        { type: 'jpeg', quality: 1 },
  html2canvas:  { scale: 2},
  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();



setTimeout(() => {
  deleteBtn.forEach(btn => {  btn.style.display='inline-block'

})
randoms.forEach(random => {  
random.style.display="inline-block"
  }
)
savRef.current.innerText='تحميل الجدول'
document.getElementById('tools').style.display='block'


}, 5000);

  }

    return <>
<div className="p-6">
<button ref={savRef} className='w-full rounded-lg py-4 bg-green-600 text-white' onClick={()=>save()} >تحميل الجدول</button>

</div>
        </>
}