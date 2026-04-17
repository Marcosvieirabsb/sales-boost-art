import { motion } from "framer-motion";
import { useState } from "react";

import poteMorango500 from "@/assets/pote-morango-15-doses-500.webp";
import poteMorango800 from "@/assets/pote-morango-15-doses-800.webp";
import poteCaramelo500 from "@/assets/pote-caramelo-15-doses-500.webp";
import poteCaramelo800 from "@/assets/pote-caramelo-15-doses-800.webp";
import poteDuo500 from "@/assets/pote-duo-15-15-doses-500.webp";
import poteDuo800 from "@/assets/pote-duo-15-15-doses-800.webp";
import poteCompleto30_500 from "@/assets/pote-completo-30-30-doses-500.webp";
import poteCompleto30_800 from "@/assets/pote-completo-30-30-doses-800.webp";
import poteIrresistivel500 from "@/assets/pote-irresistivel-45-15-doses-500.webp";
import poteIrresistivel800 from "@/assets/pote-irresistivel-45-15-doses-800.webp";
import poteCompleto120_500 from "@/assets/pote-completo-120-doses-500.webp";
import poteCompleto120_800 from "@/assets/pote-completo-120-doses-800.webp";
import poteCaramelo90_500 from "@/assets/pote-caramelo-90-doses-500.webp";
import poteCaramelo90_800 from "@/assets/pote-caramelo-90-doses-800.webp";

type ImgPair = { src: string; srcSet: string };
const pair = (s500: string, s800: string): ImgPair => ({
  src: s800,
  srcSet: `${s500} 500w, ${s800} 800w`,
});

const IMG_MORANGO = pair(poteMorango500, poteMorango800);
const IMG_CARAMELO = pair(poteCaramelo500, poteCaramelo800);
const IMG_DUO = pair(poteDuo500, poteDuo800);
const IMG_COMPLETO30 = pair(poteCompleto30_500, poteCompleto30_800);
const IMG_IRRESISTIVEL = pair(poteIrresistivel500, poteIrresistivel800);
const IMG_COMPLETO120 = pair(poteCompleto120_500, poteCompleto120_800);
const IMG_CARAMELO90 = pair(poteCaramelo90_500, poteCaramelo90_800);

type Variant = {
  id: string;
  doses: string;
  price: string;
  url: string;
  image?: ImgPair;
};

type Category = {
  id: string;
  label: string;
  subtitle: string;
  image: ImgPair;
  badge?: string;
  variants: Variant[];
};

const categories: Category[] = [
  {
    id: "morango",
    label: "Morango",
    subtitle: "Sabor clássico",
    image: IMG_MORANGO,
    variants: [
      { id: "morango-15", doses: "15 doses · 1 pote", price: "R$ 187,00", url: "https://pay.b4you.com.br/HjH9Hh14N_" },
      { id: "morango-30", doses: "30 doses · 1 pote", price: "R$ 287,00", url: "https://pay.b4you.com.br/cxy3vGXfct" },
    ],
  },
  {
    id: "caramelo",
    label: "Caramelo Salgado",
    subtitle: "Sabor irresistível",
    image: IMG_CARAMELO,
    variants: [
      { id: "caramelo-15", doses: "15 doses · 1 pote", price: "R$ 187,00", url: "https://pay.b4you.com.br/xsHc6BUaqu" },
      { id: "caramelo-30", doses: "30 doses · 1 pote", price: "R$ 287,00", url: "https://pay.b4you.com.br/TPEIWvREQy" },
    ],
  },
  {
    id: "duo",
    label: "Duo Degustação",
    subtitle: "Experimente os dois sabores",
    image: IMG_DUO,
    variants: [
      { id: "duo-15-15", doses: "15 doses Morango + 15 doses Caramelo", price: "R$ 317,00", url: "https://pay.b4you.com.br/NiivV6jrrW" },
    ],
  },
  {
    id: "irresistivel",
    label: "Irresistível",
    subtitle: "Combo com 2 sabores: 30 doses de um sabor + 15 doses de outro",
    image: IMG_IRRESISTIVEL,
    badge: "MAIS VENDIDO",
    variants: [
      { id: "irresistivel-morango", doses: "30 Morango + 15 Caramelo", price: "R$ 417,00", url: "https://pay.b4you.com.br/NiivV6jrrW" },
      { id: "irresistivel-caramelo", doses: "30 Caramelo + 15 Morango", price: "R$ 417,00", url: "https://pay.b4you.com.br/pBov9AXATO" },
    ],
  },
  {
    id: "kit-completo",
    label: "Kit Completo",
    subtitle: "Edição Especial — 2 potes",
    image: IMG_COMPLETO30,
    badge: "MELHOR CUSTO",
    variants: [
      { id: "kit-completo-30-30", doses: "30 doses Morango + 30 doses Caramelo", price: "R$ 517,00", url: "https://pay.b4you.com.br/yBRVXwEHJx" },
    ],
  },
  {
    id: "kit-especial",
    label: "Kit Especial",
    subtitle: "Combo com 3 potes do mesmo sabor — 90 doses",
    image: IMG_COMPLETO120,
    variants: [
      { id: "kit-especial-morango", doses: "3 Potes Morango · 90 doses", price: "R$ 747,00", url: "https://pay.b4you.com.br/6eRsOOaOzS" },
      { id: "kit-especial-caramelo", doses: "3 Potes Caramelo Salgado · 90 doses", price: "R$ 747,00", url: "https://pay.b4you.com.br/183Q5Fdgkm", image: IMG_CARAMELO90 },
    ],
  },
];

