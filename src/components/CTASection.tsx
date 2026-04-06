import { motion } from "framer-motion";
import { useState } from "react";
import productJarsImg from "@/assets/product-jars.jpg";

const plans = [
  {
    id: "1-pote",
    label: "1 Pote",
    doses: "15 porções",
    subtitle: "Experimente",
    discount: "22% OFF",
    originalPrice: "R$ 239",
    installment: "12x de R$ 15,58",
    cash: "R$ 187 à vista",
    url: "https://checkout.b4you.com.br/nTgLIX3MJ0?full_name=Cristiano%20Dias%20de%20Oliveira&email=cristiano21%40hotmail.com.br&sck=1773838906466",
  },
  {
    id: "2-potes",
    label: "2 Potes",
    doses: "30 porções",
    subtitle: "Protocolo recomendado",
    discount: "23% OFF",
    originalPrice: "R$ 478",
    installment: "12x de R$ 23,91",
    cash: "R$ 287 à vista",
    url: "https://aynaprotein.store/#comprar",
    badge: "MAIS VENDIDO",
  },
  {
    id: "4-potes",
    label: "4 Potes",
    doses: "60 porções",
    subtitle: "Protocolo intensivo",
    discount: "30% OFF",
    originalPrice: "R$ 956",
    installment: "12x de R$ 44,91",
    cash: "R$ 539 à vista",
    url: "https://aynaprotein.store/#comprar",
    badge: "MELHOR CUSTO",
  },
];

const CTASection = () => {
  const [selected, setSelected] = useState("2-potes");

  const selectedPlan = plans.find((p) => p.id === selected)!;

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
          <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 md:mb-4">
            Escolha seu protocolo
          </p>
          <h2 className="font-display text-3xl md:text-display-lg">
            Comece sua jornada
          </h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={productJarsImg}
              alt="Potes AYNA — morango e caramelo salgado"
              className="w-full max-w-sm md:max-w-lg mx-auto rounded-2xl"
            />
          </motion.div>

          {/* Plans */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 md:space-y-4 w-full"
          >
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`w-full text-left rounded-xl border-2 p-4 md:p-5 transition-all relative ${
                  selected === plan.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/40"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-2.5 md:-top-3 left-4 md:left-5 bg-primary text-primary-foreground text-[9px] md:text-[10px] tracking-[0.12em] uppercase px-2.5 md:px-3 py-0.5 md:py-1 rounded-full font-medium">
                    {plan.badge}
                  </span>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold">
                      {plan.label}
                      <span className="font-normal text-muted-foreground ml-1.5 md:ml-2 text-[11px] md:text-xs">
                        {plan.doses}
                      </span>
                    </p>
                    <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">
                      {plan.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[9px] md:text-[10px] tracking-wide uppercase font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-0.5 md:mb-1">
                      {plan.discount}
                    </span>
                    <p className="text-[11px] md:text-xs text-muted-foreground line-through">
                      {plan.originalPrice}
                    </p>
                    <p className="text-xs md:text-sm font-semibold">{plan.installment}</p>
                    <p className="text-[11px] md:text-xs text-muted-foreground">
                      ou {plan.cash}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            <a
              href={selectedPlan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-foreground text-background text-center px-8 md:px-10 py-3.5 md:py-4 text-sm tracking-[0.12em] uppercase font-medium rounded-full hover:opacity-90 transition-opacity mt-4 md:mt-6"
            >
              Comprar Agora
              <span>→</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-3 md:pt-4 text-[10px] md:text-xs text-muted-foreground">
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
