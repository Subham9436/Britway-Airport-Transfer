import React from "react";

export const LocationMap: React.FC = () => {
  // Coordinates of London (you can replace with any lat/lng)
  const lat = 51.5072;
  const lng = -0.1276;
  const zoom = 7; // smaller = zoomed out, larger = zoomed in

  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md border">
      <iframe
        title="Google Map"
        src={mapUrl}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
