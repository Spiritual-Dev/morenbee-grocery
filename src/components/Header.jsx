import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="w-full bg-gradient-to-r from-green-700 via-lime-600 to-emerald-700 text-white shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-extrabold tracking-wide">🛒 Morenbe Grocery</h1>
      <nav className="flex gap-6">
        <a href="#home" className="hover:text-yellow-300 transition">Home</a>
        <a href="#shop" className="hover:text-yellow-300 transition">Shop</a>
        <a href="#about" className="hover:text-yellow-300 transition">About</a>
        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
      </nav>
    </motion.header>
  );
}
