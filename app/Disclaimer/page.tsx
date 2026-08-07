"use client";

import React, { useState, useRef } from "react";
import {
  AlertOctagon,
  Calendar,
  FileText,
  ChevronRight,
  Terminal,
  HelpCircle,
  ShieldCheck,
  Mail,
  MapPin,
  ExternalLink,
  Scale,
} from "lucide-react";
import { useRouter } from "next/navigation";

const disclaimerConfig = {
  companyName: "Printer Assistance",
  email: "contact@printerassistance",
  url: "http://printerassistance.com/",
  corporateAddress: {
    name: "Printer Assistance",
    building: "30 N GOULD ST STER,",
    Address: "SHERIDAN WY, 82801",
  },
};

const tableOfContents = [
  { id: "general", label: "General Disclaimer" },
  { id: "professional", label: "Professional Disclaimer" },
  { id: "external", label: "External Links Disclaimer" },
];

const BlueprintGridLines = () => (
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] -z-10 px-6">
    <div className="w-full h-full border-x border-slate-900 grid grid-cols-4 gap-0">
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
    </div>
  </div>
);

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <BlueprintGridLines />

      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto text-center space-y-4 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-blue-50/40 rounded-full blur-[140px] -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1464D8] border border-blue-100/60 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mx-auto">
          <AlertOctagon size={13} /> Liability Limitations
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 uppercase">
          Disclaimer
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Left Interactive Side Navigation Console */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-[#1464D8]" /> Clarification
              Nodes
            </h4>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left text-xs py-2 px-3 rounded-lg border transition-all duration-200 flex items-start gap-2 group ${
                    activeSection === item.id
                      ? "bg-white border-slate-200 text-[#1464D8] font-semibold shadow-xs"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <ChevronRight
                    size={14}
                    className={`mt-0.5 shrink-0 transition-transform ${activeSection === item.id ? "text-[#1464D8] translate-x-0.5" : "text-slate-300 group-hover:text-slate-400"}`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Legal Links Box */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
            <h5 className="text-sm font-semibold text-slate-900">
              Legal Directives
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              This notice delineates boundaries governing information processing
              across all local modules.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="/PrivacyPolicy"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Privacy Policy
              </a>
              <a
                href="/TermsofService"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Terms of Service
              </a>
              <a
                href="/Cookies"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Cookie Policy
              </a>
              <a
                href="/Disclaimer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Disclaimer
              </a>
            </div>
          </div>
        </aside>

        {/* Right Flow Content Column */}
        <article className="lg:col-span-8 space-y-12 text-slate-600 font-light text-base md:text-lg leading-relaxed">
          {/* Section 1: General Disclaimer */}
          <section id="general" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              General Disclaimer
            </h3>
            <p className="text-slate-900 font-normal text-lg leading-relaxed">
              The information provided by{" "}
              <strong className="font-semibold">
                {disclaimerConfig.companyName}
              </strong>{" "}
              ("we," "us," or "our") on{" "}
              <a
                href={disclaimerConfig.url}
                className="text-[#1464D8] hover:underline inline-flex items-center gap-0.5"
              >
                {disclaimerConfig.url}
                <ExternalLink size={12} />
              </a>{" "}
              (the "Site") is for general informational purposes only.
            </p>
            <p className="text-base">
              All information on the Site is provided in good faith, however we
              make no representation or warranty of any kind, express or
              implied, regarding the accuracy, adequacy, validity, reliability,
              availability or completeness of any information on the Site.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 font-mono text-xs md:text-sm text-slate-600 leading-normal">
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE
              SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE
              OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
              SOLELY AT YOUR OWN RISK.
            </div>
          </section>

          {/* Section 2: Professional Disclaimer */}
          <section id="professional" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              Professional Disclaimer
            </h3>
            <p className="text-base">
              The Site cannot and does not contain legal or medical advice. The
              information is provided for general informational and educational
              purposes only and is not a substitute for professional advice.
            </p>
            <p className="text-base font-normal text-slate-900 p-4 rounded-xl bg-blue-50/40 border border-blue-100/40 flex gap-3">
              <Scale size={18} className="text-[#1464D8] shrink-0 mt-0.5" />
              <span>
                Accordingly, before taking any actions based upon such
                information, we encourage you to consult with the appropriate
                professionals. The use or reliance of any information contained
                on this site is solely at your own risk.
              </span>
            </p>
          </section>

          {/* Section 3: External Links Disclaimer */}
          <section id="external" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              External Links Disclaimer
            </h3>
            <p className="text-base">
              The Site may contain (or you may be sent through the Site) links
              to other websites or content belonging to or originating from
              third parties or links to websites and features in banners or
              other advertising.
            </p>
            <p className="text-base">
              Such external links are not investigated, monitored, or checked
              for accuracy, adequacy, validity, reliability, availability or
              completeness by us.
            </p>
            <p className="text-base">
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
              THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
              FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE
              A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
              TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
              SERVICES.
            </p>
          </section>
        </article>
      </main>
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
              wireless, and paper-feed issues so common printer problems can be
              addressed efficiently.
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
            <a href="/">Printer Expert</a>

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
    </div>
  );
}
