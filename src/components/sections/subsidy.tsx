import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import { CheckCircle2, FileText, Building, ClipboardCheck, ExternalLink } from "lucide-react";

export default function SubsidyGuide() {
  const steps = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
      title: "Register on Official PM Surya Ghar Portal",
      desc: "Submit your Aadhaar, electricity consumer number, and bank account details directly on pmsuryaghar.gov.in.",
    },
    {
      icon: <FileText className="w-5 h-5 text-secondary" />,
      title: "Obtain DISCOM Technical Approval",
      desc: "TSSPDCL / TSNPDCL approves feasibility. We handle all technical documentation & portal filings on your behalf.",
    },
    {
      icon: <Building className="w-5 h-5 text-primary" />,
      title: "MNRE-Approved Installation",
      desc: "Our certified team installs DCR solar panels (ALMM compliant) and BIS-standard inverters as required by MNRE.",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-accent" />,
      title: "Net Meter & Direct Benefit Transfer",
      desc: "Following DISCOM inspection and net meter setup, up to ₹78,000 is directly credited to your Aadhaar-linked bank account.",
    },
  ];

  return (
    <section id="subsidy" className="py-20 bg-slate-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Schema metadata declaration for Govt Scheme */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentPermit",
            "name": "PM Surya Ghar Muft Bijli Yojana Central Subsidy",
            "description": "Central government subsidy scheme offering up to ₹78,000 for rooftop solar installation in India.",
            "url": "https://pmsuryaghar.gov.in/",
            "validIn": {
              "@type": "AdministrativeArea",
              "name": "Telangana, India"
            }
          }),
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Heading callout & official data */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 bg-primary/20 text-primary border border-primary/30 font-bold text-xs uppercase tracking-wider rounded-full">
              Government Incentive Scheme
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Why Is The Government Paying You <span className="text-primary font-numbers">₹78,000</span>?
            </h2>
            
            <p className="text-slate-300 leading-relaxed font-sans text-sm md:text-base">
              Under the central government&apos;s flagship <strong className="text-white">PM Surya Ghar: Muft Bijli Yojana</strong> scheme, India is accelerating clean energy adoption by directly subsidizing residential rooftop solar.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10 text-center">
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">1 kW</span>
                <span className="text-xs text-slate-400">₹30,000 Subsidy</span>
              </div>
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">2 kW</span>
                <span className="text-xs text-slate-400">₹60,000 Subsidy</span>
              </div>
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">3 kW+</span>
                <span className="text-xs text-slate-400">₹78,000 Max</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button variant="primary" size="md" href="#contact">
                Apply for Subsidy Support
              </Button>
              <a
                href="https://pmsuryaghar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <span>Official Portal (pmsuryaghar.gov.in)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Step-by-step process */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((st, idx) => (
              <Card key={idx} variant="glass-dark" className="p-5 flex items-start gap-4 border border-white/10 hover:border-primary/40 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {st.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary font-numbers">Step {idx + 1}</span>
                  <h4 className="font-bold text-white text-sm mt-0.5">{st.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">{st.desc}</p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
