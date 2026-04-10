import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import { categories } from "@/data/products";
import cervejasImg from "@/assets/cervejas.jpg";
import destiladosImg from "@/assets/destilados.jpg";
import refrigerantesImg from "@/assets/refrigerantes.jpg";
import geloImg from "@/assets/gelo.jpg";
import snacksImg from "@/assets/snacks.jpg";
import sucosAguasImg from "@/assets/sucos-aguas.jpg";

const imageMap: Record<string, string> = {
  cervejas: cervejasImg,
  destilados: destiladosImg,
  refrigerantes: refrigerantesImg,
  gelo: geloImg,
  snacks: snacksImg,
  "sucos-aguas": sucosAguasImg,
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main className="container pt-24 pb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Explore</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">Todos os Produtos</h1>
        <p className="mt-3 text-muted-foreground">Escolha uma categoria para ver os produtos disponíveis.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categoria/${cat.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-card transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imageMap[cat.image]}
                  alt={cat.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Products;
