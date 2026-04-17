import { motion } from "framer-motion";

const benefits = [
  {
    title: "Whey Protein Isolado",
    desc: "Proteína de alta absorção para recuperação e manutenção muscular.",
  },
  {
    title: "Colágeno Hidrolisado",
    desc: "Contribui com a ingestão diária de proteínas e saúde da pele.",
  },
  {
    title: "Zero Açúcar",
    desc: "Adoçada com edulcorantes, sem açúcar adicionado.",
  },
  {
    title: "Sem Glúten",
    desc: "Fórmula clean, sem ingredientes desnecessários.",
  },
  {
    title: "98 Calorias",
    desc: "Encaixa em qualquer plano alimentar sem estrago.",
  },
  {
    title: "Formato Goma",
    desc: "Praticidade e prazer — na bolsa, no trabalho, em qualquer lugar.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-display-lg">
            6 Razões Para Escolher AYNA
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-lg md:text-2xl mb-2 md:mb-3">
                {b.title}
              </h3>
              <p className="text-xs md:text-sm opacity-70 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
