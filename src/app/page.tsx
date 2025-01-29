import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Categories from "@/components/ui/categories";
import About from "@/components/ui/about";
import Faq from "@/components/ui/faq";
import Partners from "@/components/ui/partners";
import Customers from "@/components/ui/customers";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <About /> */}
      <Categories />
      <Faq />
      <Partners />
      <Customers />
      <Footer />
    </div>
  );
}
