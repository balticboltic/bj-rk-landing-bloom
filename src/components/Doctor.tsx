import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Calendar } from "lucide-react";

const certificates = Array.from({ length: 5 }, (_, i) => `Сертификат ${i + 1}`);

const Doctor = () => {
  return (
    <AnimatedSection className="py-14 px-6 bg-sand-light relative overflow-hidden">
      {/* Asymmetric copper accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-[480px] mx-auto">
        <p className="text-label text-copper mb-3">Врач</p>

        {/* Asymmetric layout: photo offset */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[4/5] rounded-3xl bg-sand border border-foreground/[0.04] shadow-doctor overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-label text-muted-foreground/40">Фото врача</span>
            </div>
          </motion.div>

          {/* Overlapping name card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-6 left-4 right-4 bg-cream/90 backdrop-blur-xl rounded-2xl p-5 border border-foreground/[0.04] shadow-glass"
          >
            <h2 className="font-display text-[24px] text-foreground leading-tight">
              Елена Иванова
            </h2>
            <p className="text-[13px] text-muted-foreground mt-1">
              Врач-косметолог, дерматовенеролог
            </p>
          </motion.div>
        </div>

        {/* Stats with copper accent */}
        <div className="grid grid-cols-2 gap-3 mt-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-cream rounded-2xl p-5 border border-foreground/[0.04] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper to-copper-light" />
            <Calendar className="w-5 h-5 text-copper mx-auto mb-3" />
            <span className="block text-[32px] font-display text-forest leading-none">16+</span>
            <span className="text-[11px] text-muted-foreground mt-2 block">лет опыта</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-cream rounded-2xl p-5 border border-foreground/[0.04] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper-light to-copper" />
            <Award className="w-5 h-5 text-copper mx-auto mb-3" />
            <span className="block text-[32px] font-display text-forest leading-none">15+</span>
            <span className="text-[11px] text-muted-foreground mt-2 block">сертификатов</span>
          </motion.div>
        </div>

        {/* Certificate thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6" style={{ scrollbarWidth: 'none' }}>
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="min-w-[72px] h-[100px] rounded-xl bg-sand border border-foreground/[0.04] flex items-center justify-center shrink-0 hover:border-copper/20 transition-colors duration-300"
            >
              <span className="text-[9px] text-muted-foreground/60 text-center px-1">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Doctor;
