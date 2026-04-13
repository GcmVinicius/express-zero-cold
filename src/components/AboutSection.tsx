import { Store, Truck, Clock, Users, MapPin, Phone } from "lucide-react";
import estabelecimentoImg from "@/assets/estabelecimento.png";

const AboutSection = () => {
  const features = [
    { icon: Store, title: "Conveniência Completa", desc: "Bebidas, gelo, snacks e muito mais em um só lugar." },
    { icon: Truck, title: "Tele-Entrega", desc: "Receba no conforto da sua casa em minutos." },
    { icon: Clock, title: "Horário Estendido", desc: "Abertos até tarde para você não ficar na mão." },
    { icon: Users, title: "Atendimento Nota 10", desc: "Equipe pronta para te atender com o melhor sorriso." },
  ];

  return (
    <section id="quem-somos" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre Nós</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
            Quem Somos
          </h2>
        </div>

        <div className="mt-10 grid gap-10 items-center md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={estabelecimentoImg}
              alt="Fachada da loja Zero Grau - Bebidas & Conveniência"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A <span className="font-bold text-accent">Zero Grau</span> é a conveniência mais completa do Grande Colorado, Brasília - DF.
              Há anos atendendo a região com bebidas sempre geladas, gelo puro e os melhores petiscos.
              Nosso compromisso é com a qualidade, rapidez e o melhor preço da região.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Contamos com <span className="font-semibold">tele-entrega</span> rápida, atendimento em horário estendido e uma equipe sempre pronta para te receber com o melhor sorriso. Venha nos visitar!
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Grande Colorado, Brasília - DF
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                3485-0010
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card transition-transform hover:scale-105"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <f.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-card-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
