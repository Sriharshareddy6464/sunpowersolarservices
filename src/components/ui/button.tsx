import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-dark hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400/20 hover:-translate-y-0.5 focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400/20 hover:-translate-y-0.5 focus:ring-secondary",
    accent:
      "bg-accent text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 focus:ring-accent",
    outline:
      "border-2 border-dark text-dark hover:bg-dark hover:text-white hover:-translate-y-0.5 focus:ring-dark",
    ghost:
      "text-dark/80 hover:text-dark hover:bg-slate-100 focus:ring-slate-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
