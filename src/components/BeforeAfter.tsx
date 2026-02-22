import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { zone: "Лоб + Межбровье", timeframe: "Результат: 14 дней" },
  { zone: "«Гусиные лапки»", timeframe: "Результат: 10 дней" },
  { zone: "Полная коррекция", timeframe: "Результат: 14 дней" },
];

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);

  return (
    <AnimatedSection className="py-14 bg-sand-light relative grain overflow-hidden">
      <div className="max-w-[480px] mx-auto px-6">
        <p className="text-label text-copper mb-3">Результаты</p>
        <h2 className="font-display text-[30px] text-foreground mb-8 leading-[1.1]">
          До и после
        </h2>
      </div>

      <div className="relative max-w-[480px] mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full px-6">
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex-1 aspect-[3/4] bg-sand rounded-3xl border border-foreground/[0.04] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest/[0.03]" />
                      <span className="text-label text-muted-foreground/60">До</span>
                    </div>
                    <div className="flex-1 aspect-[3/4] bg-sand rounded-3xl border border-copper/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-copper/[0.04]" />
                      <span className="text-label text-copper/40">После</span>
                    </div>
                  </div>
                  {/* Copper line connecting both */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cream border-2 border-copper/30 flex items-center justify-center z-10">
                    <span className="text-[10px] text-copper font-semibold">→</span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="text-[14px] font-semibold text-foreground">{slide.zone}</p>
                  <p className="text-[12px] text-copper mt-1 font-medium">{slide.timeframe}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Minimal tab navigation */}
        <div className="flex items-center justify-center gap-3 mt-8 px-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-400 ${
                i === current
                  ? "w-10 bg-gradient-to-r from-copper to-copper-light"
                  : "w-4 bg-foreground/10 hover:bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BeforeAfter;
