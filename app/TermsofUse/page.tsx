"use client";

import React, { useState,useRef } from "react";
import {
  Scale,
  Calendar,
  FileText,
  ChevronRight,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

const termsConfig = {
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
  { id: "agreement", label: "1. AGREEMENT TO TERMS" },
  { id: "intellectual", label: "2. INTELLECTUAL PROPERTY RIGHTS" },
  { id: "user-reps", label: "3. USER REPRESENTATIONS" },
  { id: "prohibited", label: "4. PROHIBITED ACTIVITIES" },
  { id: "contributions", label: "5. USER GENERATED CONTRIBUTIONS" },
  { id: "submisssions", label: "6. SUBMISSIONS" },
  { id: "site-management", label: "7. SITE MANAGEMENT" },
  { id: "term-termination", label: "8. TERM AND TERMINATION" },
  { id: "modifications", label: "9. MODIFICATIONS AND INTERRUPTIONS" },
  { id: "governing-law", label: "10. GOVERNING LAW" },
  { id: "disclaimer", label: "11. DISCLAIMER OF WARRANTIES" },
  { id: "limitations", label: "12. LIMITATIONS OF LIABILITY" },
  { id: "indemnification", label: "13. INDEMNIFICATION" },
  { id: "user-data", label: "14. USER DATA" },
  { id: "contact", label: "15. CONTACT US" },
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

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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
          <Scale size={13} /> Legal Agreement
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 uppercase">
          Terms of Service
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Left Interactive Side Navigation Console */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-[#1464D8]" /> Document
              Sections
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
          {/* Section 1: Agreement to Terms */}
          <section id="agreement" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              1. AGREEMENT TO TERMS
            </h3>
            <p className="text-slate-900 font-normal text-lg leading-relaxed">
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you")
              and{" "}
              <strong className="font-semibold">
                {termsConfig.companyName}
              </strong>{" "}
              ("<strong className="font-semibold">we</strong>," "
              <strong className="font-semibold">us</strong>," or "
              <strong className="font-semibold">our</strong>"), concerning your
              access to and use of the{" "}
              <a
                href={termsConfig.url}
                className="text-[#1464D8] hover:underline inline-flex items-center gap-0.5"
              >
                {termsConfig.url}
                <ExternalLink size={12} />
              </a>{" "}
              website as well as any other media form, media channel, mobile
              website or mobile application related, linked, or otherwise
              connected thereto (collectively, the "Site").
            </p>
            <p className="text-base">
              Our business operations and information channels focus strictly on
              technical diagnostic accuracy, timely educational service
              insights, and performing evaluations that support extending the
              operational lifecycle of hardware components, peripheral systems,
              and home appliances. We serve clients with an absolute commitment
              to standard operating procedures.
            </p>
            <p className="text-base font-normal text-slate-900 p-4 rounded-xl bg-amber-50/50 border border-amber-200/50 flex gap-3">
              <AlertTriangle
                size={18}
                className="text-amber-600 shrink-0 mt-0.5"
              />
              <span>
                By accessing the Site, you acknowledge that you have read,
                understood, and agreed to be bound by all of these Terms of
                Service. If you do not agree with all of these Terms of Service,
                then you are expressly prohibited from using the Site and you
                must discontinue use immediately.
              </span>
            </p>
          </section>

          {/* Section 2: Intellectual Property Rights */}
          <section id="intellectual" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              2. INTELLECTUAL PROPERTY RIGHTS
            </h3>
            <p className="text-base">
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks,
              and logos contained therein (the "Marks") are owned or controlled
              by us or licensed to us, and are protected by copyright and
              trademark laws.
            </p>
            <p className="text-base">
              The Content and the Marks are provided on the Site "AS IS" for
              your information and personal use only. Except as expressly
              provided in these Terms of Service, no part of the Site and no
              Content or Marks may be copied, reproduced, aggregated,
              republished, uploaded, posted, publicly displayed, encoded,
              translated, transmitted, distributed, sold, licensed, or otherwise
              exploited for any commercial purpose whatsoever, without our
              express prior written permission.
            </p>
          </section>

          {/* Section 3: User Representations */}
          <section id="user-reps" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              3. USER REPRESENTATIONS
            </h3>
            <p className="text-base">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="space-y-2 text-base pl-2">
              {[
                "All registration information you submit will be true, accurate, current, and complete.",
                "You will maintain the accuracy of such information and promptly update such registration information as necessary.",
                "You have the legal capacity and you agree to comply with these Terms of Service.",
                "You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site.",
                "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.",
                "Your use of the Site will not violate any applicable law or regulation.",
              ].map((rep, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#1464D8] mt-1 shrink-0"
                  />
                  <span className="text-sm md:text-base">{rep}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Prohibited Activities */}
          <section id="prohibited" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              4. PROHIBITED ACTIVITIES
            </h3>
            <p className="text-base">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="text-base">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc list-inside text-sm pl-4 space-y-1.5 text-slate-700 font-normal">
              <li>
                Systematically retrieve data or other content from the Site to
                create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Site, including features that
                prevent or restrict the use or copying of any Content or enforce
                limitations on the use of the Site and/or the Content contained
                therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Site.
              </li>
              <li>
                Use any information obtained from the Site in order to harass,
                abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Site in a manner inconsistent with any applicable laws
                or regulations.
              </li>
            </ul>
          </section>

          {/* Section 5: User Generated Contributions */}
          <section id="contributions" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              5. USER GENERATED CONTRIBUTIONS
            </h3>
            <p className="text-base">
              The Site does not open user accounts or permit visitors to
              construct, submit, or post visible public commentary, live
              discussion portals, or profile interfaces ("Contributions").
              However, should options become accessible for interactive forms,
              feedback queries, or structural message interactions, you retain
              ownership of your structural feedback data while granting us an
              unhindered right to apply such technical recommendations to
              improve the operation of our system modules.
            </p>
          </section>

          {/* Section 6: Submissions */}
          <section id="submisssions" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              6. SUBMISSIONS
            </h3>
            <p className="text-base">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site ("Submissions") provided by you to us are non-confidential
              and shall become our sole property. We shall own exclusive rights,
              including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these Submissions for
              any lawful purpose, commercial or otherwise, without
              acknowledgment or compensation to you.
            </p>
          </section>

          {/* Section 7: Site Management */}
          <section id="site-management" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              7. SITE MANAGEMENT
            </h3>
            <p className="text-base">
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms of Service; (2) take
              appropriate legal action against anyone who, in our sole
              discretion, violates the law or these Terms of Service, including
              without limitation, reporting such user to law enforcement
              authorities; (3) in our sole discretion and without limitation,
              refuse, restrict access to, limit the availability of, or disable
              (to the extent technologically feasible) any of your submissions
              or any portion thereof; and (4) otherwise manage the Site in a
              manner designed to protect our rights and property and to
              facilitate the proper functioning of the Site.
            </p>
          </section>

          {/* Section 8: Term and Termination */}
          <section id="term-termination" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              8. TERM AND TERMINATION
            </h3>
            <p className="text-base">
              These Terms of Service shall remain in full force and effect while
              you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
              AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
              ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
            </p>
          </section>

          {/* Section 9: Modifications and Interruptions */}
          <section id="modifications" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              9. MODIFICATIONS AND INTERRUPTIONS
            </h3>
            <p className="text-base">
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Site without notice at any time. We
              will not be liable to you or any third party for any modification,
              price change, suspension, or discontinuance of the Site.
            </p>
            <p className="text-base">
              We cannot guarantee the Site will be available at all times. We
              may experience hardware, software, or other problems or need to
              perform maintenance related to the Site, resulting in
              interruptions, delays, or errors.
            </p>
          </section>

          {/* Section 10: Governing Law */}
          <section id="governing-law" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              10. GOVERNING LAW
            </h3>
            <p className="text-base">
              These Terms of Service and your use of the Site are governed by
              and construed in accordance with the laws applicable to the
              registration and corporate operations of{" "}
              <strong className="font-semibold">
                {termsConfig.corporateAddress.name}
              </strong>
              , without regard to its conflict of law principles. Any legal
              action or procedural dispute arising out of these conditions must
              be brought within a court of competent jurisdiction aligned with
              our structural management node.
            </p>
          </section>

          {/* Section 11: Disclaimer */}
          <section id="disclaimer" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              11. DISCLAIMER OF WARRANTIES
            </h3>
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl space-y-3 text-sm font-mono text-slate-700 leading-normal">
              <p className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldAlert size={16} className="text-[#1464D8]" /> ABSOLUTE
                SYSTEM WARRANTY DISCLAIMER
              </p>
              <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR
                SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
                ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>
              <p>
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY
                WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
                RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
                CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE,
                OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE
                OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN.
              </p>
            </div>
          </section>

          {/* Section 12: Limitations of Liability */}
          <section id="limitations" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              12. LIMITATIONS OF LIABILITY
            </h3>
            <p className="text-base">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* Section 13: Indemnification */}
          <section id="indemnification" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              13. INDEMNIFICATION
            </h3>
            <p className="text-base">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys' fees and expenses, made by any third party due to or
              arising out of: (1) use of the Site; (2) breach of these Terms of
              Service; (3) any breach of your representations and warranties set
              forth in these Terms of Service; or (4) any overt harmful act
              toward any other user of the Site with whom you connected via the
              Site.
            </p>
          </section>

          {/* Section 14: User Data */}
          <section id="user-data" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              14. USER DATA
            </h3>
            <p className="text-base">
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </p>
          </section>

          {/* Section 15: Contact Us */}
          <section id="contact" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              15. CONTACT US
            </h3>
            <p className="text-base">
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              by email at{" "}
              <strong className="font-semibold text-slate-900">
                {termsConfig.email}
              </strong>{" "}
              or by post at:
            </p>
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/40 text-sm space-y-1 font-normal text-slate-800 font-mono">
                            <p className="pb-4 text-base text-slate-800 font-sans font-bold">
                Brand owned by <a href="printerservicellc.com" className="text-blue-600">Printer Service LLC</a>
              </p>
                          <p className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs tracking-wide uppercase">
                            <MapPin size={14} className="text-[#1464D8]" /> Registered Mailing Address 
                          </p>
                          <p>{termsConfig.corporateAddress.name}</p>
                          <p>{termsConfig.corporateAddress.building}</p>
                          <p>{termsConfig.corporateAddress.Address}</p>
                          <p className="pt-2 text-sm text-slate-800 font-sans font-light">
                            Email Support: {termsConfig.email}
                          </p>
                        </div>
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