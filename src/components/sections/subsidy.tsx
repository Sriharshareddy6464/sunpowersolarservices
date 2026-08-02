import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import { CheckCircle2, FileText, Building, ClipboardCheck } from "lucide-react";

export default function SubsidyGuide() {
  const steps = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
      title: "Register on PM Surya Ghar Portal",
      desc: "Submit your Aadhaar, electricity consumer number, and bank account details on the national portal.",
    },
    {
      icon: <FileText className="w-5 h-5 text-secondary" />,
      title: "Obtain DISCOM Approval",
      desc: "Your electricity distribution company approves your installation. We handle this paperwork for you.",
    },
    {
      icon: <Building className="w-5 h-5 text-primary" />,
      title: "Professional Installation",
      desc: "Our certified team installs your solar system. We use only MNRE-approved panels and inverters.",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-accent" />,
      title: "Net Meter & Subsidy Disbursement",
      desc: "Post inspection, the subsidy of up to ₹78,000 is directly credited to your bank account.",
    },
  ];

  return (
    <section id="subsidy" className="py-20 bg-gradient-to-b from-slate-900 to-dark text-white relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Big number callout */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider rounded-full">
              Government Benefit
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Claim Up to{" "}
              <span className="font-numbers text-5xl md:text-6xl text-primary">₹78,000</span>{" "}
              in Subsidies
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans text-sm md:text-base">
              Under the PM Surya Ghar Muft Bijli Yojana scheme, every eligible household can receive a direct benefit subsidy for installing rooftop solar. We handle all documentation and portal submissions — completely free.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">1 kW</span>
                <span className="text-xs text-slate-400">₹30,000</span>
              </div>
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">2 kW</span>
                <span className="text-xs text-slate-400">₹60,000</span>
              </div>
              <div>
                <span className="font-numbers text-2xl font-bold text-primary block">3 kW+</span>
                <span className="text-xs text-slate-400">₹78,000</span>
              </div>
            </div>

            <Button variant="primary" size="md" href="#contact">
              Get Subsidy Support Help
            </Button>
          </div>

          {/* Right: Step-by-step process */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((st, idx) => (
              <Card key={idx} variant="glass-dark" className="p-5 flex items-start gap-4 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  {st.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 font-numbers">Step {idx + 1}</span>
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
