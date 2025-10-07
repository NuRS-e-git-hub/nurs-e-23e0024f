import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { CarePaths } from "@/components/CarePaths";
import { Benefits } from "@/components/Benefits";
import { Technology } from "@/components/Technology";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <CarePaths />
      <Benefits />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
