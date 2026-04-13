import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand + About */}
          <div className="space-y-4">
            <span
              className="text-2xl font-black uppercase tracking-tight text-blue"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                letterSpacing: '1px',
                WebkitTextStroke: '2px white',
                paintOrder: 'stroke fill',
              }}
            >
              ZERO GRAU
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua conveniência express no Grande Colorado, Brasília - DF. Bebidas geladas, petiscos e muito mais!
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Clock size={20} className="text-accent" />
              Horário de Funcionamento
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="font-semibold text-foreground">08:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="font-semibold text-foreground">08:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo e Feriados</span>
                <span className="font-semibold text-foreground">09:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="https://maps.google.com/?q=Grande+Colorado+Brasilia+DF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-foreground"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>Grande Colorado, Brasília - DF</span>
              </a>
              <a
                href="tel:+556134850010"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone size={18} className="shrink-0 text-accent" />
                <span>(61) 3485-0010</span>
              </a>
              <a
                href="https://wa.me/5561934850010"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-blue-foreground transition-transform hover:scale-105"
              >
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zero Grau Conveniência Express. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
