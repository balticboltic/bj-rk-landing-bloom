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
    <AnimatedSection className="py-14 px-6 bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-copper/[0.04] blur-3xl" />

      <div className="max-w-[480px] mx-auto">
        <p className="text-label text-copper mb-3">Цены</p>
        <h2 className="font-display text-[30px] text-foreground mb-4 leading-[1.1]">
          Стоимость процедуры
        </h2>

        <p className="text-[14px] text-muted-foreground leading-relaxed mb-10 max-w-[340px]">
          Комплексная коррекция нескольких зон даёт более гармоничный результат — мышцы работают в&nbsp;связке.
        </p>

        <div className="space-y-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative rounded-3xl p-6 transition-all duration-300 group ${
                plan.featured
                  ? "bg-forest-deep grain overflow-hidden"
                  : "bg-sand-light border border-foreground/[0.04] hover:border-copper/15"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-copper to-copper-light text-accent-foreground text-[10px] font-bold px-4 py-1.5 rounded-pill flex items-center gap-1.5 shadow-copper-glow">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </span>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`font-display text-xl ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className={`text-[12px] mt-1 ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      {plan.subtitle}
                    </p>
                  )}
                  <span className={`text-label mt-3 block ${plan.featured ? "text-copper-light" : "text-muted-foreground"}`}>
                    {plan.zones}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`text-[28px] font-display ${plan.featured ? "text-copper-gradient" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[13px] ml-1 ${plan.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>₽</span>
                </div>
              </div>

              <button
                className={`w-full mt-5 py-3.5 rounded-2xl text-[13px] font-bold tracking-wide transition-all duration-300 active:scale-[0.98] ${
                  plan.featured
                    ? "bg-gradient-to-r from-copper to-copper-light text-accent-foreground shadow-copper-glow hover:shadow-[0_12px_40px_-4px_hsl(var(--copper)/0.6)]"
                    : "bg-forest text-primary-foreground hover:bg-forest-deep"
                }`}
              >
                Записаться
              </button>

              {plan.featured && (
                <div className="mt-4 flex justify-center">
                  <span className="text-[11px] text-primary-foreground/40 bg-primary-foreground/[0.06] backdrop-blur-sm rounded-pill px-4 py-2 font-medium">
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
