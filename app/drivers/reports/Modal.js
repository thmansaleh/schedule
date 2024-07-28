
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Report from "./Report";

export default function InformationModal ({data}) {
  const [openModal, setOpenModal] = useState(false);
  const date =new Date(data.date).toLocaleDateString()

  return (
    <>
   

        <div onClick={() => setOpenModal(true)} className="flex items-center justify-around border rounded-lg py-2 text-sm text-gray-700 my-3" key={data.id}>
        {/* {e.nidaa} */}
        
        <div>التاريخ :  {date}</div>
        <div>دورية :  {data.car_id}</div>
        <div>نداء :  {data.nidaa}</div>
                </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
<Report data={data}/>     
   </Modal.Body>
        {/* <Modal.Footer className="flex gap-x-4">
          <Button onClick={() => setOpenModal(false)}>تسليم</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            الغاء
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}


