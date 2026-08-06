import React from "react";

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold text-xs uppercase tracking-wider rounded-full">
            Verified Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base max-w-xl mx-auto">
            Third-party customer video reviews and verified Google business ratings across Hyderabad.
          </p>
        </div>

        {/* Clean blank section for now */}
        <div className="mt-12 max-w-4xl mx-auto min-h-[200px] rounded-[16px] border border-dashed border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center p-8 text-center">
          <p className="text-slate-500 text-sm font-sans italic">
            [ Verified reviews feed coming soon ]
          </p>
        </div>
      </div>
    </section>
  );
}
