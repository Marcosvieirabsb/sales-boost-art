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

      <footer className="border-t border-border" role="contentinfo">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            
            {/* Brand */}
            <div className="md:col-span-1">
              <p className="font-display text-2xl md:text-3xl mb-2">ayna</p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                Seja sua própria inspiração.
              </p>
            </div>

            {/* SAC */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3 md:mb-4 font-medium">
                Atendimento
              </p>
              <div className="space-y-2 text-xs text-foreground/80">
                <a href="tel:+5521996996560" className="block hover:text-foreground transition-colors">
                  +55 21 99699-6560
                </a>
                <a href="mailto:ajuda@aynaprotein.com.br" className="block hover:text-foreground transition-colors">
                  ajuda@aynaprotein.com.br
                </a>
                <p className="text-muted-foreground">Seg–Sex, 8h às 18h</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3 md:mb-4 font-medium">
                Redes sociais
              </p>
              <div className="space-y-2 text-xs text-foreground/80">
                <a
                  href="https://instagram.com/aynaprotein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  @aynaprotein
                </a>
                <a
                  href="https://tiktok.com/@aynaprotein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
                  @aynaprotein
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3 md:mb-4 font-medium">
                Informações legais
              </p>
              <div className="space-y-1.5 text-[11px] text-muted-foreground leading-relaxed">
                <p>AYNA COMÉRCIO E CONSULTORIA LTDA.</p>
                <p>CNPJ: 44.602.363/0001-72</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border px-5 md:px-6 py-5 md:py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-[11px] text-muted-foreground">
            <p>© 2026 AYNA. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Termos de uso</a>
              <span className="w-px h-3 bg-border" />
              <a href="#" className="hover:text-foreground transition-colors">Política de privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
