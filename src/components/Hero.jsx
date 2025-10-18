import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/Images/background.jpg";

export default function Hero({ onShopClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-blue-900/40 to-black/70"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-6 max-w-2xl text-white"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight"
        >
          Fresh, Packaged & Essential Goods at{" "}
          <span className="text-yellow-300">Morenbee Grocery</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-blue-100 mb-8">
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
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md transition-all"
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Soft glow overlay for ambiance */}
      <div className="absolute inset-0 bg-blue-500/10 mix-blend-soft-light"></div>
    </section>
  );
}
