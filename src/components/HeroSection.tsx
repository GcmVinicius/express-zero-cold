import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-beer.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bebidas geladas" className="h-full w-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>
      <div className="container relative z-10 py-20">
        <p className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-accent">
          Sempre Gelado
        </p>
        <h1 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
          Sua sede não<br />
          <span className="text-accent">pode esperar.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          A conveniência mais completa da região. Bebidas no ponto certo, gelo puro e snacks para qualquer hora.
        </p>
        <Link
          to="/produtos"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Ver Produtos <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
