import React from "react";

export default function Footer() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <>

      {/* Footer */}
      {/* Footer */}
<footer className="w-full bg-black text-white py-8 px-4 text-sm">

  {/* Bottom Footer */}
  <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
    <span className="text-gray-400 text-sm">
      © {new Date().getFullYear()} PRINTER ASSISTANCE. All Rights Reserved.
    </span>

    <div className="flex flex-wrap justify-center gap-6 font-medium text-sm">
      <a href="software-drivers" className="hover:text-white transition">
        SOFTWARE & DRIVERS
      </a>

      <a href="printer-support" className="hover:text-white transition">
        PRINTER SUPPORT
      </a>

      <a href="computer-support" className="hover:text-white transition">
        COMPUTER SUPPORT
      </a>

      <button
        onClick={openChat}
        className="text-[#1955B4] hover:text-[#4f86df] transition"
      >
        LIVE CHAT
      </button>
    </div>
  </div>
</footer>
    </>
  );
}