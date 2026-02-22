import AnimatedSection from "./AnimatedSection";

const services = ["Филлеры", "Биоревитализация", "Мезотерапия", "Пилинги", "Плазмотерапия"];

const ConsultationUpsell = () => {
  return (
    <AnimatedSection className="py-10 px-5 bg-cream">
      <div className="max-w-[480px] mx-auto">
        <div className="bg-sand-light rounded-2xl p-6 border border-foreground/[0.06]">
          <h2 className="font-display text-[22px] font-medium text-foreground mb-2">
            Не уверены? Приходите на консультацию
          </h2>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            Врач оценит состояние кожи, ответит на вопросы и подберёт процедуру индивидуально.
          </p>

          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-[13px] text-muted-foreground line-through">1 500 ₽</span>
            <span className="bg-copper/15 text-copper text-[12px] font-semibold px-2.5 py-1 rounded-pill">
              Бесплатно при процедуре
            </span>
          </div>

          <button className="w-full bg-forest text-primary-foreground font-semibold text-[14px] py-3.5 rounded-lg hover:bg-forest-deep transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Записаться на консультацию
          </button>

          <div className="mt-5 pt-4 border-t border-foreground/[0.06]">
            <p className="text-[12px] text-muted-foreground mb-3">Также в клинике:</p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s} className="text-[12px] text-foreground/70 bg-sand rounded-pill px-3 py-1.5 border border-foreground/[0.06]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ConsultationUpsell;
