"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import Button from "./ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How Solar Works", href: "#how-solar-works" },
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Sun Power Solar Services Home">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="https://static.wixstatic.com/media/74a41e_c64e351ae02a47598c25cb646a80f5b5~mv2.jpg/v1/fill/w_82,h_75,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sun%20Power%20Logo_page-0001_edited.jpg"
                alt="Sun Power Solar Services Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-white text-sm leading-tight block group-hover:text-primary transition-colors">
                Sun Power Solar
              </span>
              <span className="text-xs text-slate-400 font-sans">Services</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA row */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917075758209"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-numbers"
              aria-label="Call us"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 70757 58209
            </a>
            <a
              href="https://wa.link/ekh221"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <Button variant="primary" size="sm" href="#contact">
              Free Inspection
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile Navigation"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-slate-900/98 backdrop-blur-md border-t border-white/5`}
      >
        <nav className="container mx-auto px-6 max-w-7xl py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3 border-t border-white/5 mt-2">
            <a
              href="tel:+917075758209"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white px-4 font-numbers"
            >
              <Phone className="w-4 h-4" />
              +91 70757 58209
            </a>
            <div className="flex gap-3 px-4">
              <Button variant="primary" size="sm" href="#contact" className="flex-1 text-center" >
                Free Inspection
              </Button>
              <a
                href="https://wa.link/ekh221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-3 py-2 rounded-full text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
