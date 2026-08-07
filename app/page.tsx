'use client';

import { useEffect, useRef, useState, type FC, type FormEvent } from 'react';
import {
  brandLogos,
  brandNames,
  type BrandId,
} from '@/components/brand-logos';
import {
  AlertIcon,
  ArrowRightIcon,
  ChatIcon,
  CheckCircleIcon,
  CloseIcon,
  DownloadIcon,
  MailIcon,
  PaperJamIcon,
  PhoneIcon,
  PrinterOfflineIcon,
  PrinterSetupIcon,
  PrintQueueIcon,
  ScannerIcon,
  SendIcon,
  ShieldIcon,
  UsbIcon,
  WirelessIcon,
} from '@/components/icons';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ModalStep = 'closed' | 'connection' | 'processing' | 'error';

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



const brandCards: Exclude<BrandId, 'home' | 'contact'>[] = [
  'hp',
  'brother',
  'epson',
  'canon',
];

const issues = [
  { Icon: PrinterSetupIcon, label: 'Printer Set Up Issue' },
  { Icon: PrinterOfflineIcon, label: 'Printer Offline' },
  { Icon: WirelessIcon, label: 'Wireless printer issue' },
  { Icon: PaperJamIcon, label: 'Paper jam issue' },
  { Icon: PrintQueueIcon, label: 'Printer Job Stuck In Queue' },
  { Icon: ScannerIcon, label: 'Scanner issues' },
];

const setupSteps = [
  'Unbox the printer, remove the protective materials, and plug it into a power outlet.',
  'Install the ink or toner cartridges in the correct slots as shown on the printer panel.',
  'Load supported paper into the input tray and confirm it matches the printer specifications.',
  'Choose the required language, region, date, and other basic preferences on the device.',
  'Install the printer software so your computer or mobile device can connect to the printer.',
  'Print a test page to confirm the setup is complete and the printer is responding correctly.',
];

const offlineSteps = [
  'Check all cable connections and make sure the USB cable is firmly connected at both ends.',
  'Reconnect the printer to your Wi-Fi or network if it is not showing as online.',
  'Clear any paused, stuck, or pending print jobs from the printer queue.',
  'Review the printer driver status and reinstall the latest driver if it is missing, outdated, or damaged.',
  'Run the printer troubleshooting utility to detect common setup and connection issues.',
  'Inspect the paper tray for jams and remove any stuck paper carefully before printing again.',
];

const supportCards = [
  { Icon: DownloadIcon, title: 'Driver installation support' },
  { Icon: PrinterSetupIcon, title: 'Printer setup help' },
  { Icon: ScannerIcon, title: 'Scanner connection guide' },
];

const processingStages = [
  'Checking Printer Spooler...',
  'Detecting USB connection...',
  'Scanning driver database...',
  'Preparing installer...',
  'Verifying compatibility...',
];

