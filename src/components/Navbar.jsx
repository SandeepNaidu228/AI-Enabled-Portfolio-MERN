import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ showNavbar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      setTimeout(() => {
        setIsExpanded(true);
      }, 500);
    }
  }, [showNavbar]);

  const navLinks = [
    { label: "🛠️ Skills", id: "skills" },
    { label: "📘 Experience", id: "experience" },
    { label: "📋 Projects", id: "projects" },
    { label: "🌐 Certifications", id: "translator" },
    { label: "📞 Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ width: 20, height: 20, borderRadius: 9999 }}
          animate={{
            width: isExpanded ? "auto" : 20,
            height: isExpanded ? 60 : 20,
            borderRadius: 9999,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative h-full flex items-center justify-center rounded-full border-2 border-yellow-400 bg-black/70 shadow-[0_0_25px_#facc15] hover:shadow-[0_0_35px_#facc15,0_0_15px_#facc15] transition-shadow duration-500 px-6 overflow-hidden whitespace-nowrap">

            {/* 🌠 Moving Sparkles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[6px] w-[6px] bg-white rounded-full shadow-[0_0_6px_white] z-0"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ x: "100vw", opacity: [0, 1, 0.5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8 + Math.random() * 4,
                  ease: "linear",
                  delay: Math.random() * 3,
                }}
              />
            ))}

            {/* ✨ Floating Left Badge */}
            <div className="absolute left-[-85px] top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 text-pink-400 text-xs font-semibold">
              Passion
            </div>

            {/* ✨ Floating Right Badge */}
            <div className="absolute right-[-85px] top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 text-xs font-semibold">
              Precision
            </div>

            {/* 🧭 Nav Links */}
            <div className="relative z-20 flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="bg-white/10 backdrop-blur-sm text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-300/10 hover:shadow-[0_0_10px_#facc15] transition text-sm shadow"
                >
                  {link.label}
                </Link>
              ))}

              {/* 🚀 External Chatbot Button */}
              <a
                href="https://t2jfm73mxtjo3d2ghlvenr.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-300/10 hover:shadow-[0_0_10px_#facc15] transition text-sm shadow"
              >
                🚀 Know Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
