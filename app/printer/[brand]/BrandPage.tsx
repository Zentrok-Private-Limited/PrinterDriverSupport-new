"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Props = {
  brand: string;
};

type WizardStep =
  | "CLOSED"
  | "GET_STARTED"
  | "CONFIRM_MODEL"
  | "SELECT_CONNECTION"
  | "CHECKING_SPOOLER"
  | "PREPARING_DRIVER"
  | "TERMINAL_DIAGNOSTIC"
  | "FINAL_ERROR";

type ConnectionStatus = "loading" | "failed";

export default function BrandPage({ brand }: Props) {
  const rawBrand = brand;

  const [modelNumber, setModelNumber] = useState("");
  const [isDiagnosticFailed, setIsDiagnosticFailed] = useState(false);
  const [wizardStep, setWizardStep] = useState<WizardStep>("CLOSED");
  const [connectionType, setConnectionType] = useState<"usb" | "wifi">("usb");

  // Terminal & Status States
  const [terminalLogs, setTerminalLogs] = useState<
    Array<{ text: string; type?: "info" | "run" | "fail" | "warn" }>
  >([]);
  const [driverStatus, setDriverStatus] = useState<ConnectionStatus>("loading");
  const [spoolerStatus, setSpoolerStatus] =
    useState<ConnectionStatus>("loading");
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("loading");

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const brandData = {
    hp: {
      name: "HP",
      themeBg: "bg-[#2f57a4]",
      logo: "/hp.png",
      heroImage: "/hp1.png",
      modelImage: "/hp3.png",
    },
    canon: {
      name: "Canon",
      themeBg: "bg-[#d60000]",
      logo: "/canon.png",
      heroImage: "/canon1.png",
      modelImage: "/canon2.png",
    },
    epson: {
      name: "Epson",
      themeBg: "bg-[#003399]",
      logo: "/epson.png",
      heroImage: "/epson1.png",
      modelImage: "/epson2.png",
    },
    brother: {
      name: "Brother",
      themeBg: "bg-[#0d4aa2]",
      logo: "/brother.png",
      heroImage: "/brother1.png",
      modelImage: "/brother2.png",
    },
  };

  const data = brandData[rawBrand?.toLowerCase() as keyof typeof brandData];

  // Auto-scroll terminal window as logs stream in
  useEffect(() => {
    if (wizardStep === "TERMINAL_DIAGNOSTIC") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, wizardStep]);

  // Initial loading steps transitions
  useEffect(() => {
    if (wizardStep === "CHECKING_SPOOLER") {
      const timer = setTimeout(() => setWizardStep("PREPARING_DRIVER"), 2000);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "PREPARING_DRIVER") {
      const timer = setTimeout(
        () => setWizardStep("TERMINAL_DIAGNOSTIC"),
        2000,
      );
      return () => clearTimeout(timer);
    }
  }, [wizardStep]);

  // Terminal Log Sequence Engine
  // Terminal Log Sequence Engine
useEffect(() => {
  if (wizardStep !== "TERMINAL_DIAGNOSTIC") return;

  const brandName = data?.name || rawBrand || "Printer";
  const model = modelNumber.trim() ? modelNumber : `${brandName} Series`;
  const conn = connectionType;

  // Reset states
  setDriverStatus("loading");
  setSpoolerStatus("loading");
  setConnectionStatus("loading");
  setTerminalLogs([]);
  setIsDiagnosticFailed(false); // Show terminal initially

  const logSequence: Array<{
    delay: number;
    log: { text: string; type?: "info" | "run" | "fail" | "warn" };
    action?: () => void;
  }> = [
    {
      delay: 300,
      log: {
        text: `> ${rawBrand.toLowerCase()}-driver-install --model "${model}" --mode ${conn}`,
      },
    },
    { delay: 900, log: { text: "[info] Creating secure driver session...", type: "info" } },
    { delay: 1500, log: { text: `[info] Model detected: ${model}`, type: "info" } },
    { delay: 2100, log: { text: "[info] Checking operating system driver services...", type: "info" } },
    { delay: 2700, log: { text: "[info] Creating temporary driver restore point...", type: "info" } },
    { delay: 3300, log: { text: "[run ] Detecting Windows print architecture...", type: "run" } },
    { delay: 3900, log: { text: "[run ] Reading installed print processor list...", type: "run" } },
    { delay: 4500, log: { text: `[run ] Downloading ${brandName} driver package index...`, type: "run" } },
    { delay: 5100, log: { text: "[run ] Resolving compatible driver manifest...", type: "run" } },
    { delay: 5700, log: { text: "[run ] Downloading core printer driver files...", type: "run" } },
    { delay: 6300, log: { text: "[info] Package checksum verified.", type: "info" } },
    { delay: 6900, log: { text: "[run ] Extracting printer driver components...", type: "run" } },
    { delay: 7500, log: { text: "[run ] Copying driver files to system spool directory...", type: "run" } },
    { delay: 8100, log: { text: `[run ] Registering ${brandName} print driver service...`, type: "run" } },
    {
      delay: 8700,
      log: { text: "[fail] Driver signature verification failed.", type: "fail" },
      action: () => setDriverStatus("failed"),
    },
    { delay: 9300, log: { text: "[run ] Attempting fallback driver registration...", type: "run" } },
    { delay: 9900, log: { text: "[run ] Checking printer spooler service...", type: "run" } },
    { delay: 10500, log: { text: "[run ] Restarting spooler dependency check...", type: "run" } },
    {
      delay: 11100,
      log: { text: "[fail] Printer spooler service not responding.", type: "fail" },
      action: () => setSpoolerStatus("failed"),
    },
    { delay: 11700, log: { text: `[run ] Checking ${conn.toUpperCase()} device connection...`, type: "run" } },
    { delay: 12300, log: { text: `[run ] Enumerating ${conn.toUpperCase()} printer ports...`, type: "run" } },
    { delay: 12900, log: { text: `[run ] Waiting for ${conn.toUpperCase()} printer handshake...`, type: "run" } },
    { delay: 13500, log: { text: `[run ] Querying ${conn.toUpperCase()} device descriptor...`, type: "run" } },
    {
      delay: 14100,
      log: { text: `[warn] ${conn.toUpperCase()} printer handshake not confirmed yet.`, type: "warn" },
      action: () => setConnectionStatus("failed"),
    },
    // Switch from Terminal view to Error UI after logs complete
    {
      delay: 15000,
      log: { text: "[fail] Diagnostic complete. Error detected.", type: "fail" },
      action: () => setIsDiagnosticFailed(true),
    },
  ];

  const timers: NodeJS.Timeout[] = [];

  logSequence.forEach((item) => {
    const timer = setTimeout(() => {
      setTerminalLogs((prev) => [...prev, item.log]);
      if (item.action) item.action();
    }, item.delay);
    timers.push(timer);
  });

  return () => {
    timers.forEach((t) => clearTimeout(t));
  };
}, [wizardStep, connectionType, modelNumber, rawBrand, data?.name]);

  if (!data) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2 font-sans bg-gray-50">
        <h1 className="text-xl font-bold text-gray-800">Brand Not Found</h1>
        <p className="text-sm text-gray-500 font-medium">
          The requested manufacturer "{rawBrand}" is currently unconfigured.
        </p>
      </div>
    );
  }

  const isButtonDisabled = !modelNumber.trim();

  const closeWizard = () => {
    setWizardStep("CLOSED");
  };

  const openChat = () => {
    if (typeof window !== "undefined" && (window as any).jivo_api) {
      (window as any).jivo_api.open();
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 antialiased relative">
      {/* HEADER BANNER BLOCK */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="relative h-12 w-28">
            <Image
              src={data.logo}
              alt={`${data.name} logo`}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <nav className="hidden gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              OfficeJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              InkJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              LaserJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Envy
            </a>
          </nav>
        </div>
      </header>

      {/* DYNAMIC BRAND HERO SECTION */}
      <section className={`${data.themeBg} transition-colors duration-300`}>
        <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Download Free {data.name} Printer Drivers
              </h1>
              <ul className="space-y-2 text-sm font-medium text-white/90">
                <li>• Make sure your printer is powered on</li>
                <li>• Click on Download to install the drivers</li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep("GET_STARTED")}
                  className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition hover:bg-blue-700 cursor-pointer"
                >
                  Download Now ↓
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-5">
              <div className="relative h-64 w-full max-w-md sm:h-80">
                <Image
                  src={data.heroImage}
                  alt={`${data.name} setup`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRIVER DOWNLOAD INTERACTIVE REGISTRATION CONTAINER */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Quick Download Free Drivers
              </h2>
              <p className="text-sm text-gray-500">
                Fill the form and download your {data.name} printer driver
              </p>

              <div className="space-y-2">
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-700">
                  Model Number:
                </label>
                <input
                  type="text"
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  placeholder="Enter printer model"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep("SELECT_CONNECTION")}
                  disabled={isButtonDisabled}
                  className="rounded-md bg-[#003882] px-8 py-3.5 text-sm font-bold text-white transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md cursor-pointer hover:bg-blue-900"
                >
                  Quick Download & Install Drivers
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">
                How to find printer model number?
              </h3>
              <p className="text-sm text-gray-400">
                The product name is on the front of your device.
              </p>
              <div className="flex justify-center pt-4">
                <div className="relative h-60 w-full max-w-xs">
                  <Image
                    src={data.modelImage}
                    alt="Model guide label schematic"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {wizardStep !== "CLOSED" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Quick Download Free Drivers
              </h3>
              <button
                onClick={closeWizard}
                className="text-gray-400 hover:text-gray-600 transition text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Subtitle Header */}
            <p className="text-sm font-medium text-gray-600 mb-6">
              Verify your printer's {connectionType === "usb" ? "USB" : "Wi-Fi"}{" "}
              connection for a seamless setup process.
            </p>

            {/* STEP: GET STARTED */}
            {wizardStep === "GET_STARTED" && (
              <div className="text-center space-y-6 py-6">
                <button
                  onClick={() => setWizardStep("CONFIRM_MODEL")}
                  className="bg-[#003882] text-white font-semibold text-sm px-8 py-3 rounded-md transition hover:bg-blue-900 cursor-pointer"
                >
                  Let's Start →
                </button>
                <p className="text-sm text-gray-500 font-medium">
                  Start Printer Setup Wizard
                </p>
                <div className="flex justify-center pt-2">
                  <img
                    src="/printer.png"
                    alt="printer"
                    className="h-24 object-contain"
                  />
                </div>
              </div>
            )}

            {/* STEP: CONFIRM MODEL */}
            {wizardStep === "CONFIRM_MODEL" && (
              <div className="space-y-5 py-2">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 uppercase">
                    Model Number
                  </label>
                  <input
                    type="text"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    placeholder="Enter model number here"
                    className="w-full bg-white border border-gray-300 focus:border-blue-500 rounded-md px-4 py-3 text-sm font-semibold text-gray-700 outline-none transition"
                  />
                </div>
                <button
                  onClick={() => setWizardStep("SELECT_CONNECTION")}
                  disabled={!modelNumber.trim()}
                  className="w-full bg-[#003882] text-white text-sm font-bold py-3.5 rounded-md transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900 cursor-pointer"
                >
                  Quick Download & Install Drivers ↓
                </button>
              </div>
            )}

            {/* STEP 1: SELECT CONNECTION */}
            {wizardStep === "SELECT_CONNECTION" && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-xs text-[#003399] tracking-wider uppercase">
                      {data.name}
                    </span>
                    <span className="text-xs font-semibold text-gray-600">
                      Driver setup options
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Secure setup</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-gray-900 pt-2">
                  Select Wi-Fi or USB connection?
                </h4>

                <div className="space-y-3 pt-1">
                  {/* USB Row */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-xs hover:border-blue-200 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-25 flex items-center justify-center bg-gray-50 rounded-lg">
                        <img
                          src="/usb.png"
                          alt="USB connection"
                          className="max-h-full max-w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">USB:</p>
                        <p className="text-xs text-gray-500">Connect via USB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setConnectionType("usb");
                        setWizardStep("CHECKING_SPOOLER");
                      }}
                      className="bg-[#003882] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-blue-900 transition cursor-pointer"
                    >
                      Let's Start →
                    </button>
                  </div>

                  {/* WIFI Row */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-xs hover:border-blue-200 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-25 flex items-center justify-center bg-gray-50 rounded-lg">
                        <img
                          src="/wifi.png"
                          alt="WIFI connection"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">WIFI:</p>
                        <p className="text-xs text-gray-500">
                          Connect via Wifi.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setConnectionType("wifi");
                        setWizardStep("CHECKING_SPOOLER");
                      }}
                      className="bg-[#003882] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-blue-900 transition cursor-pointer"
                    >
                      Let's Start →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CHECKING SPOOLER */}
            {wizardStep === "CHECKING_SPOOLER" && (
              <div className="py-8 text-center space-y-6">
                <h4 className="text-lg font-bold text-gray-800">
                  Please wait...
                </h4>

                <div className="bg-slate-50/50 border border-gray-100 rounded-2xl p-8 max-w-md mx-auto flex flex-col items-center justify-center min-h-[160px]">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="w-30 h-35 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                      <img
                        src="/printer.png"
                        alt="Printer"
                        className="max-h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                        {connectionType === "usb" ? "USB CHECK" : "WIFI CHECK"}
                      </span>
                      <div className="w-16 border-t-2 border-dashed border-gray-300 relative">
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black"></div>
                      </div>
                    </div>
                    <div className="w-30 h-35 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                      <img
                        src={
                          connectionType === "usb" ? "/usb.png" : "/wifi.png"
                        }
                        alt="Port"
                        className="max-h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200/60 rounded-full px-6 py-2.5">
                  <div className="w-4 h-4 border-2 border-slate-700 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-semibold text-gray-800">
                    Checking Printer Spooler...
                  </span>
                </div>
              </div>
            )}

            {/* STEP 3: PREPARING DRIVER */}
            {wizardStep === "PREPARING_DRIVER" && (
              <div className="py-8 text-center space-y-6">
                <h4 className="text-lg font-bold text-gray-800">
                  Please wait...
                </h4>

                <div className="bg-slate-50/50 border border-gray-100 rounded-2xl p-8 max-w-md mx-auto flex flex-col items-center justify-center min-h-[160px]">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="w-30 h-35 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                      <img
                        src="/printer.png"
                        alt="Printer"
                        className="max-h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                        {connectionType === "usb" ? "USB CHECK" : "WIFI CHECK"}
                      </span>
                      <div className="w-16 border-t-2 border-dashed border-gray-300 relative">
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black"></div>
                      </div>
                    </div>
                    <div className="w-30 h-35 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                      <img
                        src={
                          connectionType === "usb" ? "/usb.png" : "/wifi.png"
                        }
                        alt="Port"
                        className="max-h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200/60 rounded-full px-6 py-2.5">
                  <div className="w-4 h-4 border-2 border-slate-700 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-semibold text-gray-800">
                    Preparing driver installation...
                  </span>
                </div>
              </div>
            )}

            {/* STEP 4: TERMINAL & STATUS DIAGNOSTIC */}
            {/* STEP 4: TERMINAL & STATUS DIAGNOSTIC */}
{wizardStep === "TERMINAL_DIAGNOSTIC" && (
  <div className="space-y-6 py-2">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      
      {/* LEFT COLUMN: Terminal during process -> Error Card when complete */}
      {!isDiagnosticFailed ? (
        /* Terminal Log Stream View */
        <div className="md:col-span-7 bg-[#0c1017] rounded-xl p-4 font-mono text-[11px] leading-relaxed text-gray-300 h-64 overflow-y-auto border border-slate-800 shadow-inner">
          <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
            <span className="ml-2 text-[10px] text-gray-500 font-sans">driver-installation.exe</span>
          </div>

          <div className="space-y-1">
            {terminalLogs.map((log, index) => (
              <div key={index} className="break-words">
                {log.type === "info" && <span className="text-emerald-400 font-semibold">{log.text}</span>}
                {log.type === "run" && <span className="text-gray-300">{log.text}</span>}
                {log.type === "fail" && <span className="text-red-400 font-bold">{log.text}</span>}
                {log.type === "warn" && <span className="text-amber-400 font-bold">{log.text}</span>}
                {!log.type && <span className="text-gray-400">{log.text}</span>}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>
      ) : (
        /* Final Failed State View */
        <div className="md:col-span-7 flex flex-col items-center justify-center text-center p-4 min-h-[260px] animate-fadeIn">
          {/* Connection Illustration with Red X */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-12 h-10 bg-gray-100 rounded border border-gray-300 flex items-center justify-center">
              <span className="text-red-500 font-bold text-xl">✕</span>
            </div>
            <div className="w-8 border-t-2 border-dashed border-gray-300"></div>
            <div className="w-12 h-10 bg-gray-100 rounded border border-gray-300 flex items-center justify-center">
              <div className="w-6 h-3 bg-gray-300 rounded-xs"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-4">
            <h4 className="text-xl font-extrabold text-gray-900">
              {connectionType === "usb" ? "USB" : "Wi-Fi"} connection failed.
            </h4>
            <p className="text-xs font-bold text-red-600 mt-1">
              Error Code: 0x000005b3
            </p>
          </div>

          {/* Red Warranty Notice Box */}
          <div className="bg-red-50/60 border-l-4 border-red-500 p-3 rounded-r-md text-left max-w-sm">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-xs mt-0.5">ⓘ</span>
              <p className="text-[11px] text-red-700 font-medium leading-tight">
                {data.name} warranty notice: Repeated failed installation attempts may affect warranty support eligibility.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* RIGHT COLUMN: CONNECTION STATUS STACK */}
      <div className="md:col-span-5 space-y-3">
        <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          CONNECTION STATUS
        </h5>

        {/* 1. Printer Driver Card */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          driverStatus === "failed" ? "bg-red-50/40 border-red-100" : "bg-slate-50/60 border-slate-100"
        }`}>
          <div className="flex items-center gap-3">
            {driverStatus === "loading" ? (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                ✕
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-gray-900">Printer Driver</p>
              <p className="text-[11px] text-gray-500 font-medium">
                {driverStatus === "loading" ? "Initializing..." : "Installation failed"}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Connection Card */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          connectionStatus === "failed" ? "bg-red-50/40 border-red-100" : "bg-slate-50/60 border-slate-100"
        }`}>
          <div className="flex items-center gap-3">
            {connectionStatus === "loading" ? (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                ✕
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-gray-900">
                {connectionType === "usb" ? "USB Connection" : "Wi-Fi Connection"}
              </p>
              <p className="text-[11px] text-gray-500 font-medium">
                {connectionStatus === "loading" ? "Waiting to start..." : "Connection not detected"}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Printer Spooler Card */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          spoolerStatus === "failed" ? "bg-red-50/40 border-red-100" : "bg-slate-50/60 border-slate-100"
        }`}>
          <div className="flex items-center gap-3">
            {spoolerStatus === "loading" ? (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                ✕
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-gray-900">Printer Spooler</p>
              <p className="text-[11px] text-gray-500 font-medium">
                {spoolerStatus === "loading" ? "Waiting to start..." : "Service not responding"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FOOTER SUPPORT ACTION BAR */}
    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] text-gray-400 font-medium">Contact Support</p>
          <p className="text-sm font-bold text-gray-900">Ask an Expert</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-600 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Chat with an Expert</span>
          <span className="text-emerald-600 font-bold">• Online Now</span>
        </div>

        <button
          type="button"
          onClick={openChat}
          className="bg-[#00c05a] hover:bg-emerald-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
          </svg>
          Chat Now
        </button>
      </div>
    </div>
  </div>
)}
            {/* STEP 5: FINAL ERROR / SUPPORT PROMPT */}
{wizardStep === "FINAL_ERROR" && (
  <div className="py-6 text-center space-y-6">
    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
      ✕
    </div>
    
    <div className="space-y-2">
      <h4 className="text-xl font-bold text-gray-900">
        Setup Unable to Complete Automatically
      </h4>
      <p className="text-sm text-gray-600 max-w-md mx-auto">
        Your printer driver installation stopped due to spooler and connection errors. An expert technician can assist you in resolving this issue.
      </p>
    </div>

    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        type="button"
        onClick={openChat}
        className="w-full sm:w-auto bg-[#00c05a] hover:bg-emerald-600 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
        </svg>
        Connect with Expert Now
      </button>

      <button
        type="button"
        onClick={closeWizard}
        className="w-full sm:w-auto text-gray-500 hover:text-gray-700 text-sm font-semibold px-6 py-3 cursor-pointer"
      >
        Cancel & Close
      </button>
    </div>
  </div>
)}
          </div>
        </div>
      )}
    </main>
  );
}
