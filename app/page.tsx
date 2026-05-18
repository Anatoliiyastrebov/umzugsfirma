import { HeroSection } from "@/features/sections/hero-section";
import { BenefitsSection } from "@/features/sections/benefits-section";
import { ServicesSection } from "@/features/sections/services-section";
import { CostCalculator } from "@/features/calculator/cost-calculator";
import { ProcessSection } from "@/features/sections/process-section";
import { TestimonialsSection } from "@/features/sections/testimonials-section";
import { ContactForm } from "@/features/contact/contact-form";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <CostCalculator />
      <ProcessSection />
      <TestimonialsSection />
      <ContactForm />
    </>
  );
}
