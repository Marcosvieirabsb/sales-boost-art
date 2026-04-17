import { motion } from "framer-motion";
import logoAyna from "@/assets/logo-ayna.png";

// Hero LCP image — preload-friendly responsive WebP
import lifestyle800 from "@/assets/lifestyle-moment-800.webp";
import lifestyle1200 from "@/assets/lifestyle-moment-1200.webp";
import lifestyle1600 from "@/assets/lifestyle-moment-1600.webp";

import gallery1_600 from "@/assets/gallery-1-600.webp";
import gallery1_1000 from "@/assets/gallery-1-1000.webp";
import gallery2_600 from "@/assets/gallery-2-600.webp";
import gallery2_1000 from "@/assets/gallery-2-1000.webp";
import gallery3_600 from "@/assets/gallery-3-600.webp";
import gallery3_1000 from "@/assets/gallery-3-1000.webp";

const badges = [
  "12g de proteína",
  "Zero açúcar",
  "Sem glúten",
  "98 calorias",
  "Whey isolado",
  "Colágeno",
  "12g de proteína",
  "Zero açúcar",
  "Sem glúten",
  "98 calorias",
  "Whey isolado",
  "Colágeno",
];

const lifestyleSrcSet = `${lifestyle800} 800w, ${lifestyle1200} 1200w, ${lifestyle1600} 1600w`;

const HeroSection = () => {
  return (
    <section>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 md:py-5">
        <img
          src={logoAyna}
          alt="AYNA"
          width={446}
          height={142}
          className="h-6 md:h-8 w-auto"
          fetchPriority="high"
          decoding="async"
        />
        <a
          href="#comprar"
          aria-label="Ir para a seção de compra AYNA"
          onClick={(e) => { e.preventDefault(); document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="bg-foreground text-background px-4 md:px-6 py-2 md:py-2.5 text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity rounded-full"
        >
          comprar ayna
        </a>
      </nav>

      {/* Hero banner */}
      <div className="px-3 md:px-6">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-card min-h-[65vh] md:min-h-[80vh]">
          <div className="flex flex-col md:grid md:grid-cols-2 h-full min-h-0 md:min-h-[80vh]">
            {/* Left: Text */}
            <div className="flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-8 pb-6 md:py-0 relative z-10 order-1 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-display text-[2.2rem] leading-[1.08] md:text-display-xl md:leading-[1.05] mb-4 md:mb-6">
                  Seu docinho
                  <br />
                  inteligente
                  <br />
                  <span className="text-primary italic">com proteína</span>
                </h1>

                <p className="text-sm text-foreground/70 leading-relaxed mb-4 md:mb-8 max-w-sm">
                  12g de whey isolado, zero açúcar
                  <br />
                  e apenas 98 calorias 🍬
                </p>

                <a
                  href="#comprar"
                  aria-label="Comprar AYNA agora — ir para a seção de compra"
                  onClick={(e) => { e.preventDefault(); document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-block bg-primary text-primary-foreground px-8 md:px-10 py-3.5 md:py-4 text-sm tracking-[0.1em] font-medium hover:opacity-90 transition-opacity rounded-full"
                >
                  comprar agora
                </a>
              </motion.div>
            </div>

            {/* Right: Image (LCP) */}
            <div className="relative overflow-hidden md:rounded-l-[4rem] min-h-[45vh] md:min-h-0 order-2 md:order-2">
              <img
                src={lifestyle1200}
                srcSet={lifestyleSrcSet}
                sizes="(max-width: 768px) 100vw, 50vw"
                width={1200}
                height={1800}
                alt="AYNA — gomas proteicas premium"
                className="w-full h-full object-cover object-top"
                fetchPriority="high"
                decoding="async"
                // eager + no motion-wrapper to avoid delaying LCP
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling badge bar */}
      <div className="overflow-hidden py-4 md:py-5 border-b border-border mt-3 md:mt-4">
        <div className="flex animate-scroll-x whitespace-nowrap will-change-transform">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground/65 mx-4 md:mx-6 flex-shrink-0"
            >
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-3 gap-1 mt-1 px-3 md:px-6">
        <div className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl">
          <img
            src={gallery1_600}
            srcSet={`${gallery1_600} 600w, ${gallery1_1000} 1000w`}
            sizes="(max-width: 768px) 33vw, 280px"
            width={600}
            height={450}
            alt="Potes AYNA"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl">
          <img
            src={gallery2_600}
            srcSet={`${gallery2_600} 600w, ${gallery2_1000} 1000w`}
            sizes="(max-width: 768px) 33vw, 280px"
            width={600}
            height={450}
            alt="Sabores AYNA"
            className="w-full h-full object-cover object-[50%_75%] hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl">
          <img
            src={gallery3_600}
            srcSet={`${gallery3_600} 600w, ${gallery3_1000} 1000w`}
            sizes="(max-width: 768px) 33vw, 280px"
            width={600}
            height={450}
            alt="Lifestyle AYNA"
            className="w-full h-full object-cover object-[70%_40%] hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
