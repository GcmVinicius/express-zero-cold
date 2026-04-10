import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import { categories, products, getWhatsAppLink } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold">Categoria não encontrada</h1>
          <Link to="/produtos" className="mt-4 inline-block text-accent hover:underline">
            Voltar aos produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main className="container pt-24 pb-12">
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{category.name}</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold">{category.name}</h1>
          <p className="mt-2 text-muted-foreground">{category.description}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-accent/20 bg-card p-5 shadow-card transition-colors hover:border-accent/50"
            >
              <h3 className="font-display text-lg font-bold text-card-foreground">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
              <a
                href={getWhatsAppLink(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default CategoryPage;
