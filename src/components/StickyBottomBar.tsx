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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div
            className="backdrop-blur-xl bg-cream/80 border-t border-foreground/[0.06]"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <div className="max-w-[480px] mx-auto flex items-center justify-around h-[68px] px-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-1 text-forest hover:text-copper transition-colors px-3 py-1"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
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
