"use client"
import Link from "next/link"
export default function Nav(){

return <div className="p-2 rounded-lg  flex items-center bg-white md:justify-around justify-around ">
  <div className="flex items-center flex-col  justify-center rounded-lg bg-white p-2 gap-y-2 hover:bg-gray-100">
    <svg className="w-7 h-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}>
      <path d="m21.5,0H7.5c-1.378,0-2.5,1.122-2.5,2.5v4.5H0v14c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3V2.5c0-1.378-1.122-2.5-2.5-2.5ZM5,21c0,1.103-.897,2-2,2s-2-.897-2-2v-13h4v13Zm18,0c0,1.103-.897,2-2,2H5.234c.476-.531.766-1.232.766-2V2.5c0-.827.673-1.5,1.5-1.5h14c.827,0,1.5.673,1.5,1.5v18.5ZM15,7h6v1h-6v-1Zm-7,4h13v1h-13v-1Zm0,4h13v1h-13v-1Zm0,4h13v1h-13v-1ZM13,3h-5v5h5V3Zm-1,4h-3v-3h3v3Z" />
    </svg>
    <span className="text-gray-600 text-sm font-semibold text-sm">الأحداث</span>
  </div>
  <div className="flex items-center flex-col  justify-center rounded-lg bg-white p-2 gap-y-2 hover:bg-gray-100">
    <svg className="w-7 h-7 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M20.02,9.52A5.011,5.011,0,0,0,15.679,7H8.321A5.013,5.013,0,0,0,3.98,9.52l-2.058,3.6A7.022,7.022,0,0,0,1,16.594V18a4,4,0,0,0,2,3.463V22a2,2,0,0,0,4,0H17a2,2,0,0,0,4,0v-.537A4,4,0,0,0,23,18V16.594a7.007,7.007,0,0,0-.923-3.474Zm-14.3.992A3.009,3.009,0,0,1,8.321,9h7.358a3.006,3.006,0,0,1,2.6,1.512L20.277,14H3.723ZM21,18a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V16.594A5.119,5.119,0,0,1,3.036,16H5v1a1,1,0,0,0,2,0V16H17v1a1,1,0,0,0,2,0V16h1.964a5.119,5.119,0,0,1,.036.594ZM23.493,4.649A3.015,3.015,0,0,1,18.167,4H5.845a3.015,3.015,0,0,1-5.326.649C0,3.717,1.926,4.061,2.012,4a1,1,0,0,0,0-2h-1C.339,2,.387,1.552.519,1.351A3.015,3.015,0,0,1,5.845,2H18.167a3.015,3.015,0,0,1,5.326-.649c.524.932-1.407.588-1.493.649a1,1,0,0,0,0,2h1C23.673,4,23.625,4.448,23.493,4.649Z" /></svg>
    <span className="text-gray-600 text-sm font-semibold text-sm">سجلات التسليم </span>
  </div>
  <Link href="./notes" className="flex items-center flex-col  justify-center rounded-lg bg-white p-2 gap-y-2 hover:bg-gray-100">
    <svg className="w-7 h-7 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}>
      <path d="m16.5,2h-.55c-.232-1.14-1.243-2-2.45-2h-3c-1.207,0-2.218.86-2.45,2h-.55c-2.481,0-4.5,2.019-4.5,4.5v13c0,2.481,2.019,4.5,4.5,4.5h9c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm-6-1h3c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5Zm9.5,18.5c0,1.93-1.57,3.5-3.5,3.5H7.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h.55c.232,1.14,1.242,2,2.45,2h3c1.208,0,2.217-.86,2.45-2h.55c1.93,0,3.5,1.57,3.5,3.5v13Z" /></svg>
    <span className="text-gray-600 text-sm font-semibold text-sm">الملاحظات</span>
  </Link>
</div>
}