import { Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="max-w-md mx-auto space-y-4">
          <h3 className="flex items-center justify-center gap-2 text-lg font-bold text-foreground">
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

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zero Grau Conveniência Express. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
