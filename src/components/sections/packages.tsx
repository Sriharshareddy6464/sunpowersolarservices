import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import { Check, ShieldCheck, Home, Building2, Fence } from "lucide-react";

export default function Packages() {
  const packs = [
    {
      title: "For Residential",
      subtitle: "Custom Rooftop Systems",
      icon: <Home className="w-8 h-8 text-primary" />,
      desc: "Perfect for independent houses and apartment buildings looking to eliminate electricity bills.",
      benefits: [
        "Up to ₹78,000 govt subsidy support",
        "Just 10% upfront payment required",
        "EMI same as your existing monthly bill",
        "25 years of guaranteed free power",
      ],
      cta: "Get Estimate",
      border: "border-primary/20",
    },
    {
      title: "For Commercial",
      subtitle: "High ROI Industrial Solar",
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      desc: "Designed for schools, hospitals, offices, and warehouses looking to lower operational costs.",
      benefits: [
        "40% Accelerated Depreciation tax benefit",
        "Significantly lower cost per kW",
        "Enormous long-term energy savings",
        "Boost brand's green sustainability image",
      ],
      cta: "Get Business Quote",
      border: "border-secondary/20 animate-pulse-slow",
    },
    {
      title: "Solar Fencing",
      subtitle: "Secure Field Protection",
      icon: <Fence className="w-8 h-8 text-accent" />,
      desc: "Eco-friendly perimeter security for remote farmlands, crops, livestock, and residential properties.",
      benefits: [
        "Safe, brief, non-lethal electrical pulses",
        "Deters intruders and wild animals",
        "100% solar powered (works in remote areas)",
        "Extremely reliable and low maintenance",
      ],
      cta: "Get Security Estimate",
      border: "border-accent/20",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-dark font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Custom Solar Services Built for You
          </h2>
          <p className="text-slate-600 font-sans">
            We make going solar simple, so you get better energy service at a fraction of the cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packs.map((pk, idx) => (
            <Card
              key={idx}
              variant="flat"
              className={`p-8 border-2 ${pk.border} hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col justify-between h-full`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold text-dark">{pk.title}</h3>
                    <span className="text-xs font-semibold text-slate-400">{pk.subtitle}</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    {pk.icon}
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-sans">{pk.desc}</p>
                
                <div className="w-full h-px bg-slate-100" />

                {/* Benefits list */}
                <ul className="space-y-3">
                  {pk.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA */}
              <div className="pt-8">
                <Button
                  variant={idx === 1 ? "secondary" : idx === 2 ? "accent" : "primary"}
                  size="md"
                  className="w-full text-center"
                  href="#contact"
                >
                  {pk.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
