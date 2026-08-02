"use client";

import React, { useState, useEffect } from "react";
import Button from "./ui/button";
import Card from "./ui/card";

export default function Calculator() {
  const [bill, setBill] = useState<number>(4500);
  const [isCommercial, setIsCommercial] = useState<boolean>(false);

  // States for outputs
  const [systemSize, setSystemSize] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [subsidy, setSubsidy] = useState<number>(0);
  const [netCost, setNetCost] = useState<number>(0);
  const [upfront, setUpfront] = useState<number>(0);
  const [emi, setEmi] = useState<number>(0);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [lifetimeSavings, setLifetimeSavings] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  useEffect(() => {
    // 1 kW for every ₹1,200 of bill
    const kw = Math.max(1, Math.round(bill / 1200));
    setSystemSize(kw);

    const costPerKw = isCommercial ? 55000 : 65000; // Commercial systems are larger and slightly cheaper per kW
    const total = kw * costPerKw;
    setTotalCost(total);

    // Subsidy: Residential only. 1 kW = 30k, 2 kW = 60k, 3 kW+ = 78k max.
    // Commercial gets 40% depreciation benefit, let's treat it as tax savings.
    let subVal = 0;
    if (!isCommercial) {
      if (kw === 1) subVal = 30000;
      else if (kw === 2) subVal = 60000;
      else subVal = 78000;
    } else {
      // 40% tax benefit on cost
      subVal = total * 0.40;
    }
    setSubsidy(subVal);

    const net = total - subVal;
    setNetCost(net);

    const up = net * 0.10;
    setUpfront(up);

    // EMI calculation for 90% loan over 5 years (60 months) at 9.5% annual interest
    const loanAmount = net * 0.90;
    const annualRate = 0.095;
    const monthlyRate = annualRate / 12;
    const months = 60;
    
    let monthlyEmi = 0;
    if (loanAmount > 0) {
      monthlyEmi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }
    setEmi(Math.round(monthlyEmi));

    // Annual savings on bill (assumes system covers the entire bill)
    const annualSave = bill * 12;
    setAnnualSavings(annualSave);

    // Payback period
    const payback = net / (bill * 12);
    setPaybackPeriod(parseFloat(payback.toFixed(1)));

    // 25 Years lifetime savings
    // Years 1-5: bill saved minus EMI
    const y1to5 = (bill - monthlyEmi) * 12 * 5;
    // Years 6-25: full bill saved
    const y6to25 = bill * 12 * 20;
    setLifetimeSavings(Math.round(y1to5 + y6to25));
  }, [bill, isCommercial]);

  return (
    <Card variant="glass" className="w-full max-w-5xl mx-auto p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Dynamic Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-dark mb-2">
          Calculate Your Solar Savings
        </h3>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
          See how easily you can switch your monthly bill expense into a long-term investment.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-full flex space-x-1">
          <button
            onClick={() => setIsCommercial(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              !isCommercial
                ? "bg-white text-dark shadow-sm"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            🏠 Residential
          </button>
          <button
            onClick={() => setIsCommercial(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isCommercial
                ? "bg-dark text-white shadow-sm"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            🏢 Commercial
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-slate-700">
                Average Monthly Bill
              </label>
              <span className="font-numbers font-bold text-2xl text-dark">
                ₹{bill.toLocaleString("en-IN")}
              </span>
            </div>
            
            {/* Custom Slider */}
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
            />
            
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-numbers">
              <span>₹1,000</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
            <h4 className="text-sm font-bold text-amber-900 flex items-center">
              💡 Sun Power Equation
            </h4>
            <ul className="text-xs text-amber-800 space-y-1 list-disc pl-4">
              <li>Estimated System Size: <strong className="font-numbers">{systemSize} kW</strong></li>
              <li>Estimated annual production: <strong className="font-numbers">{(systemSize * 1440).toLocaleString()} Units</strong></li>
              {isCommercial ? (
                <li>Eligible for 40% Accelerated Depreciation tax benefit.</li>
              ) : (
                <li>Eligible for up to <strong className="font-numbers">₹78,000</strong> central subsidy.</li>
              )}
            </ul>
          </div>

          <div className="pt-2">
            <Button variant="primary" size="lg" className="w-full text-center" href="#contact">
              Get Free Site Inspection
            </Button>
          </div>
        </div>

        {/* Right Side: Outputs */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="flat" className="p-5 border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System Cost</span>
            <div className="mt-2">
              <span className="text-3xl font-numbers font-extrabold text-dark">
                ₹{totalCost.toLocaleString("en-IN")}
              </span>
              <span className="block text-xs text-slate-400 mt-1">Installation & structure included</span>
            </div>
          </Card>

          <Card variant="flat" className="p-5 border-emerald-100 bg-emerald-50/20 flex flex-col justify-between">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              {isCommercial ? "Tax Benefit (40%)" : "Govt Subsidy"}
            </span>
            <div className="mt-2">
              <span className="text-3xl font-numbers font-extrabold text-accent">
                - ₹{subsidy.toLocaleString("en-IN")}
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                {isCommercial ? "Accelerated Depreciation" : "PM Surya Ghar Yojana"}
              </span>
            </div>
          </Card>

          <Card variant="flat" className="p-5 border-slate-100 bg-slate-50/30 flex flex-col justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Investment</span>
            <div className="mt-2">
              <span className="text-3xl font-numbers font-extrabold text-dark">
                ₹{netCost.toLocaleString("en-IN")}
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                Only <strong className="text-dark font-numbers">₹{upfront.toLocaleString("en-IN")}</strong> (10%) upfront payment
              </span>
            </div>
          </Card>

          <Card variant="flat" className="p-5 border-sky-100 bg-sky-50/15 flex flex-col justify-between">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider">Est. Monthly EMI</span>
            <div className="mt-2">
              <span className="text-3xl font-numbers font-extrabold text-secondary">
                ₹{emi.toLocaleString("en-IN")}
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                For 5 years loan tenure @ 9.5%
              </span>
            </div>
          </Card>

          <Card variant="flat" className="p-5 md:col-span-2 border-amber-100 bg-amber-50/10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                  25-Year Lifetime Savings
                </span>
                <div className="mt-1">
                  <span className="text-4xl md:text-5xl font-numbers font-extrabold text-dark">
                    ₹{lifetimeSavings.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <div className="bg-amber-100 text-amber-950 px-3 py-1 rounded-full text-xs font-bold font-numbers">
                ROI Payback: {paybackPeriod} Years
              </div>
            </div>
            
            {/* Visual Compare Bar */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Current Cost (25 yrs electricity):</span>
                <span className="text-red-600 font-numbers">₹{(bill * 12 * 25).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Solar Cost (Investment + 5 yr EMI):</span>
                <span className="text-emerald-600 font-numbers">₹{(upfront + emi * 60).toLocaleString("en-IN")}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
