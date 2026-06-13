import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Sobre from "@/components/portfolio/Sobre";
import Projetos from "@/components/portfolio/Projetos";
import Contato from "@/components/portfolio/Contato";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
