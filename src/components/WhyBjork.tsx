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
    <AnimatedSection className="py-10 px-5 bg-forest-deep">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-display text-[26px] font-medium text-primary-foreground mb-8">
          Почему BJÖRK
        </h2>

        <div className="space-y-5">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-copper-light" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-primary-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-primary-foreground/60 leading-relaxed">
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
