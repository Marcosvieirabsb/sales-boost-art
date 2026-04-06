import { motion } from "framer-motion";
import gummiesCloseup from "@/assets/gummies-closeup.jpg";

const steps = [
  { num: "1", text: "Abra o pote e pegue 4 gomas" },
  { num: "2", text: "Mastigue e aproveite — como um docinho de verdade" },
  { num: "3", text: "Pronto. 12g de proteína entregues, sem drama" },
];

const HowToUseSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden w-full"
          >
            <img
              src={gummiesCloseup}
              alt="Potes AYNA"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-display-lg mb-4 md:mb-6">
              Pronto em 10 Segundos
            </h2>
            <p className="text-sm text-muted-foreground mb-8 md:mb-10 max-w-sm">
              Seu ritual diário de proteína e prazer — quando e onde quiser.
            </p>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4 md:gap-5">
                  <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center font-display text-base md:text-lg">
                    {step.num}
                  </span>
                  <p className="text-sm pt-2">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
