export function period() {
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 3 && hours < 11) {
      return "الصباحية"; // Morning
    } else if (hours >= 11 && hours < 6) {
      return "المسائية"; // Afternoon
    } else if (hours >= 18 && hours < 23) {
      return "مساءً"; // Evening
    }else{
        return 'غير معروف'
    }
    
  }
  
  