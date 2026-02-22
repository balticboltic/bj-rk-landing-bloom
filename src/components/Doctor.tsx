import AnimatedSection from "./AnimatedSection";
import { Award, Calendar } from "lucide-react";

const certificates = Array.from({ length: 5 }, (_, i) => `Сертификат ${i + 1}`);

const Doctor = () => {
  return (
    <AnimatedSection className="py-10 px-5 bg-sand-light">
      <div className="max-w-[480px] mx-auto">
        <div className="flex flex-col items-center text-center mb-6">
          {/* Doctor photo placeholder */}
          <div className="w-48 h-56 rounded-2xl bg-sand border border-foreground/[0.06] shadow-doctor mb-5 flex items-center justify-center">
            <span className="text-label text-muted-foreground">Фото врача</span>
          </div>

          <h2 className="font-display text-[26px] font-medium text-foreground">
            Елена Иванова
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            Врач-косметолог, дерматовенеролог
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-cream rounded-xl p-4 border border-foreground/[0.06] text-center">
            <Calendar className="w-5 h-5 text-copper mx-auto mb-2" />
            <span className="block text-2xl font-display font-medium text-forest">16+</span>
            <span className="text-[12px] text-muted-foreground">лет опыта</span>
          </div>
          <div className="bg-cream rounded-xl p-4 border border-foreground/[0.06] text-center">
            <Award className="w-5 h-5 text-copper mx-auto mb-2" />
            <span className="block text-2xl font-display font-medium text-forest">15+</span>
            <span className="text-[12px] text-muted-foreground">сертификатов</span>
          </div>
        </div>

        {/* Certificate thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5" style={{ scrollbarWidth: 'none' }}>
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="min-w-[80px] h-[110px] rounded-lg bg-sand border border-foreground/[0.06] flex items-center justify-center shrink-0"
            >
              <span className="text-[10px] text-muted-foreground text-center px-1">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Doctor;
