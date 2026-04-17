import { motion } from "framer-motion";
import { useState } from "react";
import poteMorango from "@/assets/pote-morango-15-doses.png";
import poteCaramelo from "@/assets/pote-caramelo-15-doses.png";
import poteDuo from "@/assets/pote-duo-15-15-doses.png";
import poteCompleto30 from "@/assets/pote-completo-30-30-doses.png";
import poteIrresistivel from "@/assets/pote-irresistivel-45-15-doses.png";
import poteCompleto120 from "@/assets/pote-completo-120-doses.png";

const plans = [
  {
    id: "morango",
    label: "Morango",
    doses: "15 doses · 1 pote",
    subtitle: "Sabor clássico",
    price: "R$ 187,00",
    url: "https://checkout.b4you.com.br/HjH9Hh14N_",
    image: poteMorango,
  },
  {
    id: "morango-30",
    label: "Morango",
    doses: "30 doses · 1 pote",
    subtitle: "Sabor clássico",
    price: "R$ 287,00",
    url: "https://checkout.b4you.com.br/cxy3vGXfct",
    image: poteMorango,
  },
  {
    id: "caramelo-salgado",
    label: "Caramelo Salgado",
    doses: "15 doses · 1 pote",
    subtitle: "Sabor irresistível",
    price: "R$ 187,00",
    url: "https://checkout.b4you.com.br/xsHc6BUaqu",
    image: poteCaramelo,
  },
  {
    id: "caramelo-salgado-30",
    label: "Caramelo Salgado",
    doses: "30 doses · 1 pote",
    subtitle: "Sabor irresistível",
    price: "R$ 287,00",
    url: "https://checkout.b4you.com.br/TPEIWvREQy",
    image: poteCaramelo,
  },
  {
    id: "duo-degustacao",
    label: "Duo Degustação",
    doses: "15 + 15 doses",
    subtitle: "Experimente os dois sabores",
    price: "R$ 317,00",
    url: "https://checkout.b4you.com.br/NiivV6jrrW",
    image: poteDuo,
  },
  {
    id: "kit-completo",
    label: "Kit Completo",
    doses: "30 + 30 doses",
    subtitle: "Edição Especial",
    price: "R$ 517,00",
    url: "https://checkout.b4you.com.br/yBRVXwEHJx",
    badge: "MELHOR CUSTO",
    image: poteCompleto30,
  },
  {
    id: "irresistivel",
    label: "Irresistível",
    doses: "30 + 15 doses",
    subtitle: "30 Morango + 15 Caramelo",
    price: "R$ 417,00",
    url: "https://checkout.b4you.com.br/NiivV6jrrW",
    badge: "MAIS VENDIDO",
    image: poteIrresistivel,
  },
  {
    id: "irresistivel-caramelo",
    label: "Irresistível",
    doses: "30 + 15 doses",
    subtitle: "30 Caramelo + 15 Morango",
    price: "R$ 417,00",
    url: "https://checkout.b4you.com.br/pBov9AXATO",
    image: poteIrresistivel,
  },
  {
    id: "kit-especial-morango",
    label: "Kit Especial",
    doses: "90 doses · 3 potes",
    subtitle: "Kit 3 Potes Morango",
    price: "R$ 747,00",
    url: "https://checkout.b4you.com.br/6eRsOOaOzS",
    image: poteCompleto120,
  },
  {
    id: "kit-especial-caramelo",
    label: "Kit Especial",
    doses: "90 doses · 3 potes",
    subtitle: "Kit 3 Potes Caramelo Salgado",
    price: "R$ 747,00",
    url: "https://checkout.b4you.com.br/183Q5Fdgkm",
    image: poteCompleto120,
  },
];

const CTASection = () => {
  const [selected, setSelected] = useState("irresistivel");

  const selectedPlan = plans.find((p) => p.id === selected) ?? plans[0];

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
          <h2 className="font-display text-3xl md:text-display-lg">Comece sua jornada</h2>
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
              src={selectedPlan.image}
              alt={`AYNA Whey Protein — ${selectedPlan.label}`}
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
                    <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">{plan.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm font-semibold">{plan.price}</p>
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
