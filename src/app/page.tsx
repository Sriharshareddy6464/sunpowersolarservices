import LoadingScreen from "@/components/loading-screen";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import HomeSection from "@/components/sections/home-section";
import FounderSection from "@/components/sections/founder-section";
import WhySolar from "@/components/sections/why-solar";
import WithOrWithout from "@/components/sections/with-or-without";
import HowSolarWorks from "@/components/sections/how-solar-works";
import CalculatorSection from "@/components/sections/calculator-section";
import Packages from "@/components/sections/packages";
import SubsidyGuide from "@/components/sections/subsidy";
import LoanJourney from "@/components/sections/loan-journey";
import InstallationTimeline from "@/components/sections/installation-timeline";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import ReviewSection from "@/components/sections/review-section";
import FAQ from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white font-sans selection:bg-primary selection:text-dark">
      <LoadingScreen />
      <Hero />
      <TrustStrip />
      <HomeSection />
      <FounderSection />
      <WhySolar />
      <WithOrWithout />
      <HowSolarWorks />
      <CalculatorSection />
      <Packages />
      <SubsidyGuide />
      <LoanJourney />
      <InstallationTimeline />
      <Projects />
      <Testimonials />
      <ReviewSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
