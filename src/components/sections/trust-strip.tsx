import React from "react";
import Card from "../ui/card";
import { CheckCircle2, ShieldCheck, Landmark, BadgePercent, Wrench } from "lucide-react";

export default function TrustStrip() {
  const points = [
    {
      icon: <BadgePercent className="w-8 h-8 text-primary" />,
      title: "Pay Just 10% Upfront",
      desc: "Only pay 10% upfront. We secure the remaining 90% via easy bank loans.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-secondary" />,
      title: "EMI equals Current Bill",
      desc: "Use your existing electricity bill budget to pay the monthly solar EMI.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Free Installation",
      desc: "No hidden fees. Full system installation completed by certified professionals.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Loan-Free After 5 Years",
      desc: "After a short 5-year loan payoff, enjoy 20+ years of 100% free electricity.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
      title: "₹78,000 Subsidy Support",
      desc: "We claim your PM Surya Ghar Yojana subsidy and handle all the paperwork.",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((pt, idx) => (
            <Card
              key={idx}
              variant="flat"
              className="p-5 border-slate-100 hover:border-primary/30 flex flex-col justify-between hover:shadow-md h-full"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-dark mb-1">{pt.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{pt.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Local DISCOM trust sub-bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-semibold text-center">
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> MNRE Approved Vendor
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-sky-500" /> TSSPDCL & TSNPDCL Net Metering Compliant
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-amber-500" /> PM Surya Ghar Portal Registered
          </span>
        </div>
      </div>
    </section>
  );
}
