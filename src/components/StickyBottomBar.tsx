import { useEffect, useState } from "react";
import { Calendar, Phone, Send, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { icon: Calendar, label: "Запись", href: "#" },
    { icon: Phone, label: "Звонок", href: "tel:+74951234567" },
    { icon: Send, label: "Telegram", href: "#" },
    { icon: MapPin, label: "Карта", href: "#" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div
            className="backdrop-blur-2xl bg-cream/70 border-t border-copper/10"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <div className="max-w-[480px] mx-auto flex items-center justify-around h-[68px] px-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-1.5 text-forest hover:text-copper transition-colors duration-200 px-4 py-1 group"
                >
                  <item.icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-[9px] font-bold tracking-wider uppercase">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBottomBar;
