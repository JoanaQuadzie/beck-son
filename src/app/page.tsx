import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Categories from "@/components/ui/categories";
import About from "@/components/ui/about";
import Faq from "@/components/ui/faq";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}
