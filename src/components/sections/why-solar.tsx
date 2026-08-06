import React from "react";
import Card from "../ui/card";
import { DollarSign, Settings, Globe, Home, Landmark, ShieldAlert } from "lucide-react";

export default function WhySolar() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      title: "Save on Electricity Bills",
      desc: "Generate your own power and reduce or even eliminate monthly electricity expenses entirely.",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-400" />,
      title: "Low Maintenance Costs",
      desc: "Minimal upkeep required. Occasional cleaning twice a year keeps system performing at its best.",
    },
    {
      icon: <Globe className="w-6 h-6 text-sky-400" />,
      title: "Eco-Friendly & Clean",
      desc: "100% clean, green, renewable energy source. Protect the ecosystem and reduce carbon emissions.",
    },
    {
      icon: <Home className="w-6 h-6 text-indigo-400" />,
      title: "Boost Property Value",
      desc: "Homes and commercial buildings with solar power installations command higher resale values.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-teal-400" />,
      title: "Government Subsidies",
      desc: "Avail central and state government incentives, making your investment payback faster.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      title: "Energy Independence",
      desc: "Shield yourself from rising utility tariffs and unexpected power grid blackouts.",
    },
  ];

  return (
    <section id="why-solar" className="py-20 bg-slate-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold text-xs uppercase tracking-wider rounded-full">
              Why Go Solar?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Is Solar Really Worth It?
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans text-sm md:text-base">
              Solar is no longer just an environmental choice—it&apos;s one of the best performing financial investments you can make for your home or business in Telangana.
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
                variant="glass-dark"
                className="p-6 border border-white/10 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base text-white">{b.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{b.desc}</p>
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
