import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

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
    <AnimatedSection className="py-10 px-5 bg-cream">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-display text-2xl font-medium text-foreground mb-6">
          Что говорят пациенты
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[300px] snap-start bg-sand-light border border-foreground/[0.06] rounded-xl p-5 flex flex-col justify-between"
            >
              <p className="font-display italic text-[15px] leading-relaxed text-foreground/90 mb-4">
                «{review.quote}»
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{review.name}</span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground bg-sand rounded-pill px-2.5 py-1">
                  <MapPin className="w-3 h-3" />
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="inline-flex items-center gap-1 text-sm text-copper font-medium mt-2 hover:text-copper-light transition-colors">
          Все 200+ отзывов →
        </a>
      </div>
    </AnimatedSection>
  );
};

export default SocialProof;
