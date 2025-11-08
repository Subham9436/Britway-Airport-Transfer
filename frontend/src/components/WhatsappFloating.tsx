import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Online Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-20 left-0 z-9999 bg-red-700 text-white px-4 py-2 rounded-r-lg shadow-lg font-semibold cursor-pointer"
      >
        Online
      </div>

      {/* Floating whatsapp icon */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B447418352160&text&type=phone_number&app_absent=0"
        target="_blank"
        className="fixed bottom-20 right-4 z-9999 shadow-lg cursor-pointer"
      >
        <img src="/whatsapp.png" alt="whatsapp" className="w-14 h-14" />
      </a>

      {/* Chat Popup Iframe (like Tawk style) */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[400px] h-[500px] bg-white rounded-xl shadow-2xl z-[99999] overflow-hidden">
          <div
            className="absolute top-2 right-2 text-black font-bold cursor-pointer text-xl"
            onClick={() => setOpen(false)}
          >
            ×
          </div>

          <iframe
            src="YOUR_IFRAME_CHAT_URL_HERE"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      )}
    </>
  );
}
