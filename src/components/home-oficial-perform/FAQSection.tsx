import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "A AYNA é pra mim?",
    a: "AYNA é pra quem quer se cuidar de um jeito gostoso e sem complicação. Mães no aperto do dia, quem trabalha muito, quem treina, quem quer comer melhor ou quem viaja sempre.",
  },
  {
    q: "Preciso malhar pra consumir?",
    a: "Não! Proteína é um nutriente essencial pra todo mundo — ela ajuda a manter a energia estável, a pele bonita, os cabelos fortes e a sensação de saciedade ao longo do dia.",
  },
  {
    q: "Quantas balinhas tem em uma dose?",
    a: "Uma dose são 4 balinhas. Cada uma tem 3g de proteína, então uma dose completa entrega 12g de proteína, com apenas 98kcal, sem açúcar e sem glúten.",
  },
  {
    q: "O que tem dentro de cada balinha?",
    a: "Whey protein isolado (proteína de alta absorção) e colágeno hidrolisado. Fórmula com zero açúcar, sem glúten e 98 kcal por porção.",
  },
  {
    q: "Tem lactose?",
    a: "O whey isolado passa por filtragem que remove a grande maioria da lactose, sendo adequado para maioria das pessoas com intolerância leve. Para alergia severa (APLV), consulte um profissional.",
  },
  {
    q: "Comer AYNA vai me deixar 'grandona'?",
    a: "Mito! Proteína sozinha não causa ganho de volume muscular. A AYNA tem apenas 98kcal por dose e apoia a manutenção da massa magra.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-32 px-5 md:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-display-lg">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border px-0"
            >
              <AccordionTrigger className="text-left font-display text-base md:text-xl hover:no-underline py-5 md:py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 md:pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center mt-8 md:mt-12 text-xs text-muted-foreground">
          Ainda tem dúvidas?{" "}
          <a
            href="mailto:ajuda@aynaprotein.com.br"
            className="underline"
          >
            ajuda@aynaprotein.com.br
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
