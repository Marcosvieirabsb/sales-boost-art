import { motion } from "framer-motion";
import flavorsImg from "@/assets/flavors-display.jpg";

const ProductSection = () => {
  return (
    <section className="py-0">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-0 min-h-[50vh] md:min-h-[70vh]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden min-h-[35vh] md:min-h-0"
        >
          <img
            src={flavorsImg}
            alt="Gomas AYNA de morango e caramelo salgado"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-0 bg-card">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 md:mb-6">
              O que é a AYNA
            </p>
            <h2 className="font-display text-3xl md:text-display-lg mb-6 md:mb-8">
              Não é um shake.
              <br />
              Não é barra de proteína.
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              <p>
                É uma goma de verdade — a mesma textura, o mesmo prazer, o
                mesmo ritual de comer um docinho.
              </p>
              <p>
                Só que dentro dela:{" "}
                <span className="text-foreground font-medium">
                  12g de whey protein isolado
                </span>{" "}
                e{" "}
                <span className="text-foreground font-medium">zero açúcar</span>.
              </p>
              <p className="italic text-foreground">
                O prazer não foi embora. Ele só começou a trabalhar a seu favor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
