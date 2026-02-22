import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles } from "lucide-react";

const plans = [
  {
    name: "Лоб + Межбровье",
    price: "12 500",
    zones: "2 зоны",
    featured: false,
  },
  {
    name: "Глаза + Межбровье",
    price: "12 500",
    zones: "2 зоны",
    featured: false,
  },
  {
    name: "Полная коррекция",
    subtitle: "Лоб + Глаза + Межбровье",
    price: "16 900",
    zones: "3 зоны",
    featured: true,
    badge: "Лучшая цена",
  },
];

const PricingCards = () => {
  return (
    <AnimatedSection className="py-10 px-5 bg-cream">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-display text-[26px] font-medium text-foreground mb-3">
          Стоимость процедуры
        </h2>

        <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
          Комплексная коррекция нескольких зон даёт более гармоничный и естественный результат — мышцы работают в&nbsp;связке, и&nbsp;расслабление одной зоны усиливает эффект в&nbsp;соседних.
        </p>

        <div className="space-y-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`relative rounded-xl p-5 border transition-all duration-200 hover:-translate-y-0.5 ${
                plan.featured
                  ? "border-copper/40 bg-sand-light border-[1.5px]"
                  : "border-foreground/[0.06] bg-sand-light"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-5 bg-copper text-accent-foreground text-[11px] font-semibold px-3 py-1 rounded-pill flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </span>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-[13px] text-muted-foreground mt-0.5">{plan.subtitle}</p>
                  )}
                  <span className="text-label text-muted-foreground mt-2 block">{plan.zones}</span>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-display font-medium ${plan.featured ? "text-copper" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground"> ₽</span>
                </div>
              </div>

              <button
                className={`w-full mt-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.featured
                    ? "bg-copper text-accent-foreground shadow-copper-glow hover:bg-copper-light"
                    : "bg-forest text-primary-foreground hover:bg-forest-deep"
                }`}
              >
                Записаться
              </button>

              {plan.featured && (
                <div className="mt-3 flex justify-center">
                  <span className="text-[12px] text-muted-foreground bg-sand rounded-pill px-3 py-1.5 font-medium">
                    Яндекс Сплит — от 4 225 ₽/мес
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PricingCards;
