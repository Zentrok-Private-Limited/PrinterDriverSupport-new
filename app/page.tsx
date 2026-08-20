"use client";

import { useState,useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type BrandId } from "@/components/brand-logos";
import { Printer} from "lucide-react";

interface PrinterBrand {
  name: string;
  logo: string;
}

interface Step {
  id: number;
  title: string;
  description: string[];
  subDescription?: string;
}

const printerBrands: PrinterBrand[] = [
  { name: "HP", logo: "/hp.png" },
  { name: "Canon", logo: "/canon.png" },
  { name: "Brother", logo: "/brother.png" },
  { name: "Epson", logo: "/epson.png" },
];

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "hp", label: "HP", path: "/hp" },
  { id: "epson", label: "Epson", path: "/printer/epson" },
  { id: "brother", label: "Brother", path: "/printer/brother" },
  { id: "canon", label: "Canon", path: "/printer/canon" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Restart the printer",
    description: [
      "Power the printer off, unplug it for 20–30 seconds, then turn it back on.",
      "This resets internal states and clears temporary errors.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 2,
    title: "Verify connection",
    description: [
      "For USB: reconnect the cable or try another port.",
      "For Wi-Fi: confirm both devices are on the same network.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 3,
    title: "Confirm selected device",
    description: [
      "Ensure the correct printer is selected and set as default.",
      "This is important if multiple printers are installed.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 4,
    title: "Clear pending jobs",
    description: [
      "Remove stuck or pending print jobs from the queue.",
      "Restart the print service if needed.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 5,
    title: "Run system diagnostics",
    description: [
      "Use the built-in printer diagnostics tool.",
      "Check for offline status or port issues.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 6,
    title: "Update the driver",
    description: [
      "Install the latest compatible printer driver.",
      "Reinstall only after completing earlier steps.",
      "After this step, try printing a test page.",
    ],
  },
  {
    id: 7,
    title: "Test and note errors",
    description: [
      "Print a test page to verify the fix.",
      "If an error code appears, note it.",
      "After this step, try printing a test page.",
    ],
  },
];

const testimonials = [
  {
    name: "David M.",
    role: "Office Admin",
    initial: "D",
    text: '"I was stuck on "Offline" for hours. The steps were simple and it worked immediately."',
  },
  {
    name: "Sarah J.",
    role: "Operations",
    initial: "S",
    text: '"Very clear instructions. No confusion — just follow the steps and you\'re done."',
  },
  {
    name: "Michael C.",
    role: "Small Business",
    initial: "M",
    text: '"After an update my driver broke. They guided me through reinstall and everything worked."',
  },
  {
    name: "Emily R.",
    role: "Home User",
    initial: "E",
    text: '"Patient and easy to follow. Directions were super clear."',
  },
  {
    name: "Priya S.",
    role: "Student",
    initial: "P",
    text: '"Error code + paper jam issue fixed quickly."',
  },
  {
    name: "Ahmad K.",
    role: "Retail Store",
    initial: "A",
    text: '"The guidance saved us time and got us back to work fast."',
  },
];

export default function HomePage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeNav, setActiveNav] = useState<BrandId>("home");
  const [selectedBrand, setSelectedBrand] = useState<string>("HP");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? 0 : id);
  };

  const handleStartRequest = () => {
    setShowPopup(true);
  };

   const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };


  return (
   <>
     
    <div className="bg-[#f4f7fc] min-h-screen text-gray-800 font-sans selection:bg-indigo-500 selection:text-white">
      <section className="relative overflow-hidden bg-[#eef3f9] py-24">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <p className="text-xl font-extrabold text-gray-900 md:text-3xl">
            Printer Assistance
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
            Select Model Number
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-gray-600">
            Choose your brand to get the correct driver, firmware, and setup
            guide.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {printerBrands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
              >
                <div className="flex h-40 items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                <p className="mb-5 text-sm font-bold text-gray-700">
                  Printer Setup
                </p>

                <Link
                  href={
                    brand.name.toLowerCase() === "hp"
                      ? "/hp"
                      : `/printer/${brand.name.toLowerCase()}`
                  }
                  className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-blue-700"
                >
                  START NOW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Dynamic Troubleshooting Checklist (Original Section Integration) */}
      <section className="bg-[#f8fafc] py-16 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Troubleshooting Checklist (Try These Steps First)
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs text-gray-500">
              Most printing issues are caused by temporary system states,
              connection mismatches, or queue conflicts. Follow the steps below
              in order and stop once the issue is resolved.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`rounded-xl border p-4 bg-white transition-all ${
                    activeStep === step.id
                      ? "border-indigo-200 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold text-xs ${
                          activeStep === step.id
                            ? "bg-indigo-50 text-indigo-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {step.id}
                      </span>
                      <h4 className="text-sm text-black font-bold">
                        {step.title}
                      </h4>
                    </div>
                    <span className="text-xs text-indigo-600 font-medium">
                      {activeStep === step.id
                        ? "Hide details −"
                        : "View details +"}
                    </span>
                  </div>

                  {activeStep === step.id && (
                    <div className="ml-12 mt-5 space-y-2 text-sm text-gray-600 border-l-2 border-indigo-100 pl-4">
                      {step.description.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                      <p className="text-gray-400 text-xs">
                        {step.subDescription}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-4 shadow-sm">
              <h4 className="font-bold text-gray-900 text-sm">
                If the issue continues
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Persistent issues may involve drivers, firmware, permissions, or
                network settings.
              </p>
              <ul className="list-inside list-disc space-y-1.5 text-xs text-gray-600 font-medium">
                <li>Try another document</li>
                <li>Check offline status</li>
                <li>Verify exact model number</li>
              </ul>
              <p className="text-center text-[11px] text-gray-400 border-t border-gray-200 pt-4">
                Complete steps in order for best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Model-Matched Flow (Hero Section) */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              Quick Assistance
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl max-w-xl">
              Continue setup faster with a{" "}
              <span className="text-indigo-600">model-matched</span> flow
            </h1>
            <p className="text-base text-gray-600 max-w-xl">
              Choose a brand, then proceed with your model details. We&apos;ll
              route you to the next step that fits your device and setup.
            </p>

            {/* Brand Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["HP", "Canon", "Epson", "Brother"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`rounded-full px-5 py-1.5 text-sm font-semibold transition border ${
                    selectedBrand === brand
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                      : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="space-y-3 pt-4 max-w-lg">
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Model-based routing
                  </h4>
                  <p className="text-xs text-gray-500">
                    Less guessing, quicker next step
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
                  🔍
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Clear instructions
                  </h4>
                  <p className="text-xs text-gray-500">
                    Simple steps that are easy to follow
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Quick follow-up
                  </h4>
                  <p className="text-xs text-gray-500">
                    Submit once, continue smoothly
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleStartRequest}
                className="rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
              >
                Continue with {selectedBrand}
              </button>
              <p className="mt-3 text-xs text-emerald-600 flex items-center gap-1.5 font-medium px-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Average response: a few minutes
              </p>
            </div>
          </div>

          {/* Right Image Feature Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl group">
              <div className="relative h-80 sm:h-95 w-full">
                <Image
                  src="/printer.avif"
                  alt="Printer setup display"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 pt-20">
                <h3 className="text-lg font-bold">Stuck mid-setup?</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Continue with a guided flow in seconds.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                💡 Tip
              </h5>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                Keep your model number handy (from the label on the device or
                box). It helps match the correct setup path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Care & Troubleshooting Split Info */}
      <section className="bg-white border-y border-gray-100 py-16 px-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                Help Center
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Customer Care
              </h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  We focus on clear, step-by-step help so you can{" "}
                  <strong>finish setup without confusion</strong>. Most issues
                  are caused by simple connection or queue problems—and they can
                  often be fixed quickly.
                </p>
                <p>
                  Our team helps you choose the right software package, follow
                  the correct installation flow, and avoid common mistakes that
                  cause failed installs.
                </p>
                <p>
                  If you get stuck, you can share your model number and any
                  error message so we can guide the next step accurately.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="inline-block rounded-full border border-emerald-300 px-3 py-1 text-[11px] font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50/50">
                Quick Guide
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Troubleshooting Guidance
              </h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  Modern devices include many features—wireless setup, scanning
                  utilities, and multiple drivers—which can sometimes cause
                  conflicts during installation.
                </p>
                <p>
                  We provide guided troubleshooting using a structured checklist
                  so you can resolve offline status, connection errors, and
                  driver mismatches efficiently.
                </p>
                <p>
                  For faster results, keep your model name, operating system
                  version, and any error code ready.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Step Setup Block */}
          <div className="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50/40 p-8 text-center max-w-5xl mx-auto">
            <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Process
            </span>
            <h3 className="mt-3 text-xl font-extrabold text-slate-900">
              A simple 3-step setup flow
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Match the correct package, follow the guided steps, and complete
              final checks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white mb-3">
                  01
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Select</h5>
                <p className="text-xs text-gray-500 mt-1">
                  Choose the brand and enter the model to match the right
                  package.
                </p>
              </div>
              <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white mb-3">
                  02
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Prepare</h5>
                <p className="text-xs text-gray-500 mt-1">
                  We generate the compatible setup flow and required steps.
                </p>
              </div>
              <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white mb-3">
                  03
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Finish</h5>
                <p className="text-xs text-gray-500 mt-1">
                  Complete installation and run quick checks to confirm it
                  works.
                </p>
              </div>
            </div>
            <p className="mt-5 text-[11px] text-gray-400 font-medium">
              Tip: If an error appears, save the exact code and model name
              before retrying.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Fast Setup & Features Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-[11px] font-bold tracking-wider text-gray-500 uppercase">
              About Printer Assistance
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Fast setup help for drivers, wireless, and common errors
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              <strong>Printer Assistance</strong> helps you get the right software,
              connect devices to Wi-Fi, and fix everyday issues like offline
              messages, driver conflicts, paper jams, and print quality
              problems. Our guidance is clear, step-by-step, and designed for
              quick results.
            </p>

            <div className="space-y-3 pt-2 max-w-lg">
              {[
                "Model-specific download guidance",
                "Wi-Fi & connection steps made easy",
                "Fix common errors in minutes",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="text-indigo-600 font-bold text-sm">✓</span>
                  <span className="text-xs font-semibold text-slate-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-gray-200/80 pt-6 max-w-md">
              <div className="text-center p-2">
                <span className="block text-sm font-bold text-slate-900">
                  24/7
                </span>
                <span className="text-[11px] text-gray-400">Guidance</span>
              </div>
              <div className="text-center p-2 border-x border-gray-200">
                <span className="block text-sm font-bold text-slate-900">
                  Quick
                </span>
                <span className="text-[11px] text-gray-400">Steps</span>
              </div>
              <div className="text-center p-2">
                <span className="block text-sm font-bold text-slate-900">
                  Secure
                </span>
                <span className="text-[11px] text-gray-400">Process</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
              <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Verified help • Clear steps
              </span>
              <div className="relative h-85 w-full bg-gray-200 grayscale contrast-125">
                <Image
                  src="/about2.jpg"
                  alt="Assistance desk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Customer Testimonials */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              What customers say
            </h2>
            <p className="text-xs text-gray-500 mt-1.5">
              Real feedback from people who solved their issue quickly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-[#f8fafc]/60 p-5 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {t.initial}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">
                        {t.name}
                      </h5>
                      <p className="text-[10px] text-gray-400 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-amber-400 text-xs tracking-tighter">
                    ★★★★★
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic grow">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Sticky Footer CTA Banner */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
        <div className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {["Guided Steps", "Model-Based", "Fast Follow-Up"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <h3 className="text-xl font-extrabold">
              Need help moving to the next step?
            </h3>
            <p className="text-xs text-slate-400 max-w-md">
              Share your model and what you&apos;re seeing. We&apos;ll route you
              to the right next action with clear instructions.
            </p>
          </div>

          <div className="text-center md:text-right shrink-0 space-y-3">
            <button
              onClick={() => router.push("/contact")}
              className="rounded-xl bg-indigo-600 px-6 py-3 text-xs font-bold hover:bg-indigo-700 transition tracking-wide shadow-lg shadow-indigo-900/50"
            >
              Start a request
            </button>
            <p className="text-[11px] text-slate-500 block">
              Email:{" "}
              <span className="text-slate-300 font-medium">
                info@printerassistance
              </span>
            </p>
            <p className="text-[10px] text-emerald-400 font-medium flex items-center justify-center md:justify-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Typical response: <span className="font-bold">quick</span>
            </p>
          </div>
        </div>
      </footer>

      {/* POPUP OVERLAY MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-slate-600 transition"
            >
              ×
            </button>

            <h3 className="text-xl font-bold text-slate-900">
              Setup for {selectedBrand}
            </h3>
            <p className="mb-5 mt-1 text-xs text-gray-500">
              Enter details to continue setup flow setup
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition bg-slate-50/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition bg-slate-50/50"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={selectedBrand}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-slate-100/80 px-4 py-3 text-sm font-semibold text-slate-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none transition bg-slate-50/50"
                  placeholder="Model Number"
                />
              </div>

              <button
                type="submit"
                onClick={() => setShowPopup(false)}
                className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <div className="bw-disclaimer-section">
          <section className="bw-disclaimer" aria-label="Disclaimer">
            <h2 className="bw-disclaimer-title">Disclaimer</h2>
            <p className="bw-disclaimer-copy">
              Printer Assistance is an independent support provider operated by
              Printer Service LLC. We are not affiliated with, endorsed by,
              sponsored by, or authorized by HP, Canon, Epson, Brother, Xerox,
              Lexmark, Dell, Ricoh, Kyocera, Samsung, or any other printer
              manufacturer. All trademarks, logos, and brand names belong to
              their respective owners and are used solely for identification
              purposes.
            </p>
          </section>
        </div>

        <footer
          className="bw-footer"
          aria-label="Printer support footer"
          id="contact-section"
        >
          <div className="bw-footer-info">
            <section>
              <h2 className="bw-footer-title">
                Printer Help &amp; Customer Care
              </h2>
              <p className="bw-footer-copy">
                Our team helps identify common printer issues, whether they
                involve hardware, software, connectivity, or setup. We focus on
                clear guidance and dependable assistance for users who want help
                keeping their printers running smoothly.
              </p>
            </section>

            <section>
              <h2 className="bw-footer-title">Printer Issue Diagnosis</h2>
              <p className="bw-footer-copy">
                Modern printers have many built-in features, and even small
                glitches can disrupt everyday tasks. Our team follows practical
                troubleshooting steps to review driver, print queue, scanner,
                wireless, and paper-feed issues so common printer problems can
                be addressed efficiently.
              </p>
            </section>
          </div>

          {/* Legal Links */}
          <div className="bw-footer-links">
            <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>

            <a href="/RefundPolicy" target="_blank" rel="noopener noreferrer">
              Refund & Return Policy
            </a>

            <a href="/TermsofUse" target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>

            <a href="/Disclaimer" target="_blank" rel="noopener noreferrer">
              Disclaimer
            </a>
          </div>

          <div className="bw-footer-bar">
            <p className="bw-footer-bar-inner">
              <span>Printer Expert</span>

              <span className="bw-footer-divider">|</span>

              <span>All Rights Reserved</span>

              <span className="bw-footer-divider">|</span>

              <button
                type="button"
                className="bw-footer-bar-link"
                onClick={scrollToForm}
              >
                Need Help Finding the Right Driver?
              </button>

              <span className="bw-footer-divider">|</span>

              <button
                type="button"
                className="bw-footer-bar-link"
                onClick={() => router.push("/contact")}
              >
                Contact us for assistance
              </button>
            </p>
          </div>
        </footer>
   </>
  );
}
