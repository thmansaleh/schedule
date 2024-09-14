
"use client";

import {  Drawer } from "flowbite-react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Logout from "./Logout";
// import Logout from "./Logout";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);
const dispatch=useDispatch()
// const account =useSelector(state=>state.account.account)
  const handleClose = () => setIsOpen(false);

  return (
    <>
    <button onClick={() => setIsOpen(true)}  id="dropdownButton" data-dropdown-toggle="dropdown" className=" fixed top-3 right-3 inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
  <span className="sr-only">Open dropdown</span>
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
</button>
    
      <Drawer className="" dir="rtl" open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="القائمة" titleIcon={() => <></>} />
        <div>

        </div>
       
            <div className="flex h-full flex-col  font-semibold text-sm text-gray-500 py-2 gap-y-4">
         
             <Logout/>
            </div>
      </Drawer>
    </>
  );
}
