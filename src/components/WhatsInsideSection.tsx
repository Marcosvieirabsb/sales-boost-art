import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import tabelaNutricional from "@/assets/tabela-nutricional.jpeg";

const insideList = [
  "Zero açúcar, sem glúten",
  "Whey protein isolado",
  "Colágeno hidrolisado",
  "Gelatina e pectina natural",
  "Apenas 98 kcal por porção",
];

const neverList = [
  "Açúcar adicionado",
  "Adoçantes artificiais agressivos",
  "Glúten ou enchimentos",
  "Conservantes desnecessários",
  "Calorias vazias",
];

const WhatsInsideSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 md:py-32 px-5 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-display-lg">
            Ingredientes Transparentes
          </h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 border border-border">
          {/* What's Inside */}
          <div className="px-6 md:px-12 py-8 md:py-10 bg-background">
            <h3 className="font-display text-xl md:text-display-sm mb-6 md:mb-8 text-center">
              O Que Tem
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {insideList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-foreground mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's Not */}
          <div className="px-6 md:px-12 py-8 md:py-10 border-t md:border-t-0 md:border-l border-border">
            <h3 className="font-display text-xl md:text-display-sm mb-6 md:mb-8 text-center">
              O Que Nunca Vai Ter
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {neverList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botão Tabela Nutricional */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-8 md:mt-12"
        >
          <button
            onClick={() => setOpen(true)}
            className="border border-foreground text-foreground px-6 md:px-8 py-2.5 md:py-3 text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground hover:text-background transition-colors rounded-full"
          >
            Tabela nutricional
          </button>
        </motion.div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md md:max-w-lg p-2 md:p-4 max-h-[90vh] overflow-y-auto">
            <DialogTitle className="sr-only">Tabela Nutricional AYNA</DialogTitle>
            <img
              src={tabelaNutricional}
              alt="Tabela Nutricional AYNA Protein"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
