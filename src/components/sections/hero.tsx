"use client";

import React from "react";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-dark text-white">
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10 animate-pulse" />
      
      {/* Subtle grid lines background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-primary uppercase tracking-wider backdrop-blur-sm">
              ☀️ Rooftop Solar Telangana
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              Stop Paying <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Electricity Bills.
              </span>
              <br />
              Let the Sun Pay Instead.
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Go solar once, and enjoy free electricity for the next 25 years. Pay just 10% upfront, and use your current monthly bill amount to pay the EMI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="primary" size="lg" href="#contact">
                Get Free Site Inspection
              </Button>
              <Button variant="secondary" size="lg" href="#calculator">
                Calculate Savings
              </Button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl md:text-3xl font-numbers font-bold text-primary">25+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Years Warranty</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-numbers font-bold text-secondary">10%</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Upfront Cost</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-numbers font-bold text-accent">₹78k</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Govt Subsidy</span>
              </div>
            </div>
          </div>

          {/* Graphical/Illustrative Panel */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Elegant futuristic design representing solar power */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl transform rotate-6 scale-95" />
            <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">☀️</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Sun Power Services</h4>
                    <span className="text-xs text-slate-400">Live Production Dashboard</span>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              </div>

              {/* Central Power graphic */}
              <div className="my-auto py-8 text-center relative">
                <div className="w-40 h-40 mx-auto rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center">
                    <span className="font-numbers text-5xl font-extrabold text-primary">5.2</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="block text-xs uppercase tracking-widest text-slate-400 mt-28">Current kW</span>
                </div>
              </div>

              {/* Bottom statistics panel */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-4">
                <div className="text-left">
                  <span className="text-xs text-slate-400 block">Today's Savings</span>
                  <span className="font-numbers text-xl font-bold text-accent">₹450.00</span>
                </div>
                <div className="text-left border-l border-white/10 pl-4">
                  <span className="text-xs text-slate-400 block">CO2 Avoided</span>
                  <span className="font-numbers text-xl font-bold text-secondary">12.8 kg</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
