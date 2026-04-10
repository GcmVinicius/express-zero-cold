import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent/30 bg-accent">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black uppercase tracking-tight text-blue" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: '1px' }}>
            ZERO GRAU
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-semibold text-accent-foreground/70 transition-colors hover:text-accent-foreground">
            Início
          </Link>
          <a href="#quem-somos" className="text-sm font-semibold text-accent-foreground/70 transition-colors hover:text-accent-foreground">
            Quem Somos
          </a>
          <Link to="/produtos" className="text-sm font-semibold text-accent-foreground/70 transition-colors hover:text-accent-foreground">
            Produtos
          </Link>
        </nav>
        <a
          href="https://wa.me/5561934850010"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-blue-foreground transition-transform hover:scale-105"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
