import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-forest-deep px-5 pt-14 pb-10">
      <div className="max-w-[480px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-label text-copper-light mb-6"
        >
          BJÖRK · Медицинская косметология
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display text-[38px] leading-[1.1] font-medium text-primary-foreground mb-4"
        >
          Разгладьте морщины.{" "}
          <span className="text-copper-light italic">Естественно.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-primary-foreground/70 text-base leading-relaxed mb-8 max-w-[340px]"
        >
          Ботулинотерапия препаратом Релатокс — коррекция лба, межбровья и «гусиных лапок» за&nbsp;одну процедуру
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="space-y-3 mb-8"
        >
          <button className="w-full bg-copper text-accent-foreground font-semibold text-[15px] py-4 rounded-lg shadow-copper-glow hover:bg-copper-light transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Записаться онлайн
          </button>
          <button className="w-full border border-primary-foreground/25 text-primary-foreground/80 font-medium text-[15px] py-3.5 rounded-lg hover:border-primary-foreground/40 hover:text-primary-foreground transition-all duration-200">
            Узнать стоимость
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex items-center gap-4 text-primary-foreground/50 text-[13px]"
        >
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            Мед. лицензия
          </span>
          <span className="w-px h-3 bg-primary-foreground/20" />
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-copper" />
            5.0 · 200+ отзывов
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
