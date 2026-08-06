import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";

export default function LoanJourney() {
  const phases = [
    {
      label: "Today",
      title: "Pay Only 10% Upfront",
      desc: "You pay just ₹10 for every ₹100 of total system cost. We assist in securing the rest as a bank loan.",
      highlight: "₹0 extra cost",
      accent: "text-primary",
      borderColor: "border-primary/30",
    },
    {
      label: "Years 1–5",
      title: "EMI = Your Current Bill",
      desc: "Your monthly solar EMI is structured to match your current electricity bill — so your expenses don't change.",
      highlight: "₹0 extra expense",
      accent: "text-secondary",
      borderColor: "border-secondary/30",
    },
    {
      label: "After 5 Years",
      title: "Loan Fully Paid Off",
      desc: "After a short 5-year loan tenure, your system is completely paid off. No more EMIs, no more bills.",
      highlight: "Loan = ₹0",
      accent: "text-accent",
      borderColor: "border-accent/30",
    },
    {
      label: "Years 6–25",
      title: "100% Free Electricity",
      desc: "Enjoy 20+ years of clean, free electricity with zero monthly expenses. Your savings compound every year.",
      highlight: "Free for 20+ years",
      accent: "text-primary",
      borderColor: "border-primary/30",
    },
  ];

  return (
    <section id="loan" className="py-20 bg-slate-900 text-white border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-accent/10 text-accent border border-accent/20 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Financial Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Your Investment Journey
          </h2>
          <p className="text-slate-300 font-sans text-sm md:text-base">
            We&apos;ve designed a financing path that makes switching to solar completely effortless — financially and practically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((ph, idx) => (
            <Card
              key={idx}
              variant="glass-dark"
              className={`p-6 border ${ph.borderColor} hover:border-primary/50 flex flex-col justify-between h-full`}
            >
              <div className="space-y-4">
                <span className={`text-xs font-extrabold uppercase tracking-widest ${ph.accent} font-numbers`}>
                  {ph.label}
                </span>
                <h3 className="text-lg font-extrabold text-white leading-snug">{ph.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">{ph.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className={`font-numbers text-sm font-bold ${ph.accent}`}>{ph.highlight}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary banner */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[16px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
          <div>
            <h3 className="text-2xl font-extrabold mb-1">The Bottom Line</h3>
            <p className="text-slate-300 text-sm font-sans max-w-lg">
              You invest one lump sum today, pay the same bill amount for 5 years, then enjoy 20 years of complete energy freedom. The system pays for itself — and keeps giving.
            </p>
          </div>
          <Button variant="primary" size="lg" href="#contact" className="flex-shrink-0">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
