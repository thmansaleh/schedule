export function getTodayNameInArabic() {
    const daysOfWeekInArabic = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    const today = new Date();
    return daysOfWeekInArabic[today.getDay() +1];
}

