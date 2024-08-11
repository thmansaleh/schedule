

"use client"
import Link from "next/link"
export default function Home(){
  

const data =[


{
name:"خبراء السير",
icon:<svg className="w-7 h-7 fill-gray-400" height={512} viewBox="0 0 24 24" width={512} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm6.5 11h-13a1 1 0 0 1 -1-1v-.5a7.5 7.5 0 0 1 15 0v.5a1 1 0 0 1 -1 1zm3.5-15a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm-1.421 2.021a6.825 6.825 0 0 0 -4.67 2.831 9.537 9.537 0 0 1 4.914 5.148h6.677a1 1 0 0 0 1-1v-.038a7.008 7.008 0 0 0 -7.921-6.941z" /></svg>,
route:"./drivers"
},

// {
// name:"أفراد العمليات",
// icon:<svg className="w-7 h-7 fill-gray-400" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
//   <path d="m8.5,9.5c0,.551.128,1.073.356,1.537-.49.628-.795,1.407-.836,2.256-.941-.988-1.52-2.324-1.52-3.792,0-3.411,3.122-6.107,6.659-5.381,2.082.428,3.769,2.105,4.213,4.184.134.628.159,1.243.091,1.831-.058.498-.495.866-.997.866h-.045c-.592,0-1.008-.527-.943-1.115.044-.395.021-.81-.08-1.233-.298-1.253-1.32-2.268-2.575-2.557-2.286-.525-4.324,1.207-4.324,3.405Zm-3.89-1.295c.274-1.593,1.053-3.045,2.261-4.178,1.529-1.433,3.531-2.141,5.63-2.011,3.953.256,7.044,3.719,6.998,7.865-.019,1.736-1.473,3.118-3.208,3.118h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.819,0,5.168-2.245,5.208-5.063C21.573,4.715,17.651.345,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.499,1.405-2.496,3.265-2.855,5.266-.109.608.372,1.166.989,1.166.472,0,.893-.329.972-.795Zm7.39,8.795c-3.695,0-6.892,2.292-7.955,5.702-.165.527.13,1.088.657,1.253.526.159,1.087-.131,1.252-.657.789-2.53,3.274-4.298,6.045-4.298s5.257,1.768,6.045,4.298c.134.428.528.702.955.702.099,0,.198-.015.298-.045.527-.165.821-.726.657-1.253-1.063-3.41-4.26-5.702-7.955-5.702Z" />
// </svg>,
// route:"./operations"
// },

// {
// name:"الشفتات",
// icon:<svg className="w-7 h-7 fill-gray-400" viewBox="0 0 24 24" width={512} height={512}><path d="M17.5,11.039c-3.584,0-6.5,2.916-6.5,6.5,0,3.563,2.916,6.461,6.5,6.461s6.5-2.916,6.5-6.5c0-3.563-2.916-6.461-6.5-6.461Zm0,11.961c-3.032,0-5.5-2.45-5.5-5.461,0-3.033,2.468-5.5,5.5-5.5s5.5,2.45,5.5,5.461c0,3.033-2.468,5.5-5.5,5.5Zm1.354-4.854c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-1-1c-.094-.094-.146-.221-.146-.354v-2c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.793l.854,.854Zm.646-16.146h-1.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5H7V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5h-1.5C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V9H23v1.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,8v-1.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1Z" /></svg>,
// route:"./shifts"
// },
// {
// name:"المشرفين",
// icon:<svg className="w-7 h-7 fill-gray-400" viewBox="0 0 24 24">
//   <path d="m12,10c2.757,0,5-2.243,5-5S14.757,0,12,0s-5,2.243-5,5,2.243,5,5,5Zm2.413,1.38c2.639.839,4.689,3.011,5.352,5.724.111.454-.232.896-.7.896h-5.352l-1.116-3.897,1.816-2.723Zm-10.179,5.724c.663-2.713,2.713-4.885,5.352-5.724l1.816,2.723-1.116,3.897h-5.352c-.468,0-.81-.442-.7-.896Zm19.766,3.896c0,.552-.448,1-1,1h-1v1c0,.552-.448,1-1,1H3c-.552,0-1-.448-1-1v-1h-1c-.552,0-1-.448-1-1s.448-1,1-1h22c.552,0,1,.448,1,1Z" />
// </svg>,
// route:"./admins"
// },
{
name:"الجدول",
icon:<svg className="w-7 h-7 fill-gray-400" viewBox="0 0 24 24" width={512} height={512}><path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm0-8c0,.552-.447,1-1,1H6c-.553,0-1-.448-1-1s.447-1,1-1h12c.553,0,1,.448,1,1Zm-7,4c0,.552-.447,1-1,1H6c-.553,0-1-.448-1-1s.447-1,1-1h5c.553,0,1,.448,1,1Z" /></svg>,
route:"./select-shift"
},
// {
// name:"الدوريات",
// icon:<svg className="w-7 h-7 fill-gray-400"  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M23.891,6.454a1,1,0,0,1-1.346.437L13.752,2.4a4.02,4.02,0,0,0-3.517.007l-8.78,4.48a1,1,0,0,1-.91-1.782L9.339.623A6.043,6.043,0,0,1,14.648.616l8.807,4.493A1,1,0,0,1,23.891,6.454ZM22.078,13.12A7.022,7.022,0,0,1,23,16.594V18a4,4,0,0,1-2,3.463V22a2,2,0,0,1-4,0H7a2,2,0,0,1-4,0v-.537A4,4,0,0,1,1,18V16.594a7.022,7.022,0,0,1,.922-3.474L3.98,9.52A5.013,5.013,0,0,1,8.321,7h7.358A5.013,5.013,0,0,1,20.02,9.52ZM3.723,14H20.277l-1.993-3.488A3.009,3.009,0,0,0,15.679,9H8.321a3.009,3.009,0,0,0-2.6,1.512ZM21,16.594A5.119,5.119,0,0,0,20.964,16H19v1a1,1,0,0,1-2,0V16H7v1a1,1,0,0,1-2,0V16H3.036A5.119,5.119,0,0,0,3,16.594V18a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2Z" /></svg>,
// route:"./cars"
// }



]
  return <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="flex gap-10 p-4 items-center justify-center flex-wrap ">
{data.map((e,i)=>{
 return   <Link href={e.route} key={i} className="w-24  h-24 bg-white  rounded-lg flex items-center
shadow-lg p-4 hover:mb-4  justify-around flex-col ">
{e.icon}

    <span className="text-sm font-semibold ">{e.name}</span>
    
    </Link>

})}


</div>
{/* <Location/> */}
  </div>

}