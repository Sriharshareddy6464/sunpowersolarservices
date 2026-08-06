import React from "react";
import Card from "../ui/card";
import { Sun, Cpu, Zap, RadioReceiver, Smartphone } from "lucide-react";

export default function HowSolarWorks() {
  const steps = [
    {
      num: "01",
      icon: <Sun className="w-6 h-6 text-primary" />,
      title: "Sunlight Hits Solar Panels",
      desc: "Solar panels (photovoltaic cells) absorb sunlight and generate Direct Current (DC) electricity.",
    },
    {
      num: "02",
      icon: <Cpu className="w-6 h-6 text-secondary" />,
      title: "Inverter Converts to AC",
      desc: "Since home appliances run on Alternating Current (AC), the inverter converts the DC to usable AC power.",
    },
    {
      num: "03",
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Power Your Home/Business",
      desc: "Usable AC electricity is routed through the main breaker board, powering your appliances instantly.",
    },
    {
      num: "04",
      icon: <RadioReceiver className="w-6 h-6 text-primary" />,
      title: "Extra Energy to the Grid",
      desc: "Surplus power is fed back to the electricity grid via net metering, earning credits on your power bill.",
    },
    {
      num: "05",
      icon: <Smartphone className="w-6 h-6 text-secondary" />,
      title: "Real-Time App Monitoring",
      desc: "Track daily energy generation and household usage live through mobile app dashboards.",
    },
  ];

  return (
    <section id="how-solar-works" className="py-20 bg-slate-900 text-white border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-secondary/10 text-secondary border border-secondary/20 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Workflow Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            So... How Does It Actually Work?
          </h2>
          <p className="text-slate-300 font-sans text-sm md:text-base">
            A simple 5-step loop that transforms natural sunlight into clean, reliable power for your home or business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((st, idx) => (
              <Card
                key={idx}
                variant="glass-dark"
                className="p-6 border border-white/10 flex flex-col justify-between hover:border-primary/40 relative group h-full"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex justify-between items-center">
                    <span className="font-numbers text-3xl font-extrabold text-slate-600 group-hover:text-primary transition-colors duration-300">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {st.icon}
                    </div>
                  </div>
                  
                  {/* Step copy */}
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-sm text-white">{st.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{st.desc}</p>
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
