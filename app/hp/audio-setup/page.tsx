"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ChevronRight,
  Printer,
  Laptop,
  Monitor,
  Headphones,
  MessageSquare,
  Scan,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AccessoriesSetupPage() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      // Replaces spaces with dashes for clean dynamic routing paths
      const urlSafeName = encodeURIComponent(inputValue.trim().replace(/\s+/g, "-"));
      router.push(`hp/download/${urlSafeName}`);
    }
  };
  const handlePopularClick = (name: string) => {
    const urlSafeName = encodeURIComponent(name.trim().replace(/\s+/g, "-"));
    router.push(`hp/download/${urlSafeName}`);
  };

   const handleSelection = (productName: string) => {
    setInputValue(productName);
    setShowDropdown(false);
    const urlSafeName = encodeURIComponent(productName.trim().replace(/\s+/g, "-"));
    router.push(`/hp/download/${urlSafeName}`);
  };

  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      {/* 1. TOP GLOBAL NAVIGATION HEADER */}
      <Header />

      {/* 2. SUB-STEPS MULTI-STAGE PROGRESS BAR */}
      <div className="w-full bg-[#FAFAFA] border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 text-[14px]">
          {/* Active Step 1 */}
          <div className="flex items-center space-x-2 text-black font-semibold">
            <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] flex items-center justify-center font-bold font-heading">
              1
            </span>
            <span>Identify</span>
          </div>

          <ChevronRight className="w-3 h-3 text-gray-400" />

          {/* Inactive Step 2 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="w-5 h-5 rounded-full border border-gray-300 text-gray-400 text-[11px] flex items-center justify-center font-medium font-heading">
              2
            </span>
            <span>Download</span>
          </div>

          <ChevronRight className="w-3 h-3 text-gray-400" />

          {/* Inactive Step 3 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="w-5 h-5 rounded-full border border-gray-300 text-gray-400 text-[11px] flex items-center justify-center font-medium font-heading">
              3
            </span>
            <span>Install</span>
          </div>
        </div>
      </div>

      {/* 3. WELCOME TITLE BANNER & ACTIVE AUDIO/ACCESSORIES TOGGLE */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-8 gap-4">
          <h1 className="text-[28px] md:text-[32px] font-normal text-[#008040] font-heading tracking-wide">
            Welcome to Software and Drivers
          </h1>

          <div className="flex items-center space-x-3">
            <span className="text-[14px] text-gray-700 font-medium">
              Select a different product type:
            </span>

            <div className="flex items-center space-x-2.5">
              {/* Printer */}
              <a
                href="/hp/printer-setup"
                className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-[18px] h-[18px]" />
              </a>

              {/* Laptop */}
              <a
                href="/hp/laptop-setup"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Laptop className="w-[18px] h-[18px]" />
              </a>

              {/* Desktop Monitor */}
              <a
                href="/hp/desktop-setup"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Monitor className="w-[18px] h-[18px]" />
              </a>

              {/* Accessories / Headset (Active Circle Theme Highlight) */}
              <a
                href="/hp/audio-setup"
                className="w-10 h-10 rounded-full border bg-[#3A76D2] border-gray-200 text-white flex items-center justify-center transition-colors"
              >
                <Headphones className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IDENTIFICATION SEARCH WORKSPACE */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-200 pb-16">
          {/* Left Input Section */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-[32px] font-normal text-black tracking-wide font-heading">
              Identify your audio or other product
            </h2>

            <div className="space-y-3">
              <label className="block text-[15px] font-normal text-gray-800">
                Enter your serial number, product number or product name
              </label>

              <div className="relative max-w-[480px]">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSelection(inputValue);
                }
              }}
                  placeholder="Enter your serial number, product number or product name"
                  className="w-full bg-white border border-gray-400 rounded-lg pl-5 pr-12 h-11 text-[16px] text-black tracking-wide focus:outline-none focus:border-gray-600 placeholder-gray-400"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-4 top-3 text-gray-500 hover:text-black transition-colors"
                >
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handlePopularClick("Accessory Detected")}
                className="inline-flex items-center space-x-2 text-[#006699] font-medium hover:underline text-[14px]"
              >
                <Scan className="w-4 h-4 text-[#3A76D2]" />
                <span>Find your product model</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Carousel Preview Section */}
          <div className="lg:col-span-6 lg:border-l lg:border-gray-200 lg:pl-8 relative">
            <h3 className="text-[15px] font-medium text-black font-heading mb-4">
              Examples of where to find your product name
            </h3>

            <div className="flex items-center">
              <img src="/audio-setup2.png" alt="Hardware tag labeling chart configuration layout" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR PERIPHERALS DIRECTORY LISTINGS */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-[26px] font-normal text-black tracking-wide font-heading">
          Or select from popular accessories and peripherals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 text-[14px]">

  {/* Column 1 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handlePopularClick("Logitech MX Master 3S")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Logitech MX Master 3S
    </button>

    <button
      onClick={() => handlePopularClick("HyperX Cloud III Gaming Headset")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      HyperX Cloud III Gaming Headset
    </button>

    <button
      onClick={() => handlePopularClick("Dell WD22TB4 Thunderbolt Dock")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Dell WD22TB4 Thunderbolt Dock
    </button>
  </div>

  {/* Column 2 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handlePopularClick("Logitech MX Keys S")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Logitech MX Keys S
    </button>

    <button
      onClick={() => handlePopularClick("Poly Voyager Focus 2")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Poly Voyager Focus 2
    </button>

    <button
      onClick={() => handlePopularClick("HP USB-C Dock G5")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      HP USB-C Dock G5
    </button>
  </div>

  {/* Column 3 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handlePopularClick("Razer Kiyo Pro Webcam")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Razer Kiyo Pro Webcam
    </button>

    <button
      onClick={() => handlePopularClick("Microsoft Modern Webcam")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Microsoft Modern Webcam
    </button>

    <button
      onClick={() => handlePopularClick("Anker 777 Thunderbolt Dock")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Anker 777 Thunderbolt Dock
    </button>
  </div>

</div>
      </section>
      {/* 7. STANDARD HP COMPLIANT FOOTER */}
      <Footer />
    </div>
  );
}