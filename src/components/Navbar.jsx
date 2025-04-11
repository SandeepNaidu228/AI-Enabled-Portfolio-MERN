import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            learning<span className="text-blue-500">.world</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="w-8 h-8 flex items-center justify-center text-3xl cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#Skills" className="text-gray-300 hover:text-blue-500 transition-colors">Skills</a>
            <a href="#Experience" className="text-gray-300 hover:text-blue-500 transition-colors">Experience</a>
            <a href="#Projects" className="text-gray-300 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#Contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
