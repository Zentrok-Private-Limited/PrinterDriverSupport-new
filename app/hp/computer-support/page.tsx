"use client";

import React from "react";
import { ChevronRight, Download, ShieldCheck, User, MessageSquare, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComputerSupportPage() {
  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      
      {/* 1. TOP HEADER COMPONENT */}
      <Header />

      {/* 2. SUB HEADER TAB TITLE */}
      <div className="w-full bg-white border-b border-gray-200 py-3.5 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[15px] font-bold text-[#333333] uppercase tracking-wider font-heading">
            Computer Support
          </h1>
        </div>
      </div>

      {/* 3. FOUR-COLUMN INNER ACTION SUB-NAV STRIP */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          
          <a href="/laptop-setup" className="py-5 px-4 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-gray-400 mb-2 group-hover:text-[#3A76D2]" />
            <span className="text-[13px] text-[#1A74F2] font-medium group-hover:underline flex items-center">
              Download drivers <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>

          <a href="/contact" className="py-5 px-4 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors">
            <ShieldCheck className="w-5 h-5 text-gray-400 mb-2 group-hover:text-[#3A76D2]" />
            <span className="text-[13px] text-[#1A74F2] font-medium group-hover:underline flex items-center">
              Warranty & Repair <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>

          <a href="/contact" className="py-5 px-4 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors">
            <User className="w-5 h-5 text-gray-400 mb-2 group-hover:text-[#3A76D2]" />
            <span className="text-[13px] text-[#1A74F2] font-medium group-hover:underline flex items-center">
              Contact us <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>

          <a href="/contact" className="py-5 px-4 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors">
            <MessageSquare className="w-5 h-5 text-gray-400 mb-2 group-hover:text-[#3A76D2]" />
            <span className="text-[13px] text-[#1A74F2] font-medium group-hover:underline flex items-center">
              Live Assistance <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>

        </div>
      </section>

      {/* 4. MAIN HERO BANNER SET */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Computer Setup Picture Frame */}
          <div className="w-full h-[280px] rounded-sm overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
            <img 
              src="/home3.avif" 
              alt="Setting up your computer" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Setup Instructions */}
          <div className="space-y-4">
            <h2 className="text-[32px] font-normal text-black tracking-tight font-heading leading-tight">
              Setting up your computer
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed max-w-md">
              Follow step by step guidance on how to configure, protect and update your laptop or desktop computer.
            </p>
            
            <div className="pt-2">
              <a href="/laptop-setup" className="bg-[#3A76D2] text-white px-6 py-2.5 text-[15px] font-medium rounded-sm hover:bg-[#2C5EB0] transition-colors font-heading shadow-sm">
                Computer Setup
              </a>
            </div>

            <div className="pt-4 space-y-1">
              <p className="text-[13px] font-bold text-gray-900 uppercase tracking-wide">More support options for this topic:</p>
              <a href="#" className="text-[14px] text-[#1A74F2] underline hover:text-[#004466] flex items-center font-medium">
                OS Migration Support <ChevronRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. THREE COLUMN COMPUTER TROUBLESHOOTING CARDS */}
      <section className="w-full bg-white border-t border-gray-100 pt-16 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            {/* Trouble Block 1 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-16 flex items-center justify-center text-[#3A76D2] mb-5">
                <ShieldAlert className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h3 className="text-[20px] font-normal text-black mb-3 font-heading leading-snug">
                Computer slow or crashing after Windows updates?
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5 max-w-xs">
                Troubleshooting steps to optimize performance and resolve BSOD or system instability issues.
              </p>
              <a href="/laptop-setup" className="bg-[#3A76D2] text-white px-5 py-2 text-[14px] font-medium rounded-sm hover:bg-[#2C5EB0] transition-colors mb-4 font-heading">
                Fix Performance
              </a>
              <div className="text-[13px] text-gray-500 font-normal">
                <span className="block font-semibold text-gray-800 mb-0.5">More support options for this topic:</span>
                <a href="/contact" className="text-[#1A74F2] hover:underline inline-flex items-center">
                  System recovery guides <ChevronRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Trouble Block 2 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-[64px] flex items-center justify-center mb-5 overflow-hidden rounded-sm border border-gray-100 shadow-sm bg-gray-50">
                <img src="/home3.avif" alt="Audio and graphics drivers" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[20px] font-normal text-black mb-3 font-heading leading-snug">
                Find drivers for audio and graphics
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5 max-w-xs">
                Instant access to the latest BIOS, Chipset, Graphics, and Network hardware drivers.
              </p>
              <a href="/laptop-setup" className="bg-[#3A76D2] text-white px-5 py-2 text-[14px] font-medium rounded-sm hover:bg-[#2C5EB0] transition-colors mb-4 font-heading">
                Get Drivers
              </a>
              <div className="text-[13px] text-gray-500 font-normal">
                <span className="block font-semibold text-gray-800 mb-0.5">More support options for this topic:</span>
                <a href="/contact" className="text-[#1A74F2] hover:underline inline-flex items-center">
                  Manual search assistance <ChevronRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Trouble Block 3 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-[64px] bg-gradient-to-r from-[#0081B4] to-[#0096D6] rounded-sm mb-5 shadow-sm"></div>
              <h3 className="text-[20px] font-normal text-black mb-3 font-heading leading-snug">
                Run a hardware diagnostic test
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5 max-w-xs">
                Use automated tools to identify hardware failures and verify system health before installation.
              </p>
              <a href="/laptop-setup" className="bg-[#3A76D2] text-white px-5 py-2 text-[14px] font-medium rounded-sm hover:bg-[#2C5EB0] transition-colors mb-4 font-heading">
                Run Diagnostics
              </a>
              <div className="text-[13px] text-gray-500 font-normal">
                <span className="block font-semibold text-gray-800 mb-0.5">More support options for this topic:</span>
                <a href="/contact" className="text-[#1A74F2] hover:underline inline-flex items-center">
                  Professional tech support <ChevronRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONTENT BAR: COMPUTER HARDWARE LOOKUP MODULE */}
      <section className="w-full bg-[#F3F7FA] border-t border-gray-200 py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Form Input Frame Column */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-sm border-2 border-[#3A76D2] flex items-center justify-center text-[#3A76D2] flex-shrink-0 mt-1">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-[24px] font-normal text-black tracking-tight font-heading leading-tight">
                  Identify your computer for manuals and specific hardware information
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="block text-[14px] font-medium text-gray-800 font-subheading">
                Enter your serial number, product number or product name
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Example: Pavilion 15, Spectre x360"
                  className="flex-1 max-w-[380px] bg-white border border-gray-400 rounded-sm px-4 h-11 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                />
                <button
                  disabled
                  className="bg-[#D3D3D3] text-gray-500 px-6 h-11 text-base font-medium rounded-sm cursor-not-allowed font-heading flex items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a href="/laptop-setup" className="border border-[#3A76D2] text-[#3A76D2] px-5 py-2.5 text-[14px] font-medium rounded-sm hover:bg-blue-50 transition-colors font-heading">
                Or, let us help identify your computer
              </a>
            </div>
          </div>

          {/* Reference Video Links Column */}
          <div className="lg:border-l lg:border-gray-300 lg:pl-12 pt-4 lg:pt-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-gray-900 font-heading">
              Examples of where to find your product name, product number, or serial number
            </h4>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href="/contact" className="text-[#1A74F2] underline hover:text-[#004466] font-medium">
                  Locate your product's information label
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#1A74F2] underline hover:text-[#004466] font-medium">
                  How to find serial number video
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 7. BOTTOM FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}