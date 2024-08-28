
"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function PlatesModal ({report}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
   
        <th onClick={() => setOpenModal(true)} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
<div>       <Button>اضافة مركبات</Button>
</div>
        </th>
       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">


   



          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            رقم المركبة
            </span>
            
            :
            <TextInput className="w-20"  type="text" />
            </div>
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
مصدر  اللوحة            </span>
            
            :
            <TextInput className="w-20"  type="text" />
            </div>


      </div>
   </Modal.Body>
   <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>اضافة</Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


