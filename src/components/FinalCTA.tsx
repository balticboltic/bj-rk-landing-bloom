import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <AnimatedSection className="py-16 px-6 bg-forest-deep relative grain overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-copper/[0.05] blur-3xl" />

      <div className="max-w-[480px] mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-divider mb-8 origin-left"
        />

        <h2 className="font-display text-[34px] text-primary-foreground mb-3 leading-[1.1]">
          Верните коже<br />
          <span className="text-copper-gradient italic">гладкость</span>
        </h2>
        <p className="text-[14px] text-primary-foreground/45 mb-10">
          Запишитесь онлайн или напишите в Telegram
        </p>

        <div className="space-y-3 mb-10">
          <button className="group w-full relative overflow-hidden bg-gradient-to-r from-copper to-copper-light text-accent-foreground font-bold text-[14px] py-4.5 rounded-2xl shadow-copper-glow transition-all duration-300 hover:shadow-[0_12px_40px_-4px_hsl(var(--copper)/0.6)] active:scale-[0.98] tracking-wide">
            <span className="relative z-10">Записаться онлайн</span>
            <div className="absolute inset-0 bg-gradient-to-r from-copper-light to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="w-full bg-[#2AABEE]/90 backdrop-blur-sm text-accent-foreground font-bold text-[14px] py-4 rounded-2xl flex items-center justify-center gap-2.5 hover:bg-[#229ED9] transition-all duration-300 tracking-wide">
            <Send className="w-4 h-4" />
            Написать в Telegram
          </button>
        </div>

        <a href="tel:+74951234567" className="inline-flex items-center gap-2.5 text-primary-foreground text-lg font-display hover:text-copper-light transition-colors duration-200">
          <Phone className="w-4 h-4 text-copper/60" />
          +7 (495) 123-45-67
        </a>

        <div className="mt-8 text-[12px] text-primary-foreground/30 space-y-1.5">
          <p>Москва, ЖК «Скандинавия», ул. Примерная, 12</p>
          <p>Ежедневно 10:00–21:00</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTA;
