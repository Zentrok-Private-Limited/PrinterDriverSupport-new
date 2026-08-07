"use client";
import { ChevronRight, Activity, FileText, Handshake, Shield, Zap, ShieldAlert, BookOpen, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HPSupportHome() {
  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      
      {/* HEADER COMPONENT */}
      <Header />

      {/* HERO TITLE CONTAINER */}
      <section className="text-center pt-10 pb-12 px-4 bg-white">
        <h1 className="text-[40px] font-medium text-black tracking-wide mb-2 font-heading">
          Welcome to Official Support
        </h1>
        <p className="text-gray-500 text-base tracking-wide font-subheading font-normal">
          How can we help?
        </p>
      </section>

      {/* MAIN CATEGORY CARDS SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <a 
          href="/hp/software-drivers" 
          className="block border border-gray-900 rounded-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <div className="w-full h-48 bg-linear-to-r from-[#0081B4] to-[#0096D6] flex items-center justify-center text-white/40 text-base font-normal font-subheading">
            <img src="/home1.webp" alt="Software and Drivers" className="w-full h-full object-cover"/>
          </div>
          <div className="p-5 h-16 flex items-center justify-between bg-white border-t border-gray-200">
            <span className="text-lg font-medium text-black font-heading">Software and Drivers</span>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Card 2 */}
        <a 
          href="/hp/printer-support" 
          className="block border border-gray-900 rounded-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-base font-normal font-subheading relative">
            <img src="/home2.avif" alt="Printer Support" className="w-full h-full object-cover"/>
          </div>
          <div className="p-5 h-16 flex items-center justify-between bg-white border-t border-gray-200">
            <span className="text-lg font-medium text-black font-heading">Printer Support</span>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Card 3 */}
        <a 
          href="/hp/computer-support" 
          className="block border border-gray-900 rounded-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow no-underline"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-base font-normal font-subheading relative">
            <img src="/home3.avif" alt="Computer Support" className="w-full h-full object-cover" />
          </div>
          <div className="p-5 h-16 flex items-center justify-between bg-white border-t border-gray-200">
            <span className="text-lg font-medium text-black font-heading">Computer Support</span>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

      </div>
    </section>

      {/* QUICK LINKS BANNER */}
      <div className="w-full bg-[#EDF4FA] border-y border-gray-900 text-[13px] py-5 px-4 mb-14">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center space-x-1 sm:space-x-4 gap-y-2 text-[#333333]">
          <span className="font-medium font-subheading text-black text-[15px]">Other product Support:</span>
          <div className="flex items-center space-x-1">
            <span className="text-[#1A74F2] text-lg">💻</span>
            <a href="/hp/software-drivers" className="text-[#1A74F2] text-sm underline hover:text-[#004466] font-subheading font-normal">Windows Driver Setup</a>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[#006699] text-lg">🖨️</span>
            <a href="/hp/printer-setup" className="text-[#1A74F2] text-sm underline hover:text-[#004466] font-subheading font-normal">Printer Driver Setup</a>
          </div>
        </div>
      </div>

      {/* ACTIONS & SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 pb-15">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Block 1 */}
          <a 
            href="/hp/software-drivers" // Add your redirection path here
            className="border border-black p-6 h-48 flex flex-col justify-between group cursor-pointer hover:bg-gray-50 transition-colors rounded-sm decoration-transparent"
          >
            <div>
              <Activity className="w-7 h-7 text-black stroke-[1.5] mb-4" />
              <p className="text-[17px] font-normal text-black leading-snug font-subheading">
                Use identification tools to find driver issues
              </p>
            </div>
            <div className="flex justify-end">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Block 2 */}
          <a 
            href="/contact" // Add your redirection path here
            className="border border-black p-6 h-48 flex flex-col justify-between group cursor-pointer hover:bg-gray-50 transition-colors rounded-sm decoration-transparent"
          >
            <div>
              <FileText className="w-7 h-7 text-black stroke-[1.5] mb-4" />
              <p className="text-[17px] font-normal text-black leading-snug font-subheading">
                Get official software and driver guides
              </p>
            </div>
            <div className="flex justify-end">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Block 3 */}
          <a 
            href="/contact" // Add your redirection path here
            className="border border-black p-6 h-48 flex flex-col justify-between group cursor-pointer hover:bg-gray-50 transition-colors rounded-sm decoration-transparent"
          >
            <div>
              <Handshake className="w-7 h-7 text-black stroke-[1.5] mb-4" />
              <p className="text-[17px] font-normal text-black leading-snug font-subheading">
                Contact us for technical guide feedback
              </p>
            </div>
            <div className="flex justify-end">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-black tracking-tight font-heading">More Support Resources</h3>
          <ul className="space-y-3.5 text-[14px] font-subheading font-normal">
            <li><a href="/hp/software-drivers" className="text-[#1A74F2] underline hover:text-[#004466]">Software & Driver Information</a></li>
            <li><a href="/contact" className="text-[#1A74F2] underline hover:text-[#004466]">Contact our team</a></li>
          </ul>
        </div>
      </div>
    </section>

      {/* VALUE PROP TRUST BADGES */}
      <section className="bg-white border-t border-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <div className="w-18 h-18 rounded-full bg-[#F4F9FD] flex items-center justify-center text-[#006699] mb-5">
              <Shield className="w-8 h-8 stroke-2" />
            </div>
            <h4 className="text-[20px] font-semibold text-black uppercase tracking-wider mb-6 font-heading">Safe & Secure</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed font-normal font-subheading">All software and driver guides are verified for security and compatibility with your hardware.</p>
          </div>

          <div className="flex flex-col items-center max-w-sm mx-auto">
            <div className="w-18 h-18 rounded-full bg-[#F4F9FD] flex items-center justify-center text-[#006699] mb-5">
              <Zap className="w-8 h-8 stroke-2" />
            </div>
            <h4 className="text-[20px] font-semibold text-black uppercase tracking-wider mb-6 font-heading">Instant Setup</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed font-normal font-subheading">Get step-by-step automated installation guides to get your devices running in minutes.</p>
          </div>

          <div className="flex flex-col items-center max-w-sm mx-auto">
            <div className="w-18 h-18 rounded-full bg-[#F4F9FD] flex items-center justify-center text-[#006699] mb-5">
              <ShieldAlert className="w-8 h-8 stroke-2" />
            </div>
            <h4 className="text-[20px] font-semibold text-black uppercase tracking-wider mb-6 font-heading">Expert Help</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed font-normal font-subheading">Our support team is available via live chat to help you solve critical installation errors.</p>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER STRIP */}
      <section className="w-full bg-[#F9F9F9] border-t border-gray-200 py-10 tracking-wide px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-gray-700">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-gray-500 stroke-2" />
            <span className="uppercase text-black font-medium font-heading text-[13px]">Find Manuals and Troubleshooting Guides</span>
          </div>
          <a href="/contact" className="uppercase text-[#006699] hover:underline flex items-center font-semibold font-heading text-[13px]">
            Contact Team <ChevronRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />

    </div>
  );
}