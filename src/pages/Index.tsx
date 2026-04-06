import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhatsInsideSection from "@/components/WhatsInsideSection";
import HowToUseSection from "@/components/HowToUseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <ProductSection />
      <BenefitsSection />
      <ComparisonSection />
      <WhatsInsideSection />
      <HowToUseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      <footer className="py-12 md:py-16 px-5 md:px-6 text-center border-t border-border">
        <p className="font-display text-xl md:text-2xl mb-2 md:mb-3">ayna</p>
        <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 md:mb-4">
          Gomas proteicas premium
        </p>
        <a
          href="mailto:ajuda@aynaprotein.com.br"
          className="text-[10px] md:text-xs text-muted-foreground underline"
        >
          ajuda@aynaprotein.com.br
        </a>
      </footer>
    </main>
  );
};

export default Index;
