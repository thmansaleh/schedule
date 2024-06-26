'use client'

const Map = () => {
  const handleRedirectToMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
      }, () => null);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-4">
      <button className="w-full p-3 bg-black text-white " onClick={handleRedirectToMaps}>Show My Location on Google Maps</button>
    </div>
  );
};

export default Map;
