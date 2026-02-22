import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <AnimatedSection className="py-10 px-5 bg-sand-light">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-display text-[26px] font-medium text-foreground mb-6">
          Частые вопросы
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-foreground/[0.06] rounded-xl bg-cream overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-[15px] font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-[14px] text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
