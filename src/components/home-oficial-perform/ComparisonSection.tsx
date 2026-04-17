import { motion } from "framer-motion";

const comparisons = [
  { feature: "12g de proteína por porção", ayna: true, others: false },
  { feature: "Zero açúcar", ayna: true, others: false },
  { feature: "98 calorias por dose", ayna: true, others: false },
  { feature: "Sem glúten", ayna: true, others: false },
  { feature: "Formato prático (goma)", ayna: true, others: false },
  { feature: "Sabor real de doce", ayna: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-display-lg">
            AYNA Faz o Que os Outros
            <br className="hidden md:block" />
            {" "}Suplementos Não Fazem
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border overflow-x-auto"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_60px_60px] md:grid-cols-3 border-b border-border min-w-0">
            <div className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
              Benefício
            </div>
            <div className="px-2 md:px-6 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.15em] uppercase text-center font-medium">
              AYNA
            </div>
            <div className="px-2 md:px-6 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.15em] uppercase text-center text-muted-foreground font-medium">
              Maioria
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-[1fr_60px_60px] md:grid-cols-3 border-b border-border last:border-b-0"
            >
              <div className="px-4 md:px-6 py-4 md:py-5 text-xs md:text-sm">{row.feature}</div>
              <div className="px-2 md:px-6 py-4 md:py-5 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-foreground text-background text-[10px] md:text-xs">
                  ✓
                </span>
              </div>
              <div className="px-2 md:px-6 py-4 md:py-5 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-border text-muted-foreground text-[10px] md:text-xs">
                  ✕
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
