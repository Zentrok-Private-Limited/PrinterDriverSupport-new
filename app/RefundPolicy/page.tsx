"use client";

import React, { useState } from "react";
import {
  RotateCcw,
  ChevronRight,
  Terminal,
  FileText,
  Mail,
  ShieldCheck,
  PackageX,
  CreditCard,
  Truck,
  Scale,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
    };
  }
}

const policyConfig = {
  companyName: "Printer Assistance",
  email: "contact@printerassistance.com",
  url: "http://printerassistance.com/",
};

const tableOfContents = [
  { id: "overview", label: "Overview" },
  { id: "cancellation", label: "Order Cancellation" },
  { id: "returns", label: "Return & Replacement" },
  { id: "services", label: "Non-Refundable Services" },
  { id: "refund-method", label: "Refund Method & Deductions" },
  { id: "shipping-disputes", label: "Shipping & Disputes" },
  { id: "contact", label: "Contact & Support" },
];

const BlueprintGridLines = () => (
  <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-full max-w-7xl -translate-x-1/2 px-6 opacity-[0.03]">
    <div className="grid h-full w-full grid-cols-4 gap-0 border-x border-slate-900">
      <div className="h-full border-r border-slate-900" />
      <div className="h-full border-r border-slate-900" />
      <div className="h-full border-r border-slate-900" />
    </div>
  </div>
);

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-sans text-slate-700 selection:bg-blue-600 selection:text-white">
      <BlueprintGridLines />

      {/* Header Banner */}
      <header className="relative mx-auto max-w-5xl space-y-4 border-b border-slate-100 px-6 pb-16 pt-32 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-87.5 w-150 -translate-x-1/2 rounded-full bg-blue-50/40 blur-[140px]" />

        <div className="mx-auto inline-flex items-center gap-2 rounded-md border border-blue-100/60 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1464D8]">
          <ShieldCheck size={13} /> Customer Assurance
        </div>

        <h1 className="text-4xl font-light uppercase tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Refund & Return Policy
        </h1>

        <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-lg">
          Clear, fair, and transparent guidelines regarding order cancellations,
          product returns, service terms, and refunds under applicable regulations.
        </p>
      </header>

      {/* Main Grid Content */}
      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        {/* Left Interactive Side Navigation Console */}
        <aside className="custom-scrollbar space-y-8 overflow-y-auto pr-2 lg:col-span-4 lg:sticky lg:top-28 lg:h-full">
          <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Terminal size={14} className="text-[#1464D8]" /> Policy Directives
            </h4>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`group flex w-full items-start gap-2 rounded-lg border px-3 py-2 text-left text-xs transition-all duration-200 ${
                    activeSection === item.id
                      ? "border-slate-200 bg-white font-semibold text-[#1464D8] shadow-xs"
                      : "border-transparent text-slate-500 hover:bg-white/60 hover:text-slate-900"
                  }`}
                >
                  <ChevronRight
                    size={14}
                    className={`mt-0.5 shrink-0 transition-transform ${
                      activeSection === item.id
                        ? "translate-x-0.5 text-[#1464D8]"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Legal Links Box */}
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h5 className="text-sm font-semibold text-slate-900">Legal Documents</h5>
            <p className="text-xs leading-relaxed text-slate-500">
              Review our terms and compliance frameworks governing user transactions and services.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="/PrivacyPolicy"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1464D8] hover:underline"
              >
                <FileText size={12} /> Privacy Policy
              </a>
              <a
                href="/TermsofService"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1464D8] hover:underline"
              >
                <FileText size={12} /> Terms of Service
              </a>
              <a
                href="/Cookies"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1464D8] hover:underline"
              >
                <FileText size={12} /> Cookie Policy
              </a>
              <a
                href="/Disclaimer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1464D8] hover:underline"
              >
                <FileText size={12} /> Disclaimer
              </a>
            </div>
          </div>
        </aside>

        {/* Right Content Column */}
        <article className="space-y-12 text-base font-light leading-relaxed text-slate-600 lg:col-span-8 md:text-lg">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24 space-y-4">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Overview
            </h3>
            <p className="text-lg font-normal leading-relaxed text-slate-900">
              At <strong className="font-semibold">{policyConfig.companyName}</strong>, customer satisfaction is our top priority.
            </p>
            <p className="text-base">
              This policy outlines the terms for cancellations, returns, and refunds in compliance with applicable consumer protection regulations, including the Consumer Protection Act, 2019.
            </p>
          </section>

          {/* Section 2: Order Cancellation */}
          <section id="cancellation" className="scroll-mt-24 space-y-4">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Order Cancellation Policy
            </h3>
            
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-5 text-base">
                <h4 className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900">
                  <PackageX size={18} className="text-[#1464D8]" /> Before Shipment
                </h4>
                <ul className="list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    You may cancel your physical order prior to dispatch by reaching support at{" "}
                    <a href={`mailto:${policyConfig.email}`} className="font-medium text-[#1464D8] hover:underline">
                      {policyConfig.email}
                    </a>.
                  </li>
                  <li>
                    Full refunds for pre-shipment cancellations are credited within <strong>5–7 business days</strong> to the original payment method.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-5 text-base">
                <h4 className="mb-2 text-base font-semibold text-slate-900">
                  After Shipment
                </h4>
                <ul className="list-inside list-disc space-y-2 text-slate-600">
                  <li>In-transit cancellations cannot be processed immediately upon request.</li>
                  <li>
                    You may reject delivery upon courier attempt. Once returned to our processing center in original condition, a refund will be initiated following verification.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Return & Replacement */}
          <section id="returns" className="scroll-mt-24 space-y-4">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Return & Replacement Policy
            </h3>
            
            <h4 className="text-lg font-medium text-slate-900">Eligibility Criteria</h4>
            <p className="text-base">
              Returns or replacements are evaluated exclusively under the following terms:
            </p>
            <ul className="list-inside list-disc space-y-2 text-base">
              <li>Receipt of a damaged, defective, or incorrect product.</li>
              <li>
                Item remains unopened, unused, and in original packaging including all user manuals, invoices, and packed accessories.
              </li>
              <li>Return request raised within <strong>7 days</strong> of delivery receipt.</li>
            </ul>

            <h4 className="pt-2 text-lg font-medium text-slate-900">Non-Returnable Hardware & Items</h4>
            <div className="rounded-xl border border-blue-100/40 bg-blue-50/40 p-4 font-mono text-xs text-slate-600 leading-normal md:text-sm">
              <p className="mb-2 font-bold uppercase tracking-wider text-slate-800">
                EXCLUSIONS FROM RETURN ELIGIBILITY:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Products damaged through improper handling or user misuse</li>
                <li>Software products, downloadable drivers, and virtual license keys</li>
                <li>Opened or unsealed ink cartridges and toner supplies</li>
                <li>Customized, specialized, or custom-configured equipment</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Non-Refundable Services */}
          <section id="services" className="scroll-mt-24 space-y-4">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Non-Refundable Technical Services
            </h3>
            
            <p className="text-base">
              Due to the immediate labor and resources dedicated to remote and digital support sessions, technical services rendered are final and non-refundable once diagnostic work or technical assistance has commenced.
            </p>

            <ul className="list-inside list-disc space-y-1.5 text-base">
              <li>Remote printer troubleshooting and diagnostic sessions</li>
              <li>Printer installation and driver/software setup</li>
              <li>Network and wireless printer configuration</li>
              <li>System OS and peripheral device connectivity support</li>
              <li>Technical consultation sessions</li>
            </ul>

            <div className="flex gap-3 rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 text-base text-slate-800">
              <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-600" />
              <span>
                <strong>Service Rendered Clause:</strong> Once a technician begins remote diagnosis, troubleshooting, or configuration, the service is deemed fulfilled and non-eligible for refunds regardless of user change-of-mind or external outcomes.
              </span>
            </div>
          </section>

          {/* Section 5: Refund Method & Deductions */}
          <section id="refund-method" className="scroll-mt-24 space-y-4">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Refund Method & Deductions
            </h3>

            <div className="flex items-start gap-3 text-base">
              <CreditCard size={20} className="mt-1 shrink-0 text-[#1464D8]" />
              <div className="space-y-2">
                <p className="text-base font-normal text-slate-900">
                  Approved product return refunds are processed directly back to the original payment channel (Credit/Debit Card, Net Banking, or UPI).
                </p>
                <p className="text-sm text-slate-500">
                  Standard processing times range between <strong>7–10 business days</strong> post-inspection approval at our distribution center.
                </p>
              </div>
            </div>

            <p className="text-base pt-2">
              <strong>Deductions:</strong> Partial refunds or restocking charges apply if items are returned missing components, unsealed packaging, or showing physical usage marks.
            </p>
          </section>

          {/* Section 6: Shipping & Disputes */}
          <section id="shipping-disputes" className="scroll-mt-24 space-y-6">
            <h3 className="border-b border-slate-100 pb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Return Shipping & Dispute Handling
            </h3>

            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-lg font-medium text-slate-900">
                <Truck size={18} className="text-[#1464D8]" /> Shipping Provisions
              </h4>
              <p className="text-base">
                We offer complimentary reverse pickup where logistically supported. For locations outside courier coverage, customers ship items directly to our return hub with verified shipping reimbursement provided on valid defect cases.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="flex items-center gap-2 text-lg font-medium text-slate-900">
                <Scale size={18} className="text-[#1464D8]" /> Chargebacks & Dispute Escalation
              </h4>
              <p className="text-base">
                Please communicate directly with support before initiating payment disputes or chargebacks. Unilateral chargebacks on completed technical services will be formally contested using session logs, service records, and diagnostic proofs.
              </p>
            </div>
          </section>

          {/* Section 7: Contact */}
          <section id="contact" className="scroll-mt-24 border-t border-slate-100 pt-8 space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Need Support or Want to File a Request?
            </h3>
            
            <p className="text-base">
              For queries regarding this policy, order status checks, or initiating a return verification, contact our dedicated desk:
            </p>

            <div className="flex items-center gap-3 text-[#1464D8]">
              <Mail size={18} />
              <a href={`mailto:${policyConfig.email}`} className="font-medium hover:underline text-base">
                {policyConfig.email}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={openChat}
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1464D8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-900 active:scale-95"
              >
                <MessageSquare size={16} /> Initiate Support & Return Request
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}