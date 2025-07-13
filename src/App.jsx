import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";


function App() {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const { bottom } = heroSection.getBoundingClientRect();
        setShowNavbar(bottom > 100);
      }
    };

    if (!loading) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="bg-black min-h-screen text-white">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar showNavbar={showNavbar} />

          <section id="hero">
            <Hero />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience" className="section">
            <Experience />
          </section>

          <section id="projects" > {/* ✅ Add your new section here */}
            <Projects />
            <section id="translator">
  <Achievements />
</section>
          </section>
          <section id="contact">
  <Contact />
</section>



        </>
      )}
    </div>
  );
}

export default App;
