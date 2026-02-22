import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Это больно?",
    a: "Инъекции выполняются тончайшими иглами. Большинство пациенток описывают ощущения как лёгкое покалывание. При необходимости наносим анестезирующий крем.",
  },
  {
    q: "Когда будет виден результат?",
    a: "Первый эффект заметен через 3–5 дней. Полный результат формируется к 14-му дню. Сохраняется от 4 до 6 месяцев.",
  },
  {
    q: "Будет ли лицо выглядеть «замороженным»?",
    a: "Нет. Мы используем точечные микродозы, которые расслабляют мышцы, но сохраняют естественную мимику. Цель — свежий отдохнувший вид.",
  },
  {
    q: "Что такое Релатокс?",
    a: "Релатокс — это российский препарат ботулотоксина типа А, зарегистрированный Минздравом. Аналог Ботокса и Диспорта, с доказанным профилем безопасности.",
  },
  {
    q: "Какие ограничения после процедуры?",
    a: "В течение 4 часов не наклоняться, не ложиться. 24 часа — без спорта, бани, алкоголя. В остальном образ жизни обычный.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <AnimatedSection className="py-14 px-6 bg-sand-light">
      <div className="max-w-[480px] mx-auto">
        <p className="text-label text-copper mb-3">FAQ</p>
        <h2 className="font-display text-[30px] text-foreground mb-8 leading-[1.1]">
          Частые вопросы
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-cream overflow-hidden border border-foreground/[0.04] hover:border-copper/10 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4.5 text-left group"
              >
                <span className="text-[14px] font-semibold text-foreground pr-4 group-hover:text-copper transition-colors duration-200">{faq.q}</span>
                <span
                  className={`w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 transition-all duration-300 text-[12px] ${
                    open === i ? "bg-copper border-copper text-accent-foreground rotate-45" : "text-muted-foreground"
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="w-8 h-px bg-copper/30 mb-3" />
                      <p className="text-[13px] text-muted-foreground leading-[1.7]">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
