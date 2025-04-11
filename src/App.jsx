import { useState } from "react";
import Navbar from "./components/Navbar";
import Mobile from "./components/mobilemenu";
import Preloader from "./components/Preloader";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Mobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    </>
  );
}

export default App;
