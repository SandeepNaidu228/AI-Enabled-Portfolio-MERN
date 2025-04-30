import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ showNavbar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      setTimeout(() => {
        setIsExpanded(true);
      }, 500); // delay after preloader ends
    }
  }, [showNavbar]);

  const navLinks = ["Skills", "Experience", "Projects", "Contact", "Chatbot", "Translator"];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ width: 20, height: 20, borderRadius: 9999 }}
          animate={{
            width: isExpanded ? 500 : 20, // Increased width to 500px
            height: isExpanded ? 60 : 20,
            borderRadius: 9999,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="bg-black border-2 border-yellow-400 backdrop-blur-md shadow-xl flex items-center justify-between gap-6 px-6 py-3 rounded-full">
            {isExpanded &&
              navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-yellow-300 text-sm font-semibold hover:text-white transition"
                >
                  {link}
                </a>
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
