// function getUserLocation(callback) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 callback({ latitude: latitude, longitude: longitude });
//             }
//         );
//     } else {
//         callback(null);
//     }
// }

// // دالة لتحديث الموقع كل 30 ثانية
//  export function updateLocation() {
//     getUserLocation(function(location) {
//         if (location) {
//             // console.log("Latitude: " + location.latitude + ", Longitude: " + location.longitude);
//             // يمكنك تنفيذ المزيد من الإجراءات باستخدام الموقع هنا
//             return `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     });
// }

// // استدعاء الدالة مرة كل 30 ثانية
// // setInterval(updateLocation, 30000);

// // استدعاء أولي للحصول على الموقع فورًا
// //  updateLocation();
