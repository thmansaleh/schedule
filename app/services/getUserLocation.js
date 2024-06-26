function getUserLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                callback({ latitude: latitude, longitude: longitude });
            }
        );
    } else {
        callback(null);
    }
}

// استخدام الدالة واستقبال الموقع
getUserLocation(function(location) {
    if (location) {
        console.log("Latitude: " + location.latitude + ", Longitude: " + location.longitude);
        // يمكنك تنفيذ المزيد من الإجراءات باستخدام الموقع هنا
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});
