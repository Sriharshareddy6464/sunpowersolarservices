import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sun Power Solar Services | Rooftop Solar Solutions in Telangana, India",
  description: "Get clean, affordable solar energy with Sun Power Solar Services. Pay just 10% upfront, secure 90% through bank loans, and claim up to ₹78,000 in government subsidies under PM Surya Ghar Muft Bijli Yojana. 25 years of free electricity!",
  keywords: ["solar system Hyderabad", "rooftop solar Telangana", "solar panel installation", "solar subsidy India", "PM Surya Ghar Yojana", "clean energy"],
  openGraph: {
    title: "Sun Power Solar Services | Rooftop Solar Solutions",
    description: "Get 25 years of free electricity. Pay just 10% upfront and enjoy EMI equal to your current bill with expert rooftop solar installation in Telangana.",
    url: "https://www.sunpowersolarservices.co.in",
    siteName: "Sun Power Solar Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-800 flex flex-col">
        {children}
      </body>
    </html>
  );
}

