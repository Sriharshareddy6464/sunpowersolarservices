import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import WhySolar from "@/components/sections/why-solar";
import HowSolarWorks from "@/components/sections/how-solar-works";
import Packages from "@/components/sections/packages";
import SubsidyGuide from "@/components/sections/subsidy";
import LoanJourney from "@/components/sections/loan-journey";
import InstallationTimeline from "@/components/sections/installation-timeline";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CalculatorSection from "@/components/sections/calculator-section";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <CalculatorSection />
      <WhySolar />
      <HowSolarWorks />
      <Packages />
      <SubsidyGuide />
      <LoanJourney />
      <InstallationTimeline />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
