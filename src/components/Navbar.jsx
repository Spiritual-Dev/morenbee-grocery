import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onShopClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // animation for dropdown items
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 via-morenbeBlue to-blue-500 shadow-lg backdrop-blur-sm border-b border-blue-300/40"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <div className="w-11 h-11 rounded-full bg-white shadow-md text-morenbeBlue flex items-center justify-center font-bold text-xl">
            M
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white tracking-wide">
              Morenbee Grocery
            </h1>
            <p className="text-xs text-blue-100">Packaged foods & essentials</p>
          </div>
        </motion.div>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-5">
          {["About", "Products", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Products") {
                  onShopClick(); // ✅ open full shop modal instead of scroll
                } else {
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 12px rgba(255,255,255,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onShopClick}
            className="px-5 py-2 rounded-full bg-white text-morenbeBlue text-sm font-semibold shadow-lg hover:bg-blue-100 transition-all"
          >
            Shop Now
          </motion.button>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden bg-gradient-to-b from-blue-700 via-morenbeBlue to-blue-600 border-t border-blue-400/30 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-3 text-white">
              {["Home", "About", "Products", "Contact"].map((item, i) => (
                <motion.button
                  key={item}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  onClick={() => {
                    if (item === "Products") {
                      onShopClick(); // ✅ open full shop modal
                    } else {
                      document
                        .getElementById(
                          item === "Home" ? "hero" : item.toLowerCase()
                        )
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                  className="text-sm hover:text-yellow-300 transition"
                >
                  {item}
                </motion.button>
              ))}

              {/* CTA in dropdown */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px rgba(255,255,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={4}
                onClick={() => {
                  onShopClick();
                  closeMenu();
                }}
                className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-morenbeBlue font-semibold px-8 py-2 rounded-full shadow-md transition-all"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
