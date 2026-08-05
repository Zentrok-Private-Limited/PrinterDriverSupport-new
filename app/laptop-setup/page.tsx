"use client";

import React, { useState, useEffect, useRef } from "react";
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

export default function LaptopSetupPage() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleSelection = (productName: string) => {
    setInputValue(productName);
    setShowDropdown(false);
    const urlSafeName = encodeURIComponent(productName.trim().replace(/\s+/g, "-"));
    router.push(`/download/${urlSafeName}`);
  };


  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      {/* 1. TOP HEADER COMPONENT */}
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

      {/* 3. WELCOME TITLE BANNER & PRODUCT TOGGLE SELECTION COMPONENT */}
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
                href="/printer-setup"
                className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-4.5 h-4.5" />
              </a>

              {/* Laptop (Active Circle Theme Highlight) */}
              <a
                href="/laptop-setup"
                className="w-10 h-10 rounded-full border border-gray-200 bg-[#3A76D2] text-white flex items-center justify-center"
              >
                <Laptop className="w-4.5 h-4.5" />
              </a>

              {/* Desktop Monitor */}
              <a
                href="/desktop-setup"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Monitor className="w-4.5 h-4.5" />
              </a>

              {/* Accessories / Headset */}
              <a
                href="/audio-setup"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Headphones className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IDENTIFICATION WORKSPACE SUB-GRID SYSTEM */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-gray-200 pb-16">
          
          {/* Left Block: Search Entry Form */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-[34px] font-normal text-black tracking-wide font-heading">
              Let's identify your laptop
            </h2>

            <div className="space-y-3">
              <label className="block text-[15px] font-normal text-gray-800">
                Enter your serial number, product number or product name
              </label>

              {/* Dropdown Layout Container Wrapper */}
              <div className="relative max-w-xl">
                <div className="relative flex items-center border border-gray-400 bg-white px-5 h-11 rounded-lg focus-within:border-gray-600 transition-colors">
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
                    className="w-full pr-10 text-[16px] text-black placeholder-gray-400 focus:outline-none font-subheading font-normal bg-transparent tracking-wide"
                  />
                  <button 
                    onClick={() => inputValue.trim() !== "" && handleSelection(inputValue)}
                    className="absolute right-4 text-gray-500 hover:text-black transition-colors"
                  >
                    <Search className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Scanner Helper Link Option */}
            <div className="pt-2">
              <button
                onClick={() => handleSelection("Laptop Detected")}
                className="inline-flex items-center space-x-2 text-[#006699] font-medium hover:underline text-[14px]"
              >
                <Scan className="w-4 h-4 text-[#3A76D2]" />
                <span>Find your laptop model</span>
              </button>
            </div>
          </div>

          {/* Right Block: Explanatory Visual Guide Component */}
          <div className="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10 space-y-4">
            <h3 className="text-[15px] font-medium text-black font-heading">
              Examples of where to find your product name
            </h3>

            <div className="bg-white p-4 space-y-3 max-w-xl">
              <img src="/laptop-setup2.png" alt="Laptop Label Location Specimen" />
            </div>
          </div>

        </div>
      </section>

      {/* 5. POPULAR GRID DIRECTORY BLOCK SELECTION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-[26px] font-normal text-black tracking-wide font-heading">
          Or select your product from popular laptops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 text-[14px]">

  {/* Column 1 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handleSelection("Dell XPS 13")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Dell XPS 13
    </button>

    <button
      onClick={() => handleSelection("HP Spectre x360")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      HP Spectre x360
    </button>

    <button
      onClick={() => handleSelection("Lenovo ThinkPad X1 Carbon")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Lenovo ThinkPad X1 Carbon
    </button>
  </div>

  {/* Column 2 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handleSelection("Apple MacBook Air M3")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Apple MacBook Air M3
    </button>

    <button
      onClick={() => handleSelection("ASUS Zenbook 14 OLED")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      ASUS Zenbook 14 OLED
    </button>

    <button
      onClick={() => handleSelection("Acer Aspire 5")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Acer Aspire 5
    </button>
  </div>

  {/* Column 3 */}
  <div className="space-y-3.5">
    <button
      onClick={() => handleSelection("MSI Katana 15")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      MSI Katana 15
    </button>

    <button
      onClick={() => handleSelection("Samsung Galaxy Book5 Pro")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Samsung Galaxy Book5 Pro
    </button>

    <button
      onClick={() => handleSelection("Lenovo IdeaPad Slim 5")}
      className="text-[#006699] hover:underline font-medium block text-left"
    >
      Lenovo IdeaPad Slim 5
    </button>
  </div>

</div>
      </section>

      {/* 7. BOTTOM STICKY GENERAL LEGAL INFRASTRUCTURE STRIP FOOTER */}
      <Footer />
    </div>
  );
}