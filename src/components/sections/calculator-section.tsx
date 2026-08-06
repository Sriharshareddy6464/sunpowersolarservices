import React from "react";
import Calculator from "@/components/calculator";

export default function CalculatorSection() {
  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Solar Savings Calculator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Curious How Much You Could Save?
          </h2>
          <p className="text-slate-300 font-sans text-sm md:text-base">
            Enter your average monthly electricity bill and instantly see your system size, subsidy, EMI, and 25-year savings estimate.
          </p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}
