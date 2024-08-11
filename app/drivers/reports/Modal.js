
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Report from "./Report";

export default function InformationModal ({report}) {
  const [openModal, setOpenModal] = useState(false);
  // const date =new Date(data.date).toLocaleDateString()

  return (
    <>
   
{/* 
        <div onClick={() => setOpenModal(true)} className="flex items-center justify-around border rounded-lg py-2 text-sm text-gray-700 my-3" key={data.id}> */}
        <th onClick={() => setOpenModal(true)} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
<div>        {report.report_no}
</div>
        </th>
       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">
      <div className="text-center font-semibold">رقم الحدث: {report.report_no}</div>

      <div> التاريخ: {new Date(report.date).toLocaleString()}</div>
          <div> الفترة: {report.period}</div>
          <div> الدورية: {report.nida}</div>
          <div>نوع الحدث: {report.report_type}</div>
          <div>مصدر الحدث: {report.source_name}</div>
          <div className="flex justify-center items-center text-xs gap-x-4 font-semibold bg-gray-100 rounded-lg py-3 shadow-md">
          <div>الاستلام: {report.start}</div>
          <div>الوصول: {report.arrive}</div>
          <div>الانتهاء: {report.finish}</div>
          </div>
          <div>الشارع: {report.street_name}</div>
          <div>الوصف: {report.description}</div>
          <div>الملاحظات: {report.note}</div>
      </div>
   </Modal.Body>
    
      </Modal>
    </>
  );
}


