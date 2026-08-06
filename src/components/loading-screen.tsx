"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [stage, setStage] = useState<"fade-in" | "hold" | "fade-out" | "done">("fade-in");

  useEffect(() => {
    // 0.8s fade-in
    const timer1 = setTimeout(() => {
      setStage("hold");
    }, 800);

    // 2s hold (total 2.8s)
    const timer2 = setTimeout(() => {
      setStage("fade-out");
    }, 2800);

    // 0.8s fade-out (total 3.6s)
    const timer3 = setTimeout(() => {
      setStage("done");
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col justify-between items-center transition-opacity duration-800 ${
        stage === "fade-in"
          ? "opacity-100 animate-fadeIn"
          : stage === "hold"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ transitionDuration: "800ms" }}
    >
      {/* Top spacer */}
      <div className="w-full h-12" />

      {/* Center Aligned Logo and Title */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center px-6">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
          <Image
            src="https://static.wixstatic.com/media/74a41e_c64e351ae02a47598c25cb646a80f5b5~mv2.jpg/v1/fill/w_82,h_75,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sun%20Power%20Logo_page-0001_edited.jpg"
            alt="Sun Power Solar Services Logo"
            fill
            className="object-cover"
            priority
            sizes="96px"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Sun Power Solar Services
          </h1>
          <p className="text-xs sm:text-sm text-primary font-numbers font-semibold uppercase tracking-widest">
            Telangana, India
          </p>
        </div>
      </div>

      {/* Bottom 10px height yellow bar with small yellow bars & rotating sun icon */}
      <div className="w-full pb-0 relative">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between mb-2">
          <span className="text-xs font-numbers text-slate-400 font-semibold uppercase tracking-wider">
            Initializing Power Grid...
          </span>
          {/* Rotating sun SVG at the right corner */}
          <div className="w-8 h-8 relative animate-[spin_6s_linear_infinite]">
            <Image
              src="/assets/sun.svg"
              alt="Rotating Sun Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 10px height progress bar composed of small yellow bars */}
        <div className="w-full h-[10px] bg-slate-900 overflow-hidden flex gap-1 px-1">
          {Array.from({ length: 40 }).map((_, idx) => (
            <div
              key={idx}
              className="h-full flex-1 bg-primary rounded-xs animate-pulse"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
