import React from "react";

interface CardProps {
  variant?: "flat" | "glass" | "glass-dark" | "outline";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Card({
  variant = "flat",
  className = "",
  children,
  id,
}: CardProps) {
  const baseStyle = "rounded-[16px] overflow-hidden transition-all duration-300";

  const variants = {
    flat: "bg-white shadow-sm border border-slate-100 hover:shadow-md",
    glass:
      "bg-white/70 backdrop-blur-md border border-white/30 shadow-sm hover:shadow-md",
    "glass-dark":
      "bg-dark/85 backdrop-blur-md border border-white/5 shadow-xl text-white",
    outline: "border-2 border-slate-200 bg-transparent hover:border-dark",
  };

  return (
    <div id={id} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