const PrinterSupportPage: FC = () => {
  const [activeNav, setActiveNav] = useState<BrandId>('home');
  const [selectedBrand, setSelectedBrand] = useState<Exclude<BrandId, 'home' | 'contact'> | null>(null);
  const [form, setForm] = useState({ model: '', name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalStep, setModalStep] = useState<ModalStep>('closed');
  const [connectionType, setConnectionType] = useState<'usb' | 'wifi' | null>(null);
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
    if (modalStep !== 'closed') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalStep]);

  useEffect(() => {
    if (modalStep !== 'processing') return;
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
      setStageIdx(Math.min(processingStages.length - 1, Math.floor((i / steps) * processingStages.length)));
      if (i >= steps) {
        clearInterval(interval);
        const t = setTimeout(() => setModalStep('error'), 350);
        timersRef.current.push(t);
      }
    }, tick);
    return () => clearInterval(interval);
  }, [modalStep]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleNav = (id: BrandId) => {
    setActiveNav(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSelectedBrand(null);
    } else if (id === 'contact') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
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
    setModalStep('connection');
  };

  const handleConnection = (type: 'usb' | 'wifi') => {
    setConnectionType(type);
    setModalStep('processing');
  };

  const closeModal = () => setModalStep('closed');

  const ActiveBrandLogo = selectedBrand ? brandLogos[selectedBrand] : null;
  const activeBrandName = selectedBrand ? brandNames[selectedBrand] : 'Printer';

  return (
    <div className="bw-shell bw-body-pad">
      <header className="bw-header">
        <div className="bw-header-inner">
          <nav aria-label="Printer brands">
            <ul className="bw-nav">
  {navItems.map((item) => (
    <li key={item.id}>
      <Link
        href={item.path}
        className={`bw-nav-btn ${activeNav === item.id ? "is-active" : ""}`}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bw-hero">
          <p className="pb-2 text-lg">Printer or Scanner Not Working ?</p>
          <h1 className="bw-hero-title pb-3">Select Your Printer Model</h1>
          <button type="button" className="bw-primary-btn" onClick={scrollToForm}>
            <DownloadIcon className="w-5 h-5" />
            Download Free Printer Drivers
          </button>
        </section>

        <section className="bw-brand-grid" aria-label="Select a printer brand">
  {brandCards.map((id) => (
    <button
      key={id}
      type="button"
      className={`bw-brand-card ${selectedBrand === id ? "is-active" : ""}`}
      aria-label={`Select ${brandNames[id]} printer`}
      onClick={() => handleBrand(id)}
    >
      <Image
        src={brandImages[id]}
        alt={`${brandNames[id]} logo`}
        width={120}
        height={60}
        className="bw-brand-logo object-contain"
      />
    </button>
  ))}
</section>

        <section className="bw-help-strip">
          <h2 className="bw-help-title">Printer or Scanner Not Working? We are Here to Help.</h2>
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

        <section className="bw-download-section">
          <div className="bw-driver-panel" ref={formRef} id="bw-download-form">
            <div className="bw-driver-bar">
              <DownloadIcon className="w-4 h-4" />
              Download Free Printer Drivers
            </div>
            <form className="bw-driver-form" onSubmit={handleSubmit}>
              <label className="bw-field">
                <span className="bw-field__label">Enter Model Number</span>
                <input
                  className="bw-field__input"
                  name="model"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. OfficeJet 9125e"
                  maxLength={48}
                  required
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                />
              </label>
              <label className="bw-field">
                <span className="bw-field__label">Your Full Name</span>
                <input
                  className="bw-field__input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full Name"
                  maxLength={80}
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="bw-field">
                <span className="bw-field__label">Your Mobile Number</span>
                <input
                  className="bw-field__input"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+1 860-955-3080"
                  maxLength={22}
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
              <button className="bw-driver-submit" type="submit">Find</button>
            </form>
          </div>
        </section>

        <section className="bw-setup-guide" aria-labelledby="bw-setup-guide-title">
          <div className="bw-guide-media">
            <img
              className="bw-guide-image"
              src="/home-img1.png"
              alt="Windows Add Printer driver selection screen"
              loading="lazy"
            />
          </div>
          <div className="bw-guide-content">
            <h2 className="bw-guide-title" id="bw-setup-guide-title">Continue setting up the printer</h2>
            <p className="bw-guide-intro">Setting up a printer is easier when each step is completed in the right order. Follow the basic setup process carefully so the device, supplies, and software are ready before you start printing.</p>
            <ol className="bw-guide-steps">
              {setupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bw-offline-guide" aria-labelledby="bw-offline-guide-title">
          <div className="bw-guide-content">
            <h2 className="bw-guide-title" id="bw-offline-guide-title">Fix a Printer Offline Issue</h2>
            <p className="bw-guide-intro">When a printer stops responding, the first thing to check is whether it has gone offline. This is a common problem and can often be corrected with a few basic checks.</p>
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
          <h2 className="bw-support-title">More support options for this topic</h2>
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
            <p className="bw-disclaimer-copy">Printer Assistance is an independent technical support provider operated by Printer Service LLC. We are not affiliated with, endorsed by, sponsored by, or authorized by HP, Canon, Epson, Brother, Xerox, Lexmark, Dell, Ricoh, Kyocera, Samsung, or any other printer manufacturer. All trademarks, logos, and brand names belong to their respective owners and are used solely for identification purposes.</p>
          </section>
        </div>

        <footer className="bw-footer" aria-label="Printer support footer" id="contact-section">
  <div className="bw-footer-info">
    <section>
      <h2 className="bw-footer-title">Printer Help &amp; Customer Care</h2>
      <p className="bw-footer-copy">
        Our team helps identify common printer issues, whether they involve
        hardware, software, connectivity, or setup. We focus on clear guidance
        and dependable assistance for users who want help keeping their printers
        running smoothly.
      </p>
    </section>

    <section>
      <h2 className="bw-footer-title">Printer Issue Diagnosis</h2>
      <p className="bw-footer-copy">
        Modern printers have many built-in features, and even small glitches can
        disrupt everyday tasks. Our team follows practical troubleshooting
        steps to review driver, print queue, scanner, wireless, and paper-feed
        issues so common printer problems can be addressed efficiently.
      </p>
    </section>
  </div>

  {/* Legal Links */}
  <div className="bw-footer-links">
    <a
      href="/PrivacyPolicy"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>

    <a
      href="/RefundPolicy"
      target="_blank"
      rel="noopener noreferrer"
    >
      Refund & Return Policy
    </a>

    <a
      href="/TermsofUse"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terms of Use
    </a>

    <a
      href="/Disclaimer"
      target="_blank"
      rel="noopener noreferrer"
    >
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
      <Modal open={modalStep === 'connection'} onClose={closeModal} title="Quick Download Printer Drivers">
        <div className="bw-connection-trust">
          <span className="bw-connection-logo-box">
            {ActiveBrandLogo ? (
              <ActiveBrandLogo className="bw-connection-logo" />
            ) : (
              <PrinterSetupIcon className="w-8 h-8" />
            )}
          </span>
          <div>
            <p className="bw-connection-brand-name">{activeBrandName} driver setup options</p>
            <p className="text-sm text-[color:var(--bw-muted)] mt-0.5">Secure setup &mdash; select your connection type</p>
          </div>
        </div>
        <div className="bw-connection-options">
          <div className="bw-connection-option">
            <div className="bw-connection-option__visual">
              <UsbIcon className="w-9 h-9" />
            </div>
            <div className="text-center">
              <p className="bw-connection-option__label">USB</p>
              <p className="bw-connection-option__hint">Connect via USB cable</p>
            </div>
            <button
              type="button"
              className="bw-connection-option__start"
              onClick={() => handleConnection('usb')}
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
              <p className="bw-connection-option__hint">Connect via Wi-Fi network</p>
            </div>
            <button
              type="button"
              className="bw-connection-option__start"
              onClick={() => handleConnection('wifi')}
            >
              Let&apos;s Start <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Modal>

      {/* Processing modal */}
      <Modal open={modalStep === 'processing'} onClose={closeModal} title="Quick Download Printer Drivers">
        <div className="bw-processing">
          <p className="bw-processing-copy">
            Verify your printer&apos;s {connectionType === 'usb' ? 'USB' : 'Wi-Fi'} connection for a seamless setup process.
          </p>
          <h3 className="bw-processing-title">Please wait...</h3>
          <div className="bw-processing-stage">
            <svg className="w-16 h-16 text-[color:var(--bw-blue)] bw-spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="bw-processing-bar">
            <div className="bw-processing-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="bw-processing-status">{processingStages[stageIdx]}</p>
        </div>
      </Modal>

      {/* Error modal */}
      <Modal open={modalStep === 'error'} onClose={closeModal} title="Installation Error !">
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
            Printer Spooler Service not responding &mdash; Driver Installer Installation failed
          </div>
          <p className="bw-error-warranty">
            <strong>Warranty notice:</strong> Repeated failed installation attempts may affect warranty support eligibility. Please contact technical support for assistance.
          </p>
          <div className="bw-error-actions">
            <button type="button" className="bw-error-btn bw-error-btn--call" onClick={() => setModalStep('connection')}>
              <PhoneIcon className="w-4 h-4" />
              Contact Support
            </button>
            <button type="button" className="bw-error-btn bw-error-btn--chat" onClick={() => setModalStep('connection')}>
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
      {submitted && modalStep === 'closed' && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-lg border border-[color:var(--bw-green)]/30">
          <CheckCircleIcon className="w-5 h-5 text-[color:var(--bw-green)]" />
          <span className="text-sm font-semibold text-[color:var(--bw-text)]">Looking for your driver...</span>
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
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`bw-modal ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <section className="bw-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <header className="bw-modal-header">
          <h2 className="bw-modal-title">{title}</h2>
          <button type="button" className="bw-modal-close" aria-label="Close" onClick={onClose}>
            <CloseIcon className="w-7 h-7" />
          </button>
        </header>
        <div className="bw-modal-body">{children}</div>
      </section>
    </div>
  );
};

export default PrinterSupportPage;
