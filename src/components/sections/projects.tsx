import React from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      src: "https://static.wixstatic.com/media/74a41e_43df28d95238423a9da3cd38ad9055c0~mv2.jpg/v1/crop/x_917,y_0,w_4885,h_4480/fill/w_482,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/solar.jpg",
      alt: "Rooftop Solar Installation",
      location: "Gajularamaram, Hyderabad",
      size: "3 kW",
      type: "Residential",
    },
    {
      src: "https://static.wixstatic.com/media/74a41e_541104ea8c9c4064a30a2e1cfddd868c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/74a41e_541104ea8c9c4064a30a2e1cfddd868c~mv2.jpg",
      alt: "Solar Panel Array on Rooftop",
      location: "Balapur, Hyderabad",
      size: "5 kW",
      type: "Residential",
    },
    {
      src: "https://static.wixstatic.com/media/74a41e_472ae73654094d24b1bfcc62fa69c2fa~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/74a41e_472ae73654094d24b1bfcc62fa69c2fa~mv2.jpg",
      alt: "Commercial Solar System",
      location: "Pedda Amberpet, Hyderabad",
      size: "10 kW",
      type: "Commercial",
    },
    {
      src: "https://static.wixstatic.com/media/74a41e_da13df95c28a474ab235fb88c54ca19c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/74a41e_da13df95c28a474ab235fb88c54ca19c~mv2.jpg",
      alt: "Residential Solar Installation",
      location: "Nagole, Hyderabad",
      size: "4 kW",
      type: "Residential",
    },
    {
      src: "https://static.wixstatic.com/media/74a41e_6e0a60a9bee946b1936bfd37aeca7471~mv2.jpg/v1/fit/w_960,h_720,q_90,enc_avif,quality_auto/74a41e_6e0a60a9bee946b1936bfd37aeca7471~mv2.jpg",
      alt: "Solar Farm Installation",
      location: "Secunderabad, Hyderabad",
      size: "20 kW",
      type: "Commercial",
    },
    {
      src: "https://static.wixstatic.com/media/74a41e_b7974a7c58554610b1d64c47c0a6347a~mv2.jpg/v1/fit/w_480,h_471,q_90,enc_avif,quality_auto/74a41e_b7974a7c58554610b1d64c47c0a6347a~mv2.jpg",
      alt: "Rooftop Panel System",
      location: "Uppal, Hyderabad",
      size: "6 kW",
      type: "Residential",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-dark font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Previous Installations Across Hyderabad
          </h2>
          <p className="text-slate-600 font-sans">
            Hundreds of happy homes and businesses are already running on Sun Power Solar. Here are some of our recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((proj, idx) => (
            <Card key={idx} variant="flat" className="overflow-hidden group cursor-pointer border-slate-100 hover:shadow-xl hover:-translate-y-1">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                <Image
                  src={proj.src}
                  alt={proj.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay tag */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${proj.type === "Commercial" ? "bg-secondary text-white" : "bg-primary text-dark"}`}>
                    {proj.type}
                  </span>
                </div>
              </div>
              {/* Card Footer */}
              <div className="p-5 flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-dark">{proj.alt}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{proj.location}</p>
                </div>
                <div className="text-right">
                  <span className="font-numbers font-extrabold text-xl text-dark">{proj.size}</span>
                  <p className="text-xs text-slate-400">System Size</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" href="#contact">
            Get a Quote for Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
