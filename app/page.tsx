"use client";

import { useEffect, useRef, useState, type FC, type FormEvent } from "react";
import { brandLogos, brandNames, type BrandId } from "@/components/brand-logos";
import {
  AlertIcon,
  ArrowRightIcon,
  ChatIcon,
  CheckCircleIcon,
  CloseIcon,
  DownloadIcon,
  PaperJamIcon,
  PhoneIcon,
  PrinterOfflineIcon,
  PrinterSetupIcon,
  PrintQueueIcon,
  ScannerIcon,
  SendIcon,
  UsbIcon,
  WirelessIcon,
} from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Printer, Shield, UserCheck, ShieldCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ModalStep = "closed" | "connection" | "processing" | "error";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "hp", label: "HP", path: "/hp" },
  { id: "epson", label: "Epson", path: "/printer/epson" },
  { id: "brother", label: "Brother", path: "/printer/brother" },
  { id: "canon", label: "Canon", path: "/printer/canon" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const brandImages = {
  hp: "/hp.png",
  brother: "/brother.png",
  epson: "/epson.png",
  canon: "/canon.png",
};

const brandCards: Exclude<BrandId, "home" | "contact">[] = [
  "hp",
  "brother",
  "epson",
  "canon",
];

const issues = [
  { Icon: PrinterSetupIcon, label: "Printer Set Up Issue" },
  { Icon: PrinterOfflineIcon, label: "Printer Offline" },
  { Icon: WirelessIcon, label: "Wireless printer issue" },
  { Icon: PaperJamIcon, label: "Paper jam issue" },
  { Icon: PrintQueueIcon, label: "Printer Job Stuck In Queue" },
  { Icon: ScannerIcon, label: "Scanner issues" },
];

const setupSteps = [
  "Unbox the printer, remove the protective materials, and plug it into a power outlet.",
  "Install the ink or toner cartridges in the correct slots as shown on the printer panel.",
  "Load supported paper into the input tray and confirm it matches the printer specifications.",
  "Choose the required language, region, date, and other basic preferences on the device.",
  "Install the printer software so your computer or mobile device can connect to the printer.",
  "Print a test page to confirm the setup is complete and the printer is responding correctly.",
];

const offlineSteps = [
  "Check all cable connections and make sure the USB cable is firmly connected at both ends.",
  "Reconnect the printer to your Wi-Fi or network if it is not showing as online.",
  "Clear any paused, stuck, or pending print jobs from the printer queue.",
  "Review the printer driver status and reinstall the latest driver if it is missing, outdated, or damaged.",
  "Run the printer troubleshooting utility to detect common setup and connection issues.",
  "Inspect the paper tray for jams and remove any stuck paper carefully before printing again.",
];

const supportCards = [
  { Icon: DownloadIcon, title: "Driver installation support" },
  { Icon: PrinterSetupIcon, title: "Printer setup help" },
  { Icon: ScannerIcon, title: "Scanner connection guide" },
];

const processingStages = [
  "Checking Printer Spooler...",
  "Detecting USB connection...",
  "Scanning driver database...",
  "Preparing installer...",
  "Verifying compatibility...",
];

const PrinterSupportPage: FC = () => {
  const [activeNav, setActiveNav] = useState<BrandId>("home");
  const [selectedBrand, setSelectedBrand] = useState<Exclude<
    BrandId,
    "home" | "contact"
  > | null>(null);
  const [form, setForm] = useState({ model: "", name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [modalStep, setModalStep] = useState<ModalStep>("closed");
  const [connectionType, setConnectionType] = useState<"usb" | "wifi" | null>(
    null,
  );
  const [progress, setProgress] = useState(0);
  const [stageIdx, setStageIdx] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string>("HP");
  const router = useRouter();

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (modalStep !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalStep]);

  useEffect(() => {
    if (modalStep !== "processing") return;
    setProgress(0);
    setStageIdx(0);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    const totalDuration = 5200;
    const tick = 90;
    const steps = Math.ceil(totalDuration / tick);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setProgress(Math.min(100, Math.round((i / steps) * 100)));
      setStageIdx(
        Math.min(
          processingStages.length - 1,
          Math.floor((i / steps) * processingStages.length),
        ),
      );
      if (i >= steps) {
        clearInterval(interval);
        const t = setTimeout(() => setModalStep("error"), 350);
        timersRef.current.push(t);
      }
    }, tick);
    return () => clearInterval(interval);
  }, [modalStep]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleNav = (id: BrandId) => {
    setActiveNav(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSelectedBrand(null);
    } else if (id === "contact") {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setSelectedBrand(id);
      scrollToForm();
    }
  };

  const handleBrand = (id: Exclude<BrandId, "home" | "contact">) => {
    setSelectedBrand(id);
    setActiveNav(id);

    if (id === "hp") {
      router.push("/hp");
    } else {
      router.push(`/printer/${id}`);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setModalStep("connection");
  };

  const handleConnection = (type: "usb" | "wifi") => {
    setConnectionType(type);
    setModalStep("processing");
  };

  const closeModal = () => setModalStep("closed");

  const ActiveBrandLogo = selectedBrand ? brandLogos[selectedBrand] : null;
  const activeBrandName = selectedBrand ? brandNames[selectedBrand] : "Printer";

  const steps = [
    {
      number: "01",
      title: "Connect Hardware",
      description:
        "Plug your printer into power and connect to your local network.",
    },
    {
      number: "02",
      title: "Identify Model",
      description:
        "Select your brand above or search for your specific model ID.",
    },
    {
      number: "03",
      title: "Run Installer",
      description:
        "Download and execute the secure package to complete the link.",
    },
  ];

  return (
    <div className="bw-shell bw-body-pad">
      <header className="w-full bg-white border-b border-slate-100 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: Printer Assistance Branding */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg text-blue-600 group-hover:scale-105 transition-transform">
              <Printer className="w-10 h-10 stroke-[1.75]" />
            </div>
            <div className="font-bold text-slate-900 text-base md:text-2xl leading-tight tracking-normal">
              Printer 
              <span className="text-blue-600"> Assistance</span>
            </div>
          </Link>

          {/* Right Side: Dynamic Printer Brands Navigation */}
          <nav aria-label="Printer brands">
            <ul className="flex items-center gap-6 md:gap-8">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className={`text-sm md:text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-blue-600 font-bold"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#07132b] text-white pt-12 pb-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How can we help <br />
                with your printer today?
              </h1>
              <p className="text-slate-300 text-lg">
                Select your printer brand to get started.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/epson1.png" // Replace with your printer image path
                alt="Printer setup illustration"
                width={400}
                height={300}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* 3. Floating Brand Grid Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
          <div className="bg-slate-100/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-center text-slate-800 text-lg md:text-xl font-semibold mb-4">
              Select Your Printer Brand
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {brandCards.map((id) => {
                const isActive = selectedBrand === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-label={`Select ${brandNames[id]}`}
                    onClick={() => handleBrand(id)}
                    className={`flex flex-col items-center justify-between p-4 rounded-xl transition-all duration-200 min-h-[140px] hover:bg-white hover:shadow-md ${
                      isActive
                        ? "bg-white shadow-md ring-2 ring-blue-500"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={brandImages[id]}
                        alt={`${brandNames[id]} logo`}
                        width={110}
                        height={50}
                        className="object-contain max-h-12"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-slate-700 mt-3 text-center">
                      {brandNames[id]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Value Propositions / Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 px-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-blue-700 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  100% Secure Connection
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Your information is safe with us.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-blue-700 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Certified Printer Experts
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Trained professionals ready to help.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-blue-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Fast & Reliable Support
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  We're here to get you printing.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Disclaimer Footer */}
          <p className="text-center text-xs text-slate-500 pb-12">
            We are an independent service provider and are not affiliated with
            any printer brand.
          </p>
        </section>

        <section className="bw-help-strip">
          <h2 className="bw-help-title">
            Printer or Scanner Not Working? We are Here to Help.
          </h2>
          <p className="bw-help-copy">Talk to an Expert via Live Chat</p>
          <div className="bw-help-actions">
            <span className="bw-help-label">
              <ChatIcon className="w-5 h-5" />
              Live Chat
            </span>
            <button onClick={openChat} type="button" className="bw-chat-btn">
              <SendIcon className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </section>

        <section className="bw-issue-strip">
          <div className="bw-issue-grid">
            {issues.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                className="bw-issue-card"
                aria-label={label}
                onClick={scrollToForm}
              >
                <Icon className="bw-issue-card__icon" />
                <p className="bw-issue-card__title">{label}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
          {/* 1. Model Search Input Bar (Centered Desktop Width) */}
          <div
            ref={formRef}
            id="bw-download-form"
            className="max-w-2xl mx-auto w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center"
            >
              <input
                type="text"
                name="model"
                autoComplete="off"
                placeholder="Or enter model (e.g. XP-4100)"
                maxLength={48}
                required
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                className="w-full py-4 pl-6 pr-14 bg-white border border-slate-200 rounded-full text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600 shadow-sm text-base transition-all"
              />
              <button
                type="submit"
                aria-label="Search Model"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-full flex items-center justify-center transition-all shadow-md"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </form>

            {/* 2. Connection Status Subtext */}
            <p className="text-center text-[11px] font-medium tracking-widest text-slate-400 uppercase mt-4">
              v.2.4.1 — SECURE CONNECTION ACTIVE
            </p>
          </div>

          {/* 3. Installation Guide Card (3-Column Desktop Grid) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight text-center md:text-left">
              Installation Guide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-row md:flex-col items-start gap-4 p-4 md:p-0 rounded-2xl md:rounded-none bg-slate-50/60 md:bg-transparent"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bw-setup-guide"
          aria-labelledby="bw-setup-guide-title"
        >
          <div className="bw-guide-media">
            <img
              className="bw-guide-image"
              src="/home-img1.png"
              alt="Windows Add Printer driver selection screen"
              loading="lazy"
            />
          </div>
          <div className="bw-guide-content">
            <h2 className="bw-guide-title" id="bw-setup-guide-title">
              Continue setting up the printer
            </h2>
            <p className="bw-guide-intro">
              Setting up a printer is easier when each step is completed in the
              right order. Follow the basic setup process carefully so the
              device, supplies, and software are ready before you start
              printing.
            </p>
            <ol className="bw-guide-steps">
              {setupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="bw-offline-guide"
          aria-labelledby="bw-offline-guide-title"
        >
          <div className="bw-guide-content">
            <h2 className="bw-guide-title" id="bw-offline-guide-title">
              Fix a Printer Offline Issue
            </h2>
            <p className="bw-guide-intro">
              When a printer stops responding, the first thing to check is
              whether it has gone offline. This is a common problem and can
              often be corrected with a few basic checks.
            </p>
            <ol className="bw-guide-steps">
              {offlineSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="bw-guide-media">
            <img
              className="bw-guide-image"
              src="/home-img2.png"
              alt="Devices and Printers offline troubleshooting screen"
              loading="lazy"
            />
          </div>
        </section>

        <div className="bw-model-help">
          <h3>How to find printer model number?</h3>
          <p>The product name is on the front of your device.</p>
        </div>

        <section className="bw-support-options">
          <h2 className="bw-support-title">
            More support options for this topic
          </h2>
          <div className="bw-support-grid">
            {supportCards.map(({ Icon, title }) => (
              <article key={title} className="bw-support-card">
                <div className="bw-support-card__icon" aria-hidden="true">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="bw-support-card__title">{title}</p>
              </article>
            ))}
          </div>
        </section>

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
      </main>

      {/* Connection modal */}
      <Modal
        open={modalStep === "connection"}
        onClose={closeModal}
        title="Quick Download Printer Drivers"
      >
        <div className="bw-connection-trust">
          <span className="bw-connection-logo-box">
            {ActiveBrandLogo ? (
              <ActiveBrandLogo className="bw-connection-logo" />
            ) : (
              <PrinterSetupIcon className="w-8 h-8" />
            )}
          </span>
          <div>
            <p className="bw-connection-brand-name">
              {activeBrandName} driver setup options
            </p>
            <p className="text-sm text-[color:var(--bw-muted)] mt-0.5">
              Secure setup &mdash; select your connection type
            </p>
          </div>
        </div>
        <div className="bw-connection-options">
          <div className="bw-connection-option">
            <div className="bw-connection-option__visual">
              <UsbIcon className="w-9 h-9" />
            </div>
            <div className="text-center">
              <p className="bw-connection-option__label">USB</p>
              <p className="bw-connection-option__hint">
                Connect via USB cable
              </p>
            </div>
            <button
              type="button"
              className="bw-connection-option__start"
              onClick={() => handleConnection("usb")}
            >
              Let&apos;s Start <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="bw-connection-option">
            <div className="bw-connection-option__visual">
              <WirelessIcon className="w-9 h-9" />
            </div>
            <div className="text-center">
              <p className="bw-connection-option__label">Wi-Fi</p>
              <p className="bw-connection-option__hint">
                Connect via Wi-Fi network
              </p>
            </div>
            <button
              type="button"
              className="bw-connection-option__start"
              onClick={() => handleConnection("wifi")}
            >
              Let&apos;s Start <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Modal>

      {/* Processing modal */}
      <Modal
        open={modalStep === "processing"}
        onClose={closeModal}
        title="Quick Download Printer Drivers"
      >
        <div className="bw-processing">
          <p className="bw-processing-copy">
            Verify your printer&apos;s{" "}
            {connectionType === "usb" ? "USB" : "Wi-Fi"} connection for a
            seamless setup process.
          </p>
          <h3 className="bw-processing-title">Please wait...</h3>
          <div className="bw-processing-stage">
            <svg
              className="w-16 h-16 text-[color:var(--bw-blue)] bw-spinner"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2.5"
                opacity="0.2"
              />
              <path
                d="M12 3a9 9 0 0 1 9 9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="bw-processing-bar">
            <div
              className="bw-processing-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="bw-processing-status">{processingStages[stageIdx]}</p>
        </div>
      </Modal>

      {/* Error modal */}
      <Modal
        open={modalStep === "error"}
        onClose={closeModal}
        title="Installation Error !"
      >
        <div className="bw-error-panel">
          <div className="bw-error-header">
            <span className="bw-error-badge">!</span>
            <div>
              <h3 className="bw-error-title">Driver Installation Failed</h3>
              <p className="bw-error-code">Error Code: 0x000005b3</p>
            </div>
          </div>
          <div className="bw-error-msg">
            <AlertIcon className="w-5 h-5 flex-shrink-0" />
            Printer Spooler Service not responding &mdash; Driver Installer
            Installation failed
          </div>
          <p className="bw-error-warranty">
            <strong>Warranty notice:</strong> Repeated failed installation
            attempts may affect warranty support eligibility. Please contact
            technical support for assistance.
          </p>
          <div className="bw-error-actions">
            <button
              type="button"
              className="bw-error-btn bw-error-btn--call"
              onClick={() => setModalStep("connection")}
            >
              <PhoneIcon className="w-4 h-4" />
              Contact Support
            </button>
            <button
              type="button"
              className="bw-error-btn bw-error-btn--chat"
              onClick={() => setModalStep("connection")}
            >
              <ChatIcon className="w-4 h-4" />
              Ask an Expert
            </button>
          </div>
        </div>
      </Modal>

      {/* Sticky support footer */}
      {/* <div className="bw-support-footer">
        <button type="button" className="bw-support-footer__item" onClick={openChat}>
          <span className="bw-support-avatar">
            <MailIcon className="w-[18px] h-[18px]" />
          </span>
          <div>
            <span className="bw-support-kicker">Contact Support</span>
            <strong className="bw-support-main">Ask an Expert</strong>
          </div>
        </button>
        <button type="button" className="bw-support-footer__item" onClick={openChat}>
          <span className="bw-support-avatar bw-support-avatar--chat">
            <ChatIcon className="w-[18px] h-[18px]" />
          </span>
          <div>
            <span className="bw-support-kicker">Live Chat</span>
            <strong className="bw-support-main">Chat Now</strong>
          </div>
        </button>
      </div> */}

      {/* Success toast after form submit */}
      {submitted && modalStep === "closed" && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-lg border border-[color:var(--bw-green)]/30">
          <CheckCircleIcon className="w-5 h-5 text-[color:var(--bw-green)]" />
          <span className="text-sm font-semibold text-[color:var(--bw-text)]">
            Looking for your driver...
          </span>
        </div>
      )}
    </div>
  );
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`bw-modal ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <section className="bw-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <header className="bw-modal-header">
          <h2 className="bw-modal-title">{title}</h2>
          <button
            type="button"
            className="bw-modal-close"
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </header>
        <div className="bw-modal-body">{children}</div>
      </section>
    </div>
  );
};

export default PrinterSupportPage;
