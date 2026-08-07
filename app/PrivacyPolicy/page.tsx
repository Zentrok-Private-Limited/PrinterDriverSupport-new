"use client";

import React, { useState } from "react";
import {
  Shield,
  Calendar,
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Terminal,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

const privacyConfig = {
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
  { id: "collect", label: "1. WHAT INFORMATION DO WE COLLECT?" },
  { id: "process", label: "2. HOW DO WE PROCESS YOUR INFORMATION?" },
  {
    id: "legal",
    label:
      "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
  },
  {
    id: "share",
    label: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
  },
  {
    id: "cookies",
    label: "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
  },
  { id: "keep", label: "6. HOW LONG DO WE KEEP YOUR INFORMATION?" },
  { id: "safe", label: "7. HOW DO WE KEEP YOUR INFORMATION SAFE?" },
  { id: "minors", label: "8. DO WE COLLECT INFORMATION FROM MINORS?" },
  { id: "rights", label: "9. WHAT ARE YOUR PRIVACY RIGHTS?" },
  { id: "dnt", label: "10. CONTROLS FOR DO-NOT-TRACK FEATURES?" },
  {
    id: "us-residents",
    label: "11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
  },
  { id: "updates", label: "12. DO WE MAKE UPDATES TO THIS NOTICE?" },
  { id: "contact", label: "13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
  {
    id: "review",
    label:
      "14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
  },
];

const privacyTableRows = [
  {
    cat: "A. Identifiers",
    ex: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
    collected: "NO",
  },
  {
    cat: "B. Personal information as defined in the Ohio Customer Records statute",
    ex: "Name, contact information, education, employment, employment history, and financial information",
    collected: "NO",
  },
  {
    cat: "C. Protected classification characteristics under state or federal law",
    ex: "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
    collected: "NO",
  },
  {
    cat: "D. Commercial information",
    ex: "Transaction information, purchase history, financial details, and payment information",
    collected: "NO",
  },
  {
    cat: "E. Biometric information",
    ex: "Fingerprints and voiceprints",
    collected: "NO",
  },
  {
    cat: "F. Internet or other similar network activity",
    ex: "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements",
    collected: "NO",
  },
  { cat: "G. Geolocation data", ex: "Device location", collected: "NO" },
  {
    cat: "H. Audio, electronic, sensory, or similar information",
    ex: "Images and audio, video or call recordings created in connection with our business activities",
    collected: "NO",
  },
  {
    cat: "I. Professional or employment-related information",
    ex: "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
    collected: "NO",
  },
  {
    cat: "J. Education Information",
    ex: "Student records and directory information",
    collected: "NO",
  },
  {
    cat: "K. Inferences drawn from collected personal information",
    ex: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
    collected: "NO",
  },
  {
    cat: "L. Sensitive personal Information",
    ex: "Social Security Numbers, driver's licenses, or account log-in details",
    collected: "NO",
  },
];

// Structural Background Vector Mesh Overlay
const BlueprintGridLines = () => (
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] -z-10 px-6">
    <div className="w-full h-full border-x border-slate-900 grid grid-cols-4 gap-0">
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
    </div>
  </div>
);

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <BlueprintGridLines />

      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto text-center space-y-4 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-blue-50/40 rounded-full blur-[140px] -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1464D8] border border-blue-100/60 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mx-auto">
          <Shield size={13} /> Legal Notice
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 uppercase">
          Privacy Policy
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Left Interactive Document Control Console */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-[#1464D8]" /> Document Outline
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
          {/* Introductory Abstract */}
          <section className="space-y-4">
            <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed">
              This Privacy Notice for {privacyConfig.companyName} ("
              <strong className="font-semibold">we</strong>," "
              <strong className="font-semibold">us</strong>," or "
              <strong className="font-semibold">our</strong>"), describes how
              and why we might access, collect, store, use, and/or share ("
              <strong className="font-semibold">process</strong>") your personal
              information when you use our services ("
              <strong className="font-semibold">Services</strong>"), including
              when you:
            </p>
            <ul className="space-y-3 text-base pl-2 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-[#1464D8] mt-1 shrink-0"
                />
                <span>
                  Visit our website at{" "}
                  <a
                    href={privacyConfig.url}
                    className="text-[#1464D8] hover:underline font-normal inline-flex items-center gap-0.5"
                  >
                    {privacyConfig.url}
                    <ExternalLink size={12} />
                  </a>{" "}
                  or any website of ours that links to this Privacy Notice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-[#1464D8] mt-1 shrink-0"
                />
                <span>
                  Use {privacyConfig.companyName}. At{" "}
                  {privacyConfig.companyName}, we focus on technical accuracy
                  and timely service. Our business is built on providing
                  diagnostic clarity and performing repairs that aim to extend
                  the lifecycle of your household appliances. We serve
                  residential clients with a commitment to maintaining standard
                  operating procedures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-[#1464D8] mt-1 shrink-0"
                />
                <span>
                  Engage with us in other related ways, including any marketing
                  or events.
                </span>
              </li>
            </ul>
            <p className="pt-4 text-base">
              <strong className="font-semibold text-slate-900">
                Questions or concerns?
              </strong>{" "}
              Reading this Privacy Notice will help you understand your privacy
              rights and choices. We are responsible for making decisions about
              how your personal information is processed. If you do not agree
              with our policies and practices, please do not use our Services.
              If you still have any questions or concerns, please contact us at{" "}
              <a
                href={`mailto:${privacyConfig.email}`}
                className="text-[#1464D8] font-normal hover:underline"
              >
                {privacyConfig.email}
              </a>
              .
            </p>
          </section>

          {/* Key Summary Matrix Box */}
          <section className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6">
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <FileText className="text-[#1464D8]" size={20} /> SUMMARY OF KEY
              POINTS
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by using our
              table of contents above to find the section you are looking for.
            </p>
            <div className="grid gap-4 text-sm font-light">
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  What personal information do we process?
                </strong>
                When you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  Do we process any sensitive personal information?
                </strong>
                Some of the information may be considered "special" or
                "sensitive" in certain jurisdictions, for example your racial or
                ethnic origins, sexual orientation, and religious beliefs. We do
                not process sensitive personal information.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  Do we collect any information from third parties?
                </strong>
                We do not collect any information from third parties.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  How do we process your information?
                </strong>
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  In what situations and with which parties do we share personal
                  information?
                </strong>
                We may share information in specific situations and with
                specific third parties.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  How do we keep your information safe?
                </strong>
                We have adequate organizational and technical processes and
                procedures in place to protect your personal information.
                However, no electronic transmission over the internet or
                information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be
                able to defeat our security.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/50">
                <strong className="font-semibold text-slate-900 block mb-1">
                  What are your rights?
                </strong>
                Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights
                regarding your personal information.
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section id="collect" className="space-y-4 pt-6 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              1. WHAT INFORMATION DO WE COLLECT?
            </h3>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-slate-800">
                Personal information you disclose to us
              </h5>
              <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
                In Short: We collect personal information that you provide to
                us.
              </p>
              <p className="text-base">
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-base">
                <strong className="font-semibold text-slate-900">
                  Personal Information Provided by You.
                </strong>{" "}
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include the following:
              </p>
              <ul className="list-disc list-inside text-sm pl-4 space-y-1 font-normal text-slate-700">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
              </ul>
              <p className="text-base font-normal text-slate-900 pt-2">
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
              </p>
              <p className="text-sm italic text-slate-400">
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <h5 className="text-base font-semibold text-slate-800">
                Information automatically collected
              </h5>
              <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
                In Short: Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected
                automatically when you visit our Services.
              </p>
              <p className="text-base">
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>
              <p className="text-base">
                <strong className="font-semibold text-slate-900">
                  Location Data.
                </strong>{" "}
                We collect location data such as information about your device's
                location, which can be either precise or imprecise. How much
                information we collect depends on the type and settings of the
                device you use to access the Services. For example, we may use
                GPS and other technologies to collect geolocation data that
                tells us your current location (based on your IP address). You
                can opt out of allowing us to collect this information either by
                refusing access to the information or by disabling your Location
                setting on your device. However, if you choose to opt out, you
                may not be able to use certain aspects of the Services.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="process" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We process the personal
              information for the following purposes listed below. We may also
              process your information for other purposes only with your prior
              explicit consent.
            </p>
            <p className="text-base">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc list-inside text-base pl-4 space-y-1">
              <li>
                <strong className="font-semibold text-slate-900">
                  To deliver and facilitate delivery of services to the user.
                </strong>{" "}
                We may process your information to provide you with the
                requested service.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="legal" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>
            <p className="text-base font-semibold text-slate-900">
              If you are located in Canada, this section applies to you.
            </p>
            <p className="text-base">
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time.
            </p>
            <p className="text-base">
              In some exceptional cases, we may be legally permitted under
              applicable law to process your information without your consent,
              including, for example:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 pl-4 text-slate-700">
              <li>
                If collection is clearly in the interests of an individual and
                consent cannot be obtained in a timely way
              </li>
              <li>For investigations and fraud detection and prevention</li>
              <li>
                For business transactions provided certain conditions are met
              </li>
              <li>
                If it is contained in a witness statement and the collection is
                necessary to assess, process, or settle an insurance claim
              </li>
              <li>
                For identifying injured, ill, or deceased persons and
                communicating with next of kin
              </li>
              <li>
                If we have reasonable grounds to believe an individual has been,
                is, or may be victim of financial abuse
              </li>
              <li>
                If it is reasonable to expect collection and use with consent
                would compromise the availability or the accuracy of the
                information and the collection is reasonable for purposes
                related to investigating a breach of an agreement or a
                contravention of the laws of Canada or a province
              </li>
              <li>
                If disclosure is required to comply with a subpoena, warrant,
                court order, or rules of the court relating to the production of
                records
              </li>
              <li>
                If it was produced by an individual in the course of their
                employment, business, or profession and the collection is
                consistent with the purposes for which the information was
                produced
              </li>
              <li>
                If the collection is solely for journalistic, artistic, or
                literary purposes
              </li>
              <li>
                If the information is publicly available and is specified by the
                regulations
              </li>
              <li>
                We may disclose de-identified information for approved research
                or statistics projects, subject to ethics oversight and
                confidentiality commitments
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="share" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We may share information in specific situations
              described in this section and/or with the following third parties.
            </p>
            <p className="text-base">
              We may need to share your personal information in the following
              situations:
            </p>
            <ul className="list-disc list-inside text-base pl-4">
              <li>
                <strong className="font-semibold text-slate-900">
                  Business Transfers.
                </strong>{" "}
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="cookies" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p className="text-base">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services, prevent crashes, fix bugs, save your
              preferences, and assist with basic site functions.
            </p>
            <p className="text-base">
              We also permit third parties and service providers to use online
              tracking technologies on our Services for analytics and
              advertising, including to help manage and display advertisements,
              to tailor advertisements to your interests, or to send abandoned
              shopping cart reminders (depending on your communication
              preferences).
            </p>
            <p className="text-base">
              To the extent these online tracking technologies are deemed to be
              a "sale"/"sharing" (which includes targeted advertising, as
              defined under the applicable laws) under applicable US state laws,
              you can opt out of these online tracking technologies by
              submitting a request as described below under section "DO UNITED
              STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
            </p>
            <p className="text-base font-semibold text-slate-800 pt-2">
              Google Analytics
            </p>
            <p className="text-base">
              We may share your information with Google Analytics to track and
              analyze the use of the Services. The Google Analytics Advertising
              Features that we may use include: Google Analytics Demographics
              and Interests Reporting. To opt out of being tracked by Google
              Analytics across the Services, visit{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#1464D8] font-normal hover:underline inline-flex items-center gap-0.5"
              >
                tools.google.com/dlpage/gaoptout <ExternalLink size={12} />
              </a>
              . You can opt out of Google Analytics Advertising Features through
              Ads Settings and Ad Settings for mobile apps. Other opt out means
              include{" "}
              <a
                href="http://optout.networkadvertising.org/"
                className="text-[#1464D8] font-normal hover:underline"
              >
                optout.networkadvertising.org
              </a>{" "}
              and{" "}
              <a
                href="http://www.networkadvertising.org/mobile-choice"
                className="text-[#1464D8] font-normal hover:underline"
              >
                networkadvertising.org/mobile-choice
              </a>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section id="keep" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Notice unless
              otherwise required by law.
            </p>
            <p className="text-base">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>
          </section>

          {/* Section 7 */}
          <section id="safe" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We have adequate organizational and technical processes
              and procedures in place to protect your personal information.
            </p>
            <p className="text-base">
              We have adequate organizational and technical processes and
              procedures in place to protect your personal information. However,
              no electronic transmission over the internet or information
              storage technology can be guaranteed to be 100% secure, so we
              cannot promise or guarantee that hackers, cybercriminals, or other
              unauthorized third parties will not be able to defeat our security
              and improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </section>

          {/* Section 8 */}
          <section id="minors" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              8. DO WE COLLECT INFORMATION FROM MINORS?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age or the equivalent age as specified
              by law in your jurisdiction.
            </p>
            <p className="text-base">
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age or the equivalent age as specified
              by law in your jurisdiction, nor do we knowingly sell such
              personal information. By using the Services, you represent that
              you are at least 18 or the equivalent age as specified by law in
              your jurisdiction or that you are the parent or guardian of such a
              minor and consent to such minor dependent’s use of the Services.
              If we learn that personal information from users less than 18
              years of age has been collected, we will deactivate the account
              and take reasonable measures to promptly delete such data from our
              records.
            </p>
          </section>

          {/* Section 9 */}
          <section id="rights" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: Depending on your state of residence in the US or in
              some regions, such as Canada, you have rights that allow you
              greater access to and control over your personal information. You
              may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </p>
            <p className="text-base">
              In some regions (like Canada), you have certain rights under
              applicable data protection laws. These may include the right (i)
              to request access and obtain a copy of your personal information,
              (ii) to request rectification or erasure; (iii) to restrict the
              processing of your personal information; (iv) if applicable, to
              data portability; and (v) not to be subject to automated
              decision-making. If a decision that produces legal or similarly
              significant effects is made solely by automated means, we will
              inform you, explain the main factors, and offer a simple way to
              review.
            </p>
          </section>

          {/* Section 10 */}
          <section id="dnt" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h3>
            <p className="text-base">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online.
            </p>
          </section>

          {/* Section 11 - Regulatory Table Matrix */}
          <section id="us-residents" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h3>
            <p className="text-base">
              The table below shows the categories of personal information we
              have collected in the past twelve (12) months. The table includes
              illustrative examples of each category and does not reflect the
              personal information we collect from you.
            </p>

            {/* Scraped Statutory Compliance Table Mapping */}
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                    <th className="p-4 w-1/4">Category</th>
                    <th className="p-4 w-1/2">Examples</th>
                    <th className="p-4 w-1/4 text-center">Collected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light">
                  {privacyTableRows.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/50">
                      <td className="p-4 font-medium text-slate-900">
                        {row.cat}
                      </td>
                      <td className="p-4 text-slate-500 leading-normal">
                        {row.ex}
                      </td>
                      <td className="p-4 text-center font-bold text-amber-600">
                        {row.collected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base pt-2">
              We have not disclosed, sold, or shared any personal information to
              third parties for a business or commercial purpose in the
              preceding twelve (12) months. We will not sell or share personal
              information in the future belonging to website visitors, users,
              and other consumers.
            </p>

            <h5 className="text-base font-semibold text-slate-800 pt-4">
              Your Rights
            </h5>
            <ul className="list-disc list-inside text-sm pl-2 space-y-2 text-slate-700">
              <li>
                Right to know whether or not we are processing your personal
                data
              </li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request the deletion of your personal data</li>
              <li>
                Right to obtain a copy of the personal data you previously
                shared with us
              </li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>
                Right to opt out of the processing of your personal data if it
                is used for targeted advertising, the sale of personal data, or
                profiling in furtherance of decisions that produce legal or
                similarly significant effects ("profiling")
              </li>
            </ul>
          </section>

          {/* Section 12 */}
          <section id="updates" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              12. DO WE MAKE UPDATES TO THIS NOTICE?
            </h3>
            <p className="text-xs font-mono text-[#1464D8] uppercase tracking-wider">
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p className="text-base">
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this Privacy Notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this Privacy Notice frequently to be informed of how we are
              protecting your information.
            </p>
          </section>

          {/* Section 13 */}
          <section id="contact" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h3>
            <p className="text-base">
              If you have questions or comments about this notice, you may email
              us at{" "}
              <strong className="font-semibold text-slate-900">
                {privacyConfig.email}
              </strong>{" "}
              or contact us by post at:
            </p>
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/40 text-sm space-y-1 font-normal text-slate-800 font-mono">
              <p className="pb-4 text-base text-slate-800 font-sans font-bold">
                Brand owned by <a href="printerservicellc.com" className="text-blue-600">Printer Service LLC</a>
              </p>
              <p className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs tracking-wide uppercase">
                <MapPin size={14} className="text-[#1464D8]" /> Registered
                Mailing Address
              </p>
              <p>{privacyConfig.corporateAddress.name}</p>
              <p>{privacyConfig.corporateAddress.building}</p>
              <p>{privacyConfig.corporateAddress.Address}</p>
              <p className="pt-2 text-sm text-slate-800 font-sans font-light">
                Email Support: {privacyConfig.email}
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="review" className="space-y-4 pt-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h3>
            <p className="text-base">
              Based on the applicable laws of your country or state of residence
              in the US, you may have the right to request access to the
              personal information we collect from you, details about how we
              have processed it, correct inaccuracies, or delete your personal
              information. You may also have the right to withdraw your consent
              to our processing of your personal information. These rights may
              be limited in some circumstances by applicable law. To request to
              review, update, or delete your personal information, please
              contact us.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}