import React from "react";
import Card from "../ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ravinder",
      location: "Gajularamaram",
      rating: 5,
      title: "Best decision I've made for my home!",
      text: "I was tired of high electricity bills every month. With Sun Power Solar, I paid just 10% upfront, and now my EMI is almost the same as my old electricity bill. Amazing support and installation team!",
      system: "3 kW Residential",
      savings: "₹3,200/mo",
      avatar: "R",
      color: "bg-primary",
    },
    {
      name: "Narayana Reddy",
      location: "Balapur",
      rating: 5,
      title: "Professional and hassle-free service.",
      text: "From site visit to government subsidy — Sun Power Solar Services handled everything smoothly. I got ₹78,000 subsidy under Surya Ghar Muft Bijili Yojana. Highly recommend for homes!",
      system: "4 kW Residential",
      savings: "₹4,100/mo",
      avatar: "N",
      color: "bg-secondary",
    },
    {
      name: "Sridevi",
      location: "Pedda Amberpet",
      rating: 5,
      title: "Perfect for residential buildings.",
      text: "Installed a 10kW solar system on our home. The savings are incredible and the ROI is better than any other investment. Sun Power Solar gave us the best quotation, fast service, and complete peace of mind.",
      system: "10 kW Residential",
      savings: "₹9,800/mo",
      avatar: "S",
      color: "bg-accent",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            What Our Happy Customers Say
          </h2>
          <p className="text-slate-600 font-sans">
            Real people. Real savings. Real transformations across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rv, idx) => (
            <Card key={idx} variant="flat" className="p-8 border-slate-100 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between bg-white h-full">
              <div className="space-y-5">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-slate-200" />

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: rv.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Title + text */}
                <div>
                  <h3 className="font-extrabold text-dark text-lg mb-3">&ldquo;{rv.title}&rdquo;</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">{rv.text}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${rv.color} flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0`}>
                  {rv.avatar}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">{rv.name}</p>
                  <p className="text-xs text-slate-400">{rv.location}</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="block font-numbers font-bold text-accent text-sm">{rv.savings}</span>
                  <span className="text-xs text-slate-400">Monthly Savings</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Aggregate Rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-dark font-bold text-base">
            <span className="font-numbers">4.9/5</span> average rating from 200+ installations across Telangana
          </p>
        </div>
      </div>
    </section>
  );
}
