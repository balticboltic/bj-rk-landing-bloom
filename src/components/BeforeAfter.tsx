import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { zone: "Лоб + Межбровье", timeframe: "Результат: 14 дней" },
  { zone: "«Гусиные лапки»", timeframe: "Результат: 10 дней" },
  { zone: "Полная коррекция", timeframe: "Результат: 14 дней" },
];

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);

  return (
    <AnimatedSection className="py-10 bg-sand-light">
      <div className="max-w-[480px] mx-auto px-5">
        <h2 className="font-display text-2xl font-medium text-foreground mb-6">
          До и после
        </h2>
      </div>

      <div className="relative max-w-[480px] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full px-5">
                <div className="flex gap-3">
                  <div className="flex-1 aspect-[3/4] bg-sand rounded-xl border border-foreground/[0.06] flex items-center justify-center">
                    <span className="text-label text-muted-foreground">До</span>
                  </div>
                  <div className="flex-1 aspect-[3/4] bg-sand rounded-xl border border-foreground/[0.06] flex items-center justify-center">
                    <span className="text-label text-muted-foreground">После</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-foreground">{slide.zone}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{slide.timeframe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-forest w-5" : "bg-foreground/15"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
            className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BeforeAfter;
