import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onShopClick }) {
  return (
    <section
      id="hero"
      aria-label="Hero section with shop button and tagline"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Hero Content (no background here anymore) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full text-white"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-snug sm:leading-tight md:leading-tight"
        >
          <span className="sr-only">Welcome to</span>
          Fresh, Packaged & Essential Goods at{" "}
          <span className="text-yellow-300">Morenbee Grocery</span>
        </motion.h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed sm:leading-relaxed md:leading-relaxed"
          aria-label="Introductory description"
        >
          From rice to milk, biscuits to detergents — we bring quality home
          essentials closer to you.
        </p>

        {/* Shop Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onShopClick}
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md text-sm sm:text-base md:text-lg transition-all focus:outline-none focus:ring-4 focus:ring-yellow-400/70"
          aria-label="Open the shop section"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
}
