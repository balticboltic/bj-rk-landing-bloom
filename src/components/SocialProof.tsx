import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    quote: "Очень естественный результат — коллеги заметили, что я отдохнула, но никто не догадался про процедуру. Именно то, что хотела!",
    name: "Анна К.",
    source: "Яндекс Карты",
  },
  {
    quote: "Пришла впервые и очень волновалась. Доктор всё объяснила, показала препарат, была терпелива. Результат — лоб гладкий, мимика живая.",
    name: "Мария Д.",
    source: "Яндекс Карты",
  },
  {
    quote: "Третий раз прихожу в BJÖRK. Нравится, что нет навязывания лишних процедур. Делают именно то, что нужно, и делают отлично.",
    name: "Елена В.",
    source: "Яндекс Карты",
  },
];

const SocialProof = () => {
  return (
    <AnimatedSection className="py-14 px-6 bg-cream relative overflow-hidden">
      {/* Decorative copper accent */}
      <div className="absolute top-0 left-6 w-px h-20 bg-gradient-to-b from-copper/40 to-transparent" />

      <div className="max-w-[480px] mx-auto">
        <p className="text-label text-copper mb-3">Отзывы</p>
        <h2 className="font-display text-[30px] text-foreground mb-10 leading-[1.1]">
          Что говорят<br />наши пациенты
        </h2>

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-sand-light/80 backdrop-blur-sm rounded-3xl p-6 border border-foreground/[0.04] group hover:border-copper/20 transition-all duration-300"
            >
              {/* Copper quote mark */}
              <span className="absolute -top-2 left-6 font-display text-[48px] text-copper/20 leading-none select-none">«</span>

              <p className="font-display italic text-[15px] leading-[1.65] text-foreground/85 mb-5 pt-3">
                {review.quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-copper/20 to-copper/5 flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-copper">{review.name[0]}</span>
                  </div>
                  <span className="text-[13px] font-medium text-foreground">{review.name}</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-sand rounded-pill px-3 py-1.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 text-[13px] text-copper font-semibold mt-6 group hover:text-copper-light transition-colors"
        >
          <span>Все 200+ отзывов</span>
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
        </motion.a>
      </div>
    </AnimatedSection>
  );
};

export default SocialProof;
