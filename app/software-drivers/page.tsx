"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Laptop, Printer, Monitor, Headphones, HardDrive, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SoftwareDriversPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0); // Default first item open

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a driver?",
      answer: "A driver is software that allows your operating system to communicate with hardware such as printers, laptops, desktops, audio devices, USB devices, and network adapters."
    },
    {
      question: "When might I need to install or update a driver?",
      answer: "You may need to update drivers if you notice performance issues, hardware malfunctions, or after upgrading your operating system to ensure complete system compatibility."
    },
    {
      question: "What is a printer firmware update?",
      answer: "A firmware update is an internal software enhancement sent directly to your printer hardware to optimize connection stability, patch security gaps, and fix processing bugs."
    },
    {
      question: "What kind of software is available?",
      answer: "Available downloads include full-feature installation packages, diagnostic utility suites, basic stand-alone subsystem drivers, and targeted critical operating updates."
    }
  ];

  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      
      {/* 1. HEADER COMPONENT */}
      <Header />

      {/* 2. DRIVER PROGRESS STEP TIMELINE */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <div className="flex items-center space-x-4 text-[14px]">
          {/* Step 1 */}
          <div className="flex items-center space-x-2 text-black font-semibold">
            <span className="w-5 h-5 bg-black text-white text-[11px] font-bold rounded-full flex items-center justify-center">1</span>
            <span>Identify</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          {/* Step 2 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="w-5 h-5 border border-gray-400 text-[11px] font-medium rounded-full flex items-center justify-center">2</span>
            <span>Download</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />

          {/* Step 3 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="w-5 h-5 border border-gray-400 text-[11px] font-medium rounded-full flex items-center justify-center">3</span>
            <span>Install</span>
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION HEADERS */}
      <section className="max-w-6xl mx-auto px-6 pt-4 pb-12">
        <h2 className="text-[32px] font-medium text-[#2E8540] tracking-tight mb-2 font-heading">
          Welcome to Software and Drivers
        </h2>
        <h1 className="text-[36px] font-normal text-black tracking-tight font-heading">
          Select your product type below
        </h1>
      </section>

      {/* 4. RECTANGULAR PRODUCT SELECT CARDS (Exactly as image) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
        
        {/* Printer Box */}
        <a 
          href="/printer-setup" // Add your redirection link here
          className=" bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm py-10 px-4 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <Printer className="w-11 h-11 text-[#1A74F2] mb-4 stroke-[1.5]" />
          <span className="text-[17px] font-medium text-black font-heading">Printer</span>
        </a>

        {/* Laptop Box */}
        <a 
          href="/laptop-setup" // Add your redirection link here
          className=" bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm py-10 px-4 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <Laptop className="w-11 h-11 text-[#1A74F2] mb-4 stroke-[1.5]" />
          <span className="text-[17px] font-medium text-black font-heading">Laptop</span>
        </a>

        {/* Desktop Box */}
        <a 
          href="/desktop-setup" // Add your redirection link here
          className=" bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm py-10 px-4 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <Monitor className="w-11 h-11 text-[#1A74F2] mb-4 stroke-[1.5]" />
          <span className="text-[17px] font-medium text-black font-heading">Desktop</span>
        </a>

        {/* Audio Box */}
        <a 
          href="/audio-setup" // Add your redirection link here
          className=" bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm py-10 px-4 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <Headphones className="w-11 h-11 text-[#1A74F2] mb-4 stroke-[1.5]" />
          <span className="text-[17px] font-medium text-black font-heading">Audio</span>
        </a>

        {/* Other Box */}
        <a 
          href="/contact" // Add your redirection link here
          className=" bg-white border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-sm py-10 px-4 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <HardDrive className="w-11 h-11 text-[#1A74F2] mb-4 stroke-[1.5]" />
          <span className="text-[17px] font-medium text-black font-heading">Other</span>
        </a>

      </div>
    </section>

      {/* 5. ACCORDION (ABOUT DRIVERS SECTION) */}
      <section className="w-full bg-white border-t border-gray-200 pt-14 pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[30px] font-normal text-black tracking-tight mb-8 font-heading">
            About Software and Drivers
          </h3>

          <div className="space-y-1">
            {faqData.map((faq, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div key={idx} className="border-b border-gray-100 py-3">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between py-2.5 text-left text-[#1A74F2] hover:text-[#125cc4] font-normal text-[16px] font-heading transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1A74F2]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1A74F2]" />
                    )}
                  </button>
                  
                  <div
                    className={`grid transition-all duration-300 ease-in-out text-gray-600 text-[15px] leading-relaxed font-subheading font-normal ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2 pb-5" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-220 text-gray-600 font-normal">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}