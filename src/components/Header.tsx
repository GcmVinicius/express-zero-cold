import { Link } from "react-router-dom";
import { Snowflake } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Snowflake className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-extrabold text-foreground">Zero Grau</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Início
          </Link>
          <Link to="/produtos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Produtos
          </Link>
        </nav>
        <a
          href="https://wa.me/5561934850010"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gradient-frost px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
