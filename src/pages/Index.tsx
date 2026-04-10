import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import MapSection from "@/components/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <CategoriesGrid />
        <MapSection />
      </main>
      <MobileNav />
    </div>
  );
};

export default Index;
