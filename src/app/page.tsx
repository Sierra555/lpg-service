import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Faq from "./sections/FAQ";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";

export default function Home() {
  return (
   <main>
    <Hero />
    <Benefits />
    <About />
    <Gallery />
    <Faq />
   </main>
  );
}
