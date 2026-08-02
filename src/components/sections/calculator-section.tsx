import React from "react";
import Calculator from "@/components/calculator";
import Button from "@/components/ui/button";

export default function CalculatorSection() {
  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-dark font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Solar Savings Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            See Exactly How Much You Will Save
          </h2>
          <p className="text-slate-600 font-sans">
            Enter your average monthly electricity bill and instantly see your system size, subsidy, EMI, and 25-year savings estimate.
          </p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}