const CTASection = () => {
  const [selectedCategory, setSelectedCategory] = useState("irresistivel");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() =>
    Object.fromEntries(categories.map((c) => [c.id, c.variants[0].id]))
  );

  const category = categories.find((c) => c.id === selectedCategory) ?? categories[0];
  const variant =
    category.variants.find((v) => v.id === selectedVariants[category.id]) ?? category.variants[0];

  const activeImage = variant.image ?? category.image;

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSelectVariant = (categoryId: string, variantId: string) => {
    setSelectedCategory(categoryId);
    setSelectedVariants((prev) => ({ ...prev, [categoryId]: variantId }));
  };

  return (
    <section id="comprar" className="py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-foreground/65 mb-3 md:mb-4">
            Escolha seu protocolo
          </p>
          <h2 className="font-display text-3xl md:text-display-lg">Comece sua jornada</h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src={activeImage.src}
              srcSet={activeImage.srcSet}
              sizes="(max-width: 768px) 80vw, 500px"
              width={800}
              height={998}
              alt={`AYNA Whey Protein — ${category.label}`}
              className="w-full max-w-sm md:max-w-lg mx-auto rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 md:space-y-4 w-full"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const activeVariantId = selectedVariants[cat.id];
              return (
                <div
                  key={cat.id}
                  className={`rounded-xl border-2 transition-all relative ${
                    isActive
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/40"
                  }`}
                >
                  {cat.badge && (
                    <span className="absolute -top-2.5 md:-top-3 left-4 md:left-5 bg-primary text-primary-foreground text-[9px] md:text-[10px] tracking-[0.12em] uppercase px-2.5 md:px-3 py-0.5 md:py-1 rounded-full font-medium">
                      {cat.badge}
                    </span>
                  )}
                  <button
                    onClick={() =>
                      cat.variants.length === 1
                        ? handleSelectVariant(cat.id, cat.variants[0].id)
                        : handleSelectCategory(cat.id)
                    }
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4"
                    aria-label={`Selecionar ${cat.label}`}
                  >
                    <div>
                      <p className="text-sm font-semibold">{cat.label}</p>
                      <p className="text-[11px] md:text-xs text-foreground/65 mt-0.5 md:mt-1">
                        {cat.variants.length === 1 ? cat.variants[0].doses : cat.subtitle}
                      </p>
                    </div>
                    {cat.variants.length === 1 && (
                      <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
                        {cat.variants[0].price}
                      </span>
                    )}
                  </button>

                  {isActive && cat.variants.length > 1 && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 space-y-2">
                      {cat.variants.map((v) => {
                        const variantActive = activeVariantId === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => handleSelectVariant(cat.id, v.id)}
                            className={`w-full text-left rounded-2xl border p-3 transition-all flex justify-between items-center ${
                              variantActive
                                ? "border-primary bg-background"
                                : "border-border hover:border-muted-foreground/40"
                            }`}
                            aria-label={`Selecionar variante ${v.doses}`}
                          >
                            <span className="text-[12px] md:text-xs">{v.doses}</span>
                            <span className="text-xs md:text-sm font-semibold">{v.price}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href={variant.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Comprar Agora — ${category.label} ${variant.doses} (${variant.price})`}
              onClick={() => {
                const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
                w.dataLayer = w.dataLayer || [];
                w.dataLayer.push({
                  event: "checkout_click",
                  click_url: variant.url,
                  product_name: `${category.label} — ${variant.doses}`,
                  product_value: variant.price,
                });
              }}
              className="flex items-center justify-center gap-2 w-full bg-foreground text-background text-center px-8 md:px-10 py-3.5 md:py-4 text-sm tracking-[0.12em] uppercase font-medium rounded-full hover:opacity-90 transition-opacity mt-4 md:mt-6"
            >
              Comprar Agora
              <span aria-hidden="true">→</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-3 md:pt-4 text-[10px] md:text-xs text-foreground/65">
              <span className="flex items-center gap-1.5">📦 Frete Grátis</span>
              <span className="flex items-center gap-1.5">🛡 Garantia 30 dias</span>
              <span className="flex items-center gap-1.5">✓ Checkout Seguro</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
