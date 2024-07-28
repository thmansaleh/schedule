import React from 'react'

function Report({data}) {
  return (
<div className="p-3 rounded-lg ring-1 ring-gray-500  space-y-4 text-[8px]
">
  <div className="flex items-center justify-center flex-col text-gray-700   ">
    <div>وحدة إدارة الحوادث المرورية</div>
    <div>Traffic Incidents Management Unite</div>
  </div>
  <div className="flex items-center justify-between">
    <div>
      <span>التاريخ : </span>
      <span className="text-green-600 font-semibold">{new Date(data.date).toLocaleDateString()}</span>
    </div>
    <div>
      <span>النداء : </span>
      <span className="text-green-600 font-semibold">{data.nidaa}</span>
    </div>
  </div>
  <div className="flex items-center justify-between">
    <div>
      <span>رقم المركبة : </span>
      <span className="text-green-600 font-semibold">{data.plate_no}</span>
    </div>
    <div>
      <span>رقم الملصق : </span>
      <span className="text-green-600 font-semibold">{data.car_id}</span>
    </div>
  </div>
  <div className="flex justify-between   gap-x-3">
    <div>
      <span>الفترة : </span>
      <span className="text-green-600 font-semibold">{data.period}</span>
    </div>
    <div>
      <span>من الساعة : </span>
      <span className="text-green-600 font-semibold">{data.time}</span>
    </div>
    <div>
      <span>الى الساعة : </span>
      <span className="text-green-600 font-semibold">21</span>
    </div>
  </div>
  <div className="flex items-center gap-x-4   justify-between">
    <div>
      <span>قراءة العداد عن الإستلام : </span>
      <span className="text-green-600 font-semibold">{data.km}</span>
    </div>
    <div>
      <span>مستوى الوقود : </span>
      <span className="text-green-600 font-semibold">{data.oil}%</span>
    </div>
  </div>
  <div className="flex items-center justify-between gap-x-4  ">
    <div>
      <span>النظافة من الداخل : </span>
      <span className="text-green-600 font-semibold">{data.cleen_inside
=='1'?'نظيفة':'غير نظيفة'
      }</span>
    </div>
    <div>
      <span>النظافة من الخارج : </span>
      <span className="text-green-600 font-semibold">{data.cleen_outside
=='1'?'نظيفة':'غير نظيفة'
      }</span>
    </div>
  </div>
  <div className="flex items-center justify-between gap-x-4  ">
    <div>
      <span> الأضرار الخارجية : </span>
      <span className="text-green-600 font-semibold">{data.external_damage==1?'لاتوجد':'توجد'}</span>
    </div>
    <div>
      <span> الأضرار الداخلية : </span>
      <span className="text-green-600 font-semibold">{data.internal_damage==1?'لاتوجد':'توجد'}</span>
    </div>
    <div>
      <span>الأعطال : </span>
      <span className="text-green-600 font-semibold">{data.malfunctions==1?'لاتوجد':'توجد'}</span>
    </div>
  </div>


{data.damage_details.length>3&&<div>
      <span>الأعطال : </span>
      <span className="text-green-600 font-semibold">{data.damage_details}</span>
    </div>
  
  }

  <div className="flex items-center justify-between gap-x-4  ">
    <div>
      <span> جهاز الإتصال : </span>
      <span className="text-green-600 font-semibold">{data.phone
=='1'?'موجود':'غير موجود'
      }</span> 
    </div>
    <div>
      <span>جاهز الإتصال :  </span>
      <span className="text-green-600 font-semibold">{data.phone
=='1'?'موجود':'غير موجود'
      }</span>
    </div>
    <div>
      <span>شاحن الجهاز : </span>
      <span className="text-green-600 font-semibold">{data.charger
=='1'?'موجود':'غير موجود'
      }</span>
    </div>
  </div>
  <div className="  ">
    <div>
      <span>معدات المركبة : </span>
      <span className="text-green-600 font-semibold">{data.tools_is_complite
=='1'?'كاملة':'ناقصة'
      }</span> 
    </div>
    {data.tools_is_complite=='0'&& <div className='mt-2'>
      <span> النواقص :  </span>
      <span className="text-green-600 font-semibold">{data.missing}</span> 
    </div>}
  </div>
  <div className="flex items-center justify-between gap-x-4  ">
    <div>
    <span>  اسم خبير سير : </span>
    <span className="text-green-600 font-semibold">{data.main_driver_name}</span>
    </div>
    <div>
    <span>الرقم الوظيفي : </span>
    <span className="text-green-600 font-semibold">{data.main_driver_job_id}</span>
    </div>
  </div>
  {data.extra_driver_name.length>5&&  <div className="flex items-center justify-between gap-x-4  ">
    <div>
      <span>  اسم خبير سير : </span>
      <span className="text-green-600 font-semibold">{data.extra_driver_name}</span>
    </div>
    <div>
      <span>الرقم الوظيفي : </span>
      <span className="text-green-600 font-semibold">{data.extra_driver_job_id}</span>
    </div>
  </div>}
</div>  )
}

export default Report