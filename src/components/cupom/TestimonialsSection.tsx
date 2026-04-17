import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Isso é saudável mesmo né? Pq tô viciando 😁",
    name: "Patricia L.",
  },
  {
    text: "Nunca vi uma coisa tão deliciosa na minha vida. Não tem gosto nenhum de proteína. Um sabor perfeito!",
    name: "Ana Claudia",
  },
  {
    text: "Com um cafezinho, a de caramelo é imbatível! Até meu marido tá roubando as minhas 🙈",
    name: "Maria Ilydia",
  },
  {
    text: "Já é meu segundo pacote hoje kkk 😂",
    name: "Aline G.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 md:mb-6">
            Quem já provou
          </p>
          <h2 className="font-display text-3xl md:text-display-lg">
            +100 Clientes Satisfeitas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-border pt-6 md:pt-8"
            >
              <div className="flex gap-0.5 mb-3 md:mb-4 text-foreground text-xs">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="text-base leading-relaxed mb-4 md:mb-6 italic font-display text-lg md:text-xl">
                "{t.text}"
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.1em] uppercase text-muted-foreground">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
