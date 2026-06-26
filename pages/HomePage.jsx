import Navbar from "../Navbar";
import Hero from "../Hero";
import WorkSection from "../WorkSection";
import AboutSection from "../AboutSection";
import PrinciplesSection from "../PrinciplesSection";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <div className="mt-24 md:mt-40" />
        <AboutSection />
        <div className="mt-12 md:mt-20" />
        <PrinciplesSection />
      </main>
      <Footer />
    </div>
  );
}
