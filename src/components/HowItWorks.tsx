import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "1", title: "Консультация", desc: "Врач оценивает мимику и подбирает дозировку" },
  { num: "2", title: "Процедура", desc: "Инъекции тонкой иглой — 15–20 минут, без боли" },
  { num: "3", title: "Результат", desc: "Эффект нарастает 7–14 дней. Сохраняется до 6 месяцев" },
];

const HowItWorks = () => {
  return (
    <AnimatedSection className="py-10 px-5 bg-cream">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-display text-[26px] font-medium text-foreground mb-8">
          Как проходит процедура
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-forest/15" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start relative">
                <div className="w-10 h-10 rounded-full bg-forest text-primary-foreground flex items-center justify-center text-sm font-semibold shrink-0 z-10">
                  {step.num}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[15px] font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorks;
