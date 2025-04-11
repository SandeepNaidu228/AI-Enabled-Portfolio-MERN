const Mobile = ({ menuOpen, setMenuOpen }) => {
    return (
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center text-white text-xl space-y-8
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        >
          &times;
        </button>
  
        <a href="#Skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    );
  };
  
  export default Mobile;
  