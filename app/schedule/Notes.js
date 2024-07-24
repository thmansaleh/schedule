
"use client";

import { List } from "flowbite-react";

export default function Notes() {
  return <div className="p-3 mt-3  text-white bg-gray-900 ">

<div className="w-full py-3 text-lg font-semibold text-center">الملاحظات</div>
    <List className="text-white">
      <List.Item>عدم العبث في اعدادات جهاز التترا</List.Item>
      <List.Item>عدم استخدام نقطة الاتصال للانترنت الشخصي</List.Item>
      <List.Item>الحضور قبل الدوام ب 20 دقيقية</List.Item>
      <List.Item>عدم استخدام مخرج الطوارئ مقابل بوابة النقل والانقاذ</List.Item>
      <List.Item>يمنع منعا باتا الدخول الئ مكاتب الشرطة واستخدام ماكينة المشروبات</List.Item>
      <List.Item>غسيل الدوريات مهمة الشفت الصباحي</List.Item>
      <List.Item>رقم عمليات الشرطة : 046095027</List.Item>
      <List.Item >رقم عمليات RTA : 042908726</List.Item>
    </List>
    </div>
}
