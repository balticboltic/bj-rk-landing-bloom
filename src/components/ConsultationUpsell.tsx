import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = ["Филлеры", "Биоревитализация", "Мезотерапия", "Пилинги", "Плазмотерапия"];

const ConsultationUpsell = () => {
  return (
    <AnimatedSection className="py-14 px-6 bg-cream">
      <div className="max-w-[480px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-sand-light rounded-3xl p-7 border border-foreground/[0.04] overflow-hidden"
        >
          {/* Decorative copper corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-copper/[0.08] to-transparent rounded-bl-full" />

          <p className="text-label text-copper mb-4">Консультация</p>
          <h2 className="font-display text-[24px] text-foreground mb-3 leading-[1.15]">
            Не уверены?<br />Приходите на приём
          </h2>
          <p className="text-[13px] text-muted-foreground leading-relaxed mb-5 max-w-[280px]">
            Врач оценит состояние кожи, ответит на вопросы и подберёт процедуру индивидуально.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[13px] text-muted-foreground/60 line-through">1 500 ₽</span>
            <span className="bg-gradient-to-r from-copper/15 to-copper-light/10 text-copper text-[11px] font-bold px-3 py-1.5 rounded-pill border border-copper/10">
              Бесплатно при процедуре
            </span>
          </div>

          <button className="w-full bg-forest text-primary-foreground font-bold text-[13px] py-4 rounded-2xl hover:bg-forest-deep transition-all duration-300 active:scale-[0.98] tracking-wide">
            Записаться на консультацию
          </button>

          <div className="mt-6 pt-5 border-t border-foreground/[0.04]">
            <p className="text-[11px] text-muted-foreground mb-3 font-medium">Также в клинике:</p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s} className="text-[11px] text-foreground/60 bg-cream rounded-pill px-3 py-1.5 border border-foreground/[0.04] hover:border-copper/15 transition-colors duration-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ConsultationUpsell;
