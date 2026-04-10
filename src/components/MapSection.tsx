import { MapPin, Phone } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Localização</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
              Peça agora e receba em minutos.
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Estamos aqui:</p>
                  <p className="text-sm text-muted-foreground">Grande Colorado, Brasília - DF</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Ligue agora:</p>
                  <p className="text-sm text-muted-foreground">3485-0010</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Grande+Colorado+Brasilia+DF"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-xl shadow-card border border-accent/20">
            <iframe
              title="Localização Zero Grau"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.0!2d-47.7!3d-15.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33f0bfc2c0c7%3A0x5e1e1e1e1e1e1e1e!2sGrande%20Colorado%2C%20Sobradinho%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
