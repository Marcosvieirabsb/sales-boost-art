import { motion } from "framer-motion";

const PainSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 md:mb-6">
            A verdade sobre o doce
          </p>
          <h2 className="font-display text-3xl md:text-display-lg mb-6 md:mb-8">
            Você não estraga por falta de
            força de vontade.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8 md:mb-12">
            Você come bem o dia inteiro. Aí bate aquela vontade às 15h. Você
            resiste. Resiste. E então come meio chocolate de uma vez, já com
            culpa na primeira mordida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-border pt-8 md:pt-12"
        >
          <p className="font-display text-2xl md:text-display-sm italic text-foreground mb-4 md:mb-6">
            "Estraguei tudo."
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            O problema é que o mercado te vendeu duas opções impossíveis:
            ou você sofre, ou você sabota. A AYNA é a terceira opção —
            a que ninguém te deu antes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
