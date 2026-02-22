import AnimatedSection from "./AnimatedSection";
import { Send, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <AnimatedSection className="py-12 px-5 bg-forest-deep">
      <div className="max-w-[480px] mx-auto text-center">
        <h2 className="font-display text-[28px] font-medium text-primary-foreground mb-3">
          Верните коже гладкость
        </h2>
        <p className="text-[15px] text-primary-foreground/60 mb-8">
          Запишитесь онлайн или напишите в Telegram
        </p>

        <div className="space-y-3 mb-8">
          <button className="w-full bg-copper text-accent-foreground font-semibold text-[15px] py-4 rounded-lg shadow-copper-glow hover:bg-copper-light transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Записаться онлайн
          </button>
          <button className="w-full bg-[#2AABEE] text-white font-semibold text-[15px] py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#229ED9] transition-all duration-200">
            <Send className="w-4 h-4" />
            Написать в Telegram
          </button>
        </div>

        <a href="tel:+74951234567" className="inline-flex items-center gap-2 text-primary-foreground text-lg font-medium hover:text-copper-light transition-colors">
          <Phone className="w-4 h-4" />
          +7 (495) 123-45-67
        </a>

        <div className="mt-6 text-[13px] text-primary-foreground/40 space-y-1">
          <p>Москва, ЖК «Скандинавия», ул. Примерная, 12</p>
          <p>Ежедневно 10:00–21:00</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTA;
