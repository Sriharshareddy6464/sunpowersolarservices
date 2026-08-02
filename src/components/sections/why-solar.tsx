import React from "react";
import Card from "../ui/card";
import { DollarSign, Settings, Globe, Home, Landmark, ShieldAlert } from "lucide-react";

export default function WhySolar() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      title: "Save on Electricity Bills",
      desc: "Generate your own power and reduce or even eliminate monthly electricity expenses entirely.",
      bg: "bg-emerald-50/50 border-emerald-100",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-600" />,
      title: "Low Maintenance Costs",
      desc: "Minimal upkeep required. Occasional cleaning twice a year keeps system performing at its best.",
      bg: "bg-amber-50/50 border-amber-100",
    },
    {
      icon: <Globe className="w-6 h-6 text-sky-600" />,
      title: "Eco-Friendly & Clean",
      desc: "100% clean, green, renewable energy source. Protect the ecosystem and reduce carbon emissions.",
      bg: "bg-sky-50/50 border-sky-100",
    },
    {
      icon: <Home className="w-6 h-6 text-indigo-600" />,
      title: "Boost Property Value",
      desc: "Homes and commercial buildings with solar power installations command higher resale values.",
      bg: "bg-indigo-50/50 border-indigo-100",
    },
    {
      icon: <Landmark className="w-6 h-6 text-teal-600" />,
      title: "Government Subsidies",
      desc: "Avail central and state government incentives, making your investment payback faster.",
      bg: "bg-teal-50/50 border-teal-100",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      title: "Energy Independence",
      desc: "Shield yourself from rising utility tariffs and unexpected power grid blackouts.",
      bg: "bg-rose-50/50 border-rose-100",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-primary/10 text-dark font-bold text-xs uppercase tracking-wider rounded-full">
              Why Go Solar?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
              A Smart Financial Decision for the Next 25 Years
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Solar is no longer just an environmental choice—it's one of the best performing financial investments you can make for your home or business.
            </p>
            <div className="pt-2 hidden lg:block">
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
          </div>

          {/* Right Side: Benefits Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <Card
                key={idx}
                variant="flat"
                className={`p-6 border ${b.bg} hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    {b.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base text-dark">{b.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{b.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
