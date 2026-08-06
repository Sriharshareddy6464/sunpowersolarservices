"use client";

import React from "react";
import Button from "../ui/button";
import Prism from "../prism";

export default function Hero() {
  return (
    <section className="relative min-h-screen h-screen flex flex-col justify-between items-center pt-16 pb-0 overflow-hidden bg-slate-900 text-white">
      {/* Background Prism WebGL Component */}
      <div className="absolute inset-0 z-0 opacity-80 overflow-hidden" style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/90 z-10 pointer-events-none" />
      </div>

      {/* Main hero content shifted 10px towards bottom */}
      <div className="container mx-auto px-6 max-w-5xl relative z-20 text-center transform translate-y-[10px] mt-[10px] my-auto">
        <div className="space-y-6 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Stop Paying <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Electricity Bills.
            </span>
            <br />
            Let the Sun Pay Instead.
          </h1>
          
          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans drop-shadow-md">
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

          {/* Quick trust metrics with generous space below */}
          <div className="pt-10 pb-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div>
              <span className="block text-2xl md:text-3xl font-numbers font-bold text-primary">25+</span>
              <span className="text-xs text-slate-300 uppercase font-semibold tracking-wider">Years Warranty</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-numbers font-bold text-secondary">10%</span>
              <span className="text-xs text-slate-300 uppercase font-semibold tracking-wider">Upfront Cost</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-numbers font-bold text-accent">₹78k</span>
              <span className="text-xs text-slate-300 uppercase font-semibold tracking-wider">Govt Subsidy</span>
            </div>
          </div>

        </div>
      </div>

      {/* Gradual blur transition overlay into next section */}
      <div className="w-full relative z-20">
        <div className="w-full h-16 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950 backdrop-blur-md border-b border-white/20" />
      </div>
    </section>
  );
}
