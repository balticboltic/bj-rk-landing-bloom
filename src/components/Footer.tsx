const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-forest-deep border-t border-primary-foreground/[0.04]">
      <div className="max-w-[480px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="editorial-divider" />
          <p className="font-display text-xl text-primary-foreground/50 italic">BJÖRK</p>
        </div>
        <div className="text-[10px] text-primary-foreground/25 space-y-1 leading-relaxed">
          <p>ООО «БЬОРК» · ИНН 7700000000</p>
          <p>Лицензия № ЛО-77-01-000000 от 01.01.2024</p>
          <p>Москва, ул. Примерная, 12</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
