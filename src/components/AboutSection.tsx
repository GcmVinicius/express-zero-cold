import { Store, Truck, Clock, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Store, title: "Conveniência Completa", desc: "Bebidas, gelo, snacks e muito mais em um só lugar." },
    { icon: Truck, title: "Tele-Entrega", desc: "Receba no conforto da sua casa em minutos." },
    { icon: Clock, title: "Horário Estendido", desc: "Abertos até tarde para você não ficar na mão." },
    { icon: Users, title: "Atendimento Nota 10", desc: "Equipe pronta para te atender com o melhor sorriso." },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre Nós</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
            Quem Somos
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A <span className="font-bold text-accent">Zero Grau</span> é a conveniência mais completa do Grande Colorado, Brasília - DF. 
            Há anos atendendo a região com bebidas sempre geladas, gelo puro e os melhores petiscos. 
            Nosso compromisso é com a qualidade, rapidez e o melhor preço da região.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
