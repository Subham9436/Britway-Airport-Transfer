// src/components/GoogleTagManager.tsx
import React, { useEffect } from "react";

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ gtmId }) => {
  useEffect(() => {
    if (!gtmId) return;

    // Prevent multiple script inserts
    if (document.getElementById("gtm-script")) return;

    // Create GTM script tag dynamically
    const script = document.createElement("script");
    script.id = "gtm-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
    });

    return () => {
      // Optional cleanup if you unmount dynamically
      script.remove();
    };
  }, [gtmId]);

  // Noscript fallback for browsers without JS
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
};

export default GoogleTagManager;
