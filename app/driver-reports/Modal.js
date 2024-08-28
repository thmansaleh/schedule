
"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import SearchInput from "../drivers/SearchInput";
import PlatesModal from "./PlatesModal";

export default function InformationModal ({report}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
   
        <th onClick={() => setOpenModal(true)} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
<div>        {report.report_no}
</div>
        </th>
       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">
      <div className="text-center font-semibold">
        <span className="text-green-500 font-semibold">

        رقم الحدث
        </span>
        
        : {report.report_no}</div>

      <div>
        <span className="text-green-500 font-semibold">

         التاريخ
        </span>
         : {new Date(report.date).toLocaleString()}</div>
          <div> <span className="text-green-500 font-semibold">الفترة</span>: {report.period}</div>
          <div> <span className="text-green-500 font-semibold">
            الدورية
            </span>
            : {report.nida}</div>
            
          <div>
            <span className="text-green-500 font-semibold">

            نوع الحدث
            </span>
            
            : {report.report_type}</div>
          <div>
            <span className="text-green-500 font-semibold">
              
            مصدر الحدث
            </span>
            
            : {report.source_name}</div>
          <div className="flex justify-center items-center text-xs gap-x-4 font-semibold bg-gray-100 rounded-lg py-3 shadow-md">
          <div>الاستلام: {report.start}</div>
          <div>الوصول: {report.arrive}</div>
          <div>الانتهاء: {report.finish}</div>
          </div>


          <div>
            <span className="text-green-500 font-semibold">
              
            الشارع
            </span>
            
            : {report.street_name}</div>


          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            عدد المسارات المغلقة
            </span>
            
            :
            <TextInput className="w-20"  type="number" />
            </div>

          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            مسار توقف المركبة
            </span>
            
            :
            <TextInput className="w-20"  type="text" />
            </div>
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            مسار توقف المركبة
            </span>
            
            :
            <TextInput className="w-20"  type="text" />
            </div>




          <div>
            <span className="text-green-500 font-semibold">
              
            الوصف
            </span>
            : {report.description}</div>
          <div>
            <span className="text-green-500 font-semibold">
              
            ملاحظات العمليات
            </span>
            
            : {report.note_police}</div>
            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الملاحظات
            </span>
            
            :
            <TextInput className="w-36"  type="text" />
            </div>
            <PlatesModal/>

      </div>
   </Modal.Body>
   <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>تحديث</Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


