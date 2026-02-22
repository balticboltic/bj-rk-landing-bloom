import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Консультация", desc: "Врач оценивает мимику и подбирает дозировку" },
  { num: "02", title: "Процедура", desc: "Инъекции тонкой иглой — 15–20 минут, без боли" },
  { num: "03", title: "Результат", desc: "Эффект нарастает 7–14 дней. Сохраняется до 6 месяцев" },
];

const HowItWorks = () => {
  return (
    <AnimatedSection className="py-14 px-6 bg-cream relative overflow-hidden">
      <div className="max-w-[480px] mx-auto">
        <p className="text-label text-copper mb-3">Процесс</p>
        <h2 className="font-display text-[30px] text-foreground mb-10 leading-[1.1]">
          Как проходит<br />процедура
        </h2>

        <div className="relative">
          {/* Gradient vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-copper via-copper/30 to-transparent" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 items-start relative py-6"
              >
                {/* Number with copper ring */}
                <div className="relative shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-cream border-2 border-copper/40 flex items-center justify-center">
                    <span className="text-[12px] font-bold text-copper tracking-wider">{step.num}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-foreground mb-1.5 tracking-wide">{step.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorks;
