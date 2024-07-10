

import { Button, Datepicker } from "flowbite-react";

export default function Content() {
  return <div className="p-3 flex flex-col gap-y-4  ">
    <div className="flex items-center gap-x-4 justify-center">
      <div>من</div>
      <Datepicker language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>
    <div className="flex items-center gap-x-4 justify-center ">
      <div>الئ</div>
      <Datepicker language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>

    <Button>عرض</Button>
    <div className="text-center font-semibold text-gray-700">لا توجد اي بيانات</div>
  </div>
  }
