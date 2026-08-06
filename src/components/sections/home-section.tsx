"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !mobileRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline for mobile image: slide/fade in from far left, pause at left half, then fade out at end of section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.fromTo(
        mobileRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
      )
        .to(mobileRef.current, { x: "0%", opacity: 1, duration: 1 })
        .to(mobileRef.current, { x: "-20%", opacity: 0, duration: 1, ease: "power2.in" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home-vision"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-start overflow-hidden bg-slate-900 text-white"
    >
      {/* Full screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home.png"
          alt="Imagine Your Home 5 Years From Now"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Slight fade overlay to the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Mobile Phone Mockup Slide-In Container */}
          <div className="lg:col-span-6 flex justify-start items-center">
            <div
              ref={mobileRef}
              className="relative w-64 sm:w-72 md:w-80 h-[480px] sm:h-[540px] md:h-[600px] drop-shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/mobile.png"
                alt="Solar App Mobile Experience"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>

          {/* Heading Content - Left Aligned */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="inline-block px-3.5 py-1 bg-primary/20 text-primary border border-primary/30 font-bold text-xs uppercase tracking-wider rounded-full backdrop-blur-md">
              Future Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Imagine Your Home <br />
              <span className="bg-gradient-to-r from-primary via-amber-300 to-white bg-clip-text text-transparent">
                5 Years From Now...
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
              Zero electricity bills, complete energy independence, and your rooftop system fully paid off — providing free power for the next 20+ years.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
