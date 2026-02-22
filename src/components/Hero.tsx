import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-forest-deep overflow-hidden grain min-h-[100svh] flex flex-col justify-end">
      {/* Large decorative copper circle */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-copper/[0.07] blur-3xl" />
      <div className="absolute top-1/3 -left-10 w-40 h-40 rounded-full bg-copper/[0.05] blur-2xl" />

      {/* Oversized decorative letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-8 right-4 font-display text-[180px] leading-none text-primary-foreground select-none pointer-events-none"
      >
        B
      </motion.div>

      <div className="px-6 pb-12 pt-24 max-w-[480px] mx-auto w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="editorial-divider mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-label text-copper-light mb-5"
        >
          BJÖRK · Медицинская косметология
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-[44px] leading-[1.05] text-primary-foreground mb-2"
        >
          Разгладьте
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-display text-[44px] leading-[1.05] mb-6"
        >
          <span className="text-copper-gradient italic">морщины</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-primary-foreground/60 text-[15px] leading-relaxed mb-10 max-w-[300px]"
        >
          Ботулинотерапия Релатокс — коррекция лба, межбровья и «гусиных лапок» за&nbsp;одну процедуру
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="space-y-3 mb-10"
        >
          <button className="group w-full relative overflow-hidden bg-gradient-to-r from-copper to-copper-light text-accent-foreground font-semibold text-[15px] py-4.5 rounded-2xl shadow-copper-glow transition-all duration-300 hover:shadow-[0_12px_40px_-4px_hsl(var(--copper)/0.6)] active:scale-[0.98]">
            <span className="relative z-10">Записаться онлайн</span>
            <div className="absolute inset-0 bg-gradient-to-r from-copper-light to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="w-full border border-primary-foreground/15 text-primary-foreground/70 font-medium text-[15px] py-4 rounded-2xl hover:border-copper/40 hover:text-copper-light transition-all duration-300 backdrop-blur-sm">
            Узнать стоимость
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center gap-5 text-primary-foreground/40 text-[12px]"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-copper/60" />
            Мед. лицензия
          </span>
          <span className="w-4 h-px bg-copper/30" />
          <span className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-copper/60" />
            5.0 · 200+ отзывов
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
