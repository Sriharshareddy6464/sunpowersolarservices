import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" aria-label="Sun Power Solar Services">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://static.wixstatic.com/media/74a41e_c64e351ae02a47598c25cb646a80f5b5~mv2.jpg/v1/fill/w_82,h_75,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sun%20Power%20Logo_page-0001_edited.jpg"
                  alt="Sun Power Solar Logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-base leading-tight block">Sun Power Solar Services</span>
                <span className="text-xs text-slate-400 font-sans">Telangana, India</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-sans max-w-sm">
              Making clean, affordable solar energy accessible to every home and business in Telangana. From design to installation — we handle everything.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.link/ekh221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "How Solar Works", href: "#how-solar-works" },
                { label: "Our Services", href: "#services" },
                { label: "Savings Calculator", href: "#calculator" },
                { label: "Project Gallery", href: "#projects" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors font-sans"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs leading-relaxed font-sans">
                  12-1-373, Road No. 2, Indraprastha Colony, Anand Nagar, Nagole, Hyderabad, Telangana 500068
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {["7075758209", "9866583609", "9177758209"].map((num) => (
                    <a
                      key={num}
                      href={`tel:+91${num}`}
                      className="block text-slate-400 text-xs hover:text-white transition-colors font-numbers"
                    >
                      +91 {num}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:sunpowersolarservice@gmail.com"
                  className="text-slate-400 text-xs hover:text-white transition-colors break-all"
                >
                  sunpowersolarservice@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-slate-500 text-xs font-sans">
            © {currentYear} Sun Power Solar Services. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-sans">
            Serving Hyderabad & Telangana | MNRE Approved | PM Surya Ghar Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
