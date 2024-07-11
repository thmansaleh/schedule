
"use client";

import { List } from "flowbite-react";

export default function Notes() {
  return <div className="p-3 mt-3">
<div className="p-2 text-center font-semibold text-sm rounded-lg bg-black mb-3 w-44 text-white">الملاحظات</div>
    <List>
      <List.Item>عدم العبث في اعدادات جهاز التترا</List.Item>
      <List.Item>عدم استخدام نقطة الاتصال للانترنت الشخصي</List.Item>
      <List.Item>الحضور قبل الدوام ب 20 دقيقية</List.Item>
      <List.Item>عدم استخدام مخرج الطوارئ مقابل بوابة النقل والانقاذ</List.Item>
      <List.Item>يمنع منعا باتا الدخول الئ مكاتب الشرطة واستخدام ماكينة المشروبات</List.Item>
      <List.Item>غسيل الدوريات مهمة الشفت الصباحي</List.Item>
    </List>
    </div>
}
