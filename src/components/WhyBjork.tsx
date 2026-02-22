import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle, Heart, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Медицинская лицензия",
    desc: "Все процедуры — в лицензированном медицинском кабинете",
  },
  {
    icon: CheckCircle,
    title: "Сертифицированный препарат",
    desc: "Релатокс — российский ботулотоксин с доказанной эффективностью",
  },
  {
    icon: Heart,
    title: "Клиника рядом с домом",
    desc: "Удобная локация в ЖК — без пробок и долгой дороги",
  },
  {
    icon: CreditCard,
    title: "Рассрочка без переплат",
    desc: "Яндекс Сплит — разделите оплату на 4 части",
  },
];

const WhyBjork = () => {
  return (
    <AnimatedSection className="py-14 px-6 bg-forest-deep relative grain overflow-hidden">
      {/* Decorative organic shape */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-copper/[0.06] blur-3xl" />

      <div className="max-w-[480px] mx-auto">
        <div className="editorial-divider mb-6" />
        <h2 className="font-display text-[30px] text-primary-foreground mb-10 leading-[1.1]">
          Почему BJÖRK
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-5 items-start p-4 rounded-2xl bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/[0.06] hover:border-copper/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-copper/25 to-copper/10 flex items-center justify-center shrink-0 group-hover:from-copper/35 group-hover:to-copper/15 transition-all duration-300">
                <item.icon className="w-5 h-5 text-copper-light" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-primary-foreground mb-1.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[13px] text-primary-foreground/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyBjork;
