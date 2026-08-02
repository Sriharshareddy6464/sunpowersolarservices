"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a solar system cost in Hyderabad?",
    answer:
      "A residential rooftop solar system typically costs between ₹65,000–₹80,000 per kW installed. For a 3 kW system (suitable for a 1,500–2,000 sq ft home), the cost is around ₹1,95,000 before subsidy. After the ₹78,000 government subsidy, your net cost comes down to approximately ₹1,17,000. With 10% upfront (₹11,700), you can get started immediately.",
  },
  {
    question: "Do I need to pay everything upfront?",
    answer:
      "No. You only need to pay 10% of the net cost upfront. We help you secure the remaining 90% through hassle-free bank loans. The monthly EMI is structured to be approximately equal to your current electricity bill, so your monthly outflow stays the same.",
  },
  {
    question: "What is the PM Surya Ghar Muft Bijli Yojana subsidy?",
    answer:
      "The PM Surya Ghar Muft Bijli Yojana is a central government scheme providing direct subsidies to residential solar customers. You can receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW or above systems. We register you on the national portal and handle all paperwork — at no extra cost.",
  },
  {
    question: "How much maintenance is required?",
    answer:
      "Solar panels require minimal maintenance. A simple cleaning twice a year (done by our professionals) is sufficient to maintain optimal performance. Inverters typically last 5–10 years and may need replacement once during the 25-year system lifecycle. We provide support throughout.",
  },
  {
    question: "What happens if there is no sunlight on cloudy or rainy days?",
    answer:
      "Your system remains grid-connected, so you continue to draw electricity from the utility grid on cloudy or rainy days. During sunny periods, any surplus power you generate is fed back to the grid through net metering, earning you credits that offset your nighttime or cloudy-day consumption.",
  },
  {
    question: "How long does installation take?",
    answer:
      "From the initial site survey to final handover, our full installation process is completed within 21 days. This includes DISCOM approvals, MNRE portal registration, physical installation, and net meter connection. We provide daily updates throughout the process.",
  },
  {
    question: "Is solar suitable for apartments and commercial buildings?",
    answer:
      "Yes. We offer customized solutions for apartments (if you have rooftop access), independent houses, commercial buildings, warehouses, schools, hospitals, and factories. Commercial installations also benefit from 40% Accelerated Depreciation — a significant tax advantage.",
  },
  {
    question: "What warranty do the panels and inverters carry?",
    answer:
      "Solar panels come with a 25-year performance warranty and a 10-year product warranty from the manufacturer. Inverters carry a 5-year warranty. We use only MNRE-approved, Tier-1 solar panels and branded inverters for all our installations.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-dark font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 font-sans">
            Addressing the most common concerns about switching to solar — honestly and clearly.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-[16px] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary/30 shadow-md bg-amber-50/30"
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className={`font-bold text-sm md:text-base pr-4 ${isOpen ? "text-dark" : "text-slate-700"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
