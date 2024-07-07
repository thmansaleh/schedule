
// 'use client'
// import  { useState } from "react";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Textarea,
// } from "@material-tailwind/react";
// import { addNote } from "@/app/services/addNote";
 
// export function AddNoteModal({userId}) {
//   const [open, setOpen] = useState(false);
//   const [note, setNote] = useState('');
 
//   const handleOpen = () => {
//       setOpen(!open)
//   };
//   const save = () => {
//       if (note.length>4) {
//         addNote(userId,note)
//         toast.success('تم اضافة الملاحظة بنجاح', {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light"
//       });
        
//       }else{
//         toast.error('يجب ان لايقل عدد الاحرف عن 5 احرف', {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light"
//       });
//       }
//       setOpen(!open)
//   };
  
 
//   return (
//     <>
// <ToastContainer
// position="top-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={true}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"

// />
//       <Button className="w-full bg-yellow-500  " onClick={handleOpen} >
//         اضافة ملاحظة
//       </Button>
//       <Dialog open={open} handler={handleOpen}>
//         <DialogHeader>اضافة ملاحظة جديدة</DialogHeader>
//         <DialogBody>
// <div className="py-4">
// <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="w-full rounded-lg ring-2 ring-gray-400 h-24 outline-none p-2"  />

//     </div>      
//       </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleOpen}
//             className="mx-3"
//           >
//             <span>الغاء</span>
//           </Button>
//           <Button className="bg-green-600 text-white" variant="gradient" color="green" onClick={save}>
//             <span>حفظ</span>
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </>
//   );
// }

"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Component() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

