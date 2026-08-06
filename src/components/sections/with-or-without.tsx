import React from "react";
import Image from "next/image";

export default function WithOrWithout() {
  return (
    <section id="with-or-without" className="py-20 bg-slate-950 text-white border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header above the image */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold text-xs uppercase tracking-wider rounded-full">
            Side-by-Side Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Two Homes. Two Different Futures.
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base font-semibold">
            (With Solar vs Without Solar)
          </p>
        </div>

        {/* Full-width Image Showcase */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[16/9] max-h-[750px]">
          <Image
            src="/images/withorwithout.png"
            alt="With Solar vs Without Solar Comparison"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
