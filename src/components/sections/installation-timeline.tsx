import React from "react";
import Card from "../ui/card";
import { MapPin, PenTool, FileCheck, Hammer, Cable, Star } from "lucide-react";

export default function InstallationTimeline() {
  const steps = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Site Survey",
      duration: "Day 1",
      desc: "Our experts assess your roof's size, slope, orientation, and shading to find the ideal layout.",
      color: "bg-primary text-dark",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "System Design",
      duration: "Day 2–3",
      desc: "A custom solar system is designed based on your energy needs, roof space, and budget.",
      color: "bg-secondary text-white",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Permits & Approvals",
      duration: "Day 4–10",
      desc: "We handle DISCOM approvals, MNRE portal registration, and all government paperwork for you.",
      color: "bg-accent text-white",
    },
    {
      icon: <Hammer className="w-5 h-5" />,
      title: "Professional Installation",
      duration: "Day 11–13",
      desc: "Certified technicians mount the panels, inverter, wiring, and all supporting hardware safely.",
      color: "bg-primary text-dark",
    },
    {
      icon: <Cable className="w-5 h-5" />,
      title: "Grid Connection",
      duration: "Day 14–20",
      desc: "Your system is connected to the power grid with a net meter installed by the electricity board.",
      color: "bg-secondary text-white",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Handover & Training",
      duration: "Day 21",
      desc: "We test everything, demonstrate the monitoring app, and hand over your zero-bill solar home.",
      color: "bg-accent text-white",
    },
  ];

  return (
    <section id="installation" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            From Survey to Savings in 21 Days
          </h2>
          <p className="text-slate-600 font-sans">
            A transparent, step-by-step process with zero guesswork — we handle everything from paperwork to power-on.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector */}
          <div className="absolute top-10 left-16 right-16 h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Icon bubble */}
                <div className={`w-20 h-20 rounded-full ${st.color} flex items-center justify-center shadow-lg mb-4 ring-4 ring-white`}>
                  {st.icon}
                </div>
                <span className="font-numbers text-xs font-bold text-slate-400 mb-1">{st.duration}</span>
                <h4 className="font-extrabold text-sm text-dark mb-2">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((st, idx) => (
            <Card key={idx} variant="flat" className="p-5 border-slate-100">
              <div className="flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-full ${st.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  {st.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-extrabold text-sm text-dark">{st.title}</h4>
                    <span className="text-xs font-numbers font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{st.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{st.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
