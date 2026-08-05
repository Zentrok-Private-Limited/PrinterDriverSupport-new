"use client";

import React, { useState } from "react";
import { Headphones, MessageSquare, Mail, ShieldCheck, ChevronDown, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactSupportPage() {
  const [category, setCategory] = useState("");

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] antialiased text-[#333333] font-subheading font-normal text-[15px]">
      
      {/* 1. TOP HEADER COMPONENT */}
      <Header />

      {/* 2. HERO CALLOUT SECTION */}
      <section className="w-full bg-white pt-12 pb-14 px-6 text-center border-b border-gray-100">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          
          {/* Centered Glowing Headset Circle */}
          <div className="w-20 h-20 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6 shadow-sm ring-8 ring-[#F1F5FE]">
            <Headphones className="w-9 h-9 text-[#3A76D2] stroke-[1.75]" />
          </div>

          <h1 className="text-[42px] font-bold text-[#0F172A] tracking-tight mb-4 font-heading">
            Contact Support
          </h1>
          
          <p className="text-[17px] text-[#475569] font-normal leading-relaxed max-w-xl">
            Need help with your drivers or installation? Fill out the form below and our technical team will assist you.
          </p>
        </div>
      </section>

      {/* 3. MAIN WORKSPACE TWO-COLUMN GRID */}
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR: SUPPORT CHANNELS & VERIFIED INFO BLOCK */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-wider font-heading mb-6">
                Support Channels
              </h3>

              <div className="space-y-6">
                {/* Channel 1: Live Chat */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#3A76D2] shadow-sm flex-shrink-0">
                    <MessageSquare className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-black font-heading">Live Chat</h4>
                    <button onClick={openChat} className="text-[14px] text-[#3A76D2] font-medium hover:underline block mt-0.5">
                      Start Chatting Now
                    </button>
                  </div>
                </div>

                {/* Channel 2: Email Support */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#3A76D2] shadow-sm flex-shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-black font-heading">Email Support</h4>
                    <span className="text-[14px] text-[#3A76D2] block mt-0.5">
                      info@printerassistance.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue Verified Information Card */}
            <div className="bg-[#EDF5FF] border border-[#D0E3FF] rounded-sm p-6 space-y-3">
              <div className="flex items-center space-x-2 text-[#1A56DB]">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
                <span className="text-[13px] font-bold uppercase tracking-wider font-heading">
                  Verified Help
                </span>
              </div>
              <p className="text-[14px] text-[#2F4F7A] leading-relaxed font-subheading">
                Our experts provide direct guidance for resolving 0x800 error codes and driver compatibility issues.
              </p>
            </div>
          </div>

          {/* RIGHT CONTAINER: CORE INTERACTIVE INPUT TICKET FORM */}
          <div className="lg:col-span-8 bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-sm p-8 md:p-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-black uppercase tracking-wider font-heading">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 h-12 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-black uppercase tracking-wider font-heading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 h-12 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Category Select */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-black uppercase tracking-wider font-heading">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone (Optional)"
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 h-12 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-black uppercase tracking-wider font-heading">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-sm px-4 h-12 text-[15px] text-gray-800 appearance-none focus:outline-none focus:border-gray-500 transition-colors cursor-pointer font-subheading"
                    >
                      <option value="" disabled hidden>Select Category</option>
                      <option value="drivers">Printer Support</option>
                      <option value="printer">Laptop Support</option>
                      <option value="hardware">Desktop Support</option>
                      <option value="other">Audio & Accessories</option>
                      <option value="other">Driver Download Issues</option>
                      <option value="other">Installation Error</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Issue Description Box */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-black uppercase tracking-wider font-heading">
                  Describe Your Issue
                </label>
                <textarea
                  rows={5}
                  placeholder="Please provide your product model and a description of the problem..."
                  className="w-full bg-white border border-gray-300 rounded-sm p-4 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-0 transition-colors resize-none font-subheading leading-relaxed"
                ></textarea>
              </div>

              {/* Row 4: Submit Button Alignment Block */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-black text-white text-[14px] font-bold tracking-wider uppercase px-8 h-12 rounded-sm hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2 font-heading shadow-sm"
                >
                  <span>Submit Request</span>
                  <Send className="w-4 h-4 transform rotate-45 ml-1" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>

      {/* 5. BOTTOM FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}