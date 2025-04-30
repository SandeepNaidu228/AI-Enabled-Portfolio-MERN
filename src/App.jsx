import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar showNavbar={!loading} />
          <Hero />
          {/* Add other sections here */}
        </>
      )}
    </div>
  );
}

export default App;
