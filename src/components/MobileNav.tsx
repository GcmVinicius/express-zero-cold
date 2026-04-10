import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";

const MobileNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProducts = location.pathname.startsWith("/produtos") || location.pathname.startsWith("/categoria");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-xl md:hidden">
      <div className="flex items-center justify-around py-2">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-4 py-1 text-xs font-medium transition-colors ${
            isHome ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="h-5 w-5" />
          Início
        </Link>
        <Link
          to="/produtos"
          className={`flex flex-col items-center gap-1 px-4 py-1 text-xs font-medium transition-colors ${
            isProducts ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          Produtos
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
