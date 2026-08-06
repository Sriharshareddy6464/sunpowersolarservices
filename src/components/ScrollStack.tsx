"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgePercent, Landmark, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface StackItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
}

export default function ScrollStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items: StackItem[] = [
    {
      id: 1,
      icon: <BadgePercent className="w-4 h-4 text-primary flex-shrink-0" />,
      title: "Pay Just 10% Upfront",
      desc: "Only pay 10% upfront. We secure the remaining 90% via easy bank loans.",
      badge: "Step 1",
    },
    {
      id: 2,
      icon: <Landmark className="w-4 h-4 text-secondary flex-shrink-0" />,
      title: "EMI Equals Current Bill",
      desc: "Use your existing electricity bill budget to pay the monthly solar EMI.",
      badge: "Step 2",
    },
    {
      id: 3,
      icon: <Wrench className="w-4 h-4 text-accent flex-shrink-0" />,
      title: "Free Installation",
      desc: "No hidden fees. Full system installation completed by certified professionals.",
      badge: "Step 3",
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />,
      title: "Loan-Free After 5 Years",
      desc: "After a short 5-year loan payoff, enjoy 20+ years of 100% free electricity.",
      badge: "Step 4",
    },
    {
      id: 5,
      icon: <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />,
      title: "₹78,000 Subsidy Support",
      desc: "We claim your PM Surya Ghar Yojana subsidy and handle all the paperwork.",
      badge: "Step 5",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".stack-tile");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Timeline for pinning section and sliding each tile one by one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Initial state: hide cards below
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { y: 150 + index * 40, opacity: 0, scale: 0.95 });
        } else {
          gsap.set(card, { y: 0, opacity: 1, scale: 1 });
        }
      });

      // Slide in each card sequentially over the stack
      cards.forEach((card, index) => {
        if (index > 0) {
          tl.to(
            card,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            `step-${index}`
          );

          // Subtle scale down of previous cards to create depth stack effect
          for (let prev = 0; prev < index; prev++) {
            tl.to(
              cards[prev],
              {
                scale: 1 - (index - prev) * 0.02,
                opacity: 0.85 + prev * 0.03,
                duration: 1,
              },
              `step-${index}`
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden py-16"
    >
      {/* Top spacing header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 z-10 px-6">
        <span className="inline-block px-3.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold text-xs uppercase tracking-wider rounded-full">
          Key Benefits Stack
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
          Why Switching to Solar Makes Total Sense
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-sans">
          Scroll down to reveal how Sun Power Solar transforms your energy costs.
        </p>
      </div>

      {/* Center Aligned Stack Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl px-6 h-[220px] flex items-center justify-center"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="stack-tile absolute inset-x-6 mx-auto max-w-2xl h-[42px] bg-slate-900/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-md px-4 flex items-center justify-between gap-3 cursor-pointer transition-all duration-300 hover:border-primary/50"
            style={{
              zIndex: index + 10,
              top: `${index * 8}px`,
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-white truncate">
                {item.title}
              </h3>
              <span className="hidden sm:inline-block text-[11px] text-slate-400 truncate">
                — {item.desc}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[10px] font-numbers font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-bar pinned at bottom of stacked cards */}
      <div className="mt-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-semibold text-center z-10 px-6">
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> MNRE Approved Vendor
        </span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-sky-400" /> TSSPDCL & TSNPDCL Net Metering Compliant
        </span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-amber-400" /> PM Surya Ghar Portal Registered
        </span>
      </div>
    </div>
  );
}
