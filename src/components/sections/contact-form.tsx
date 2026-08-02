"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/button";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  type: z.enum(["Residential", "Commercial"], {
    error: () => ({ message: "Please select a service type" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate brief async (replace with actual API call)
    await new Promise((r) => setTimeout(r, 800));
    const waMsg = encodeURIComponent(
      `Hi Sun Power Solar! I'd like to enquire about solar.\nName: ${data.firstName}\nPhone: ${data.phone}\nService: ${data.type}\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/917075758209?text=${waMsg}`, "_blank");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 to-dark text-white relative overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Get Your Free Site Inspection Today
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans text-sm md:text-base">
                Fill in your details and our solar expert will contact you within 24 hours to schedule a free site inspection and custom quote — no obligations.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">Our Office</p>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    12-1-373, Road No. 2, Indraprastha Colony,<br />
                    Anand Nagar, Nagole, Hyderabad, Telangana 500068
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">Call Us</p>
                  <div className="space-y-0.5">
                    {["7075758209", "9866583609", "9177758209"].map((num) => (
                      <a
                        key={num}
                        href={`tel:+91${num}`}
                        className="block text-slate-400 text-xs hover:text-secondary transition-colors font-numbers"
                      >
                        +91 {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">Email Us</p>
                  <a
                    href="mailto:sunpowersolarservice@gmail.com"
                    className="text-slate-400 text-xs hover:text-accent transition-colors"
                  >
                    sunpowersolarservice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">WhatsApp</p>
                  <a
                    href="https://wa.link/ekh221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-xs hover:text-primary transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-[16px] p-6 md:p-10 backdrop-blur-md">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Thanks for submitting!</h3>
                  <p className="text-slate-300 text-sm font-sans max-w-sm">
                    A WhatsApp chat has been opened with your details. Our team will reach out within 24 hours to schedule your free site inspection.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <h3 className="text-xl font-extrabold text-white mb-6">Book a Free Site Inspection</h3>

                  {/* First Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Suresh Kumar"
                      {...register("firstName")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-numbers"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Looking For *
                    </label>
                    <select
                      id="contact-type"
                      {...register("type")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800">Select service type...</option>
                      <option value="Residential" className="bg-slate-800">🏠 Residential Solar</option>
                      <option value="Commercial" className="bg-slate-800">🏢 Commercial Solar</option>
                    </select>
                    {errors.type && (
                      <p className="text-red-400 text-xs mt-1">{errors.type.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your property and requirements..."
                      {...register("message")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send & Open WhatsApp Chat →"}
                  </Button>

                  <p className="text-xs text-slate-500 text-center font-sans">
                    By submitting, you agree to be contacted by our solar experts. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
