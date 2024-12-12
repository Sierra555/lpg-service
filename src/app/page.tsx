import Header from "./components/header/Header";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Faq from "./sections/FAQ";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Gallery />
        <Faq />
      </main>
   </>
  );
}
