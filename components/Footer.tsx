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
  <div className="max-w-7xl mx-auto">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

      <h3 className="text-3xl font-bold mb-6">
        Disclaimer
      </h3>

      <div className="space-y-6 text-gray-300 leading-7">

      <div className="space-y-4 text-[15px] leading-7 text-gray-300">
  <p>
    <strong>Printer Assistance</strong> is an independent technical support provider operated by Printer Service LLC. We are not affiliated with, endorsed by, sponsored by, or authorized by HP, Canon, Epson, Brother, Xerox, Lexmark, Dell, Ricoh, Kyocera, Samsung, or any other printer manufacturer. All trademarks, logos, and brand names belong to their respective owners and are used solely for identification purposes.
  </p>
</div>
       
      </div>

      {/* Badge */}
      <div className="inline-flex items-center justify-center rounded-md bg-[#1955B4] px-8 py-3 mt-8">
        <span className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white">
          Independent Guidance
        </span>
      </div>

    </div>
  </div>

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