const Footer = () => {
  return (
    <footer className="py-8 px-5 bg-forest-deep border-t border-primary-foreground/5">
      <div className="max-w-[480px] mx-auto text-center">
        <p className="font-display text-lg text-primary-foreground/60 mb-3">BJÖRK</p>
        <div className="text-[11px] text-primary-foreground/30 space-y-1">
          <p>ООО «БЬОРК» · ИНН 7700000000</p>
          <p>Лицензия № ЛО-77-01-000000 от 01.01.2024</p>
          <p>Москва, ул. Примерная, 12</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
