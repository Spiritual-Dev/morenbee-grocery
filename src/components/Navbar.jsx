import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ onShopClick }) {
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
          className="flex items-center gap-3"
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

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="hidden md:inline text-sm text-white/90 hover:text-white transition-colors"
          >
            Products
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="hidden md:inline text-sm text-white/90 hover:text-white transition-colors"
          >
            Contact
          </button>

          {/* CTA Button */}
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
      </div>
    </motion.nav>
  );
}
