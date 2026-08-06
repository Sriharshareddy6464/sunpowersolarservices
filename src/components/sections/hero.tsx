"use client";

import React from "react";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-16 pb-12 -mt-2.5 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 text-white">
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10 animate-pulse" />
      
      {/* Subtle grid lines background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20" />

      <div className="container mx-auto px-6 max-w-5xl relative text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Stop Paying <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Electricity Bills.
            </span>
            <br />
            Let the Sun Pay Instead.
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
            Go solar once, and enjoy free electricity for the next 25 years. Pay just 10% upfront, and use your current monthly bill amount to pay the EMI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="primary" size="lg" href="#contact">
              Get Free Site Inspection
            </Button>
            <Button variant="secondary" size="lg" href="#calculator">
              Calculate Savings
            </Button>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto">
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
      </div>
    </section>
  );
}
