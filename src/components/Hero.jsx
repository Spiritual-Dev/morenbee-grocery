import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onShopClick }) {
  return (
    <header className="pt-20">
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-morenbeBlue leading-tight">Morenbe Grocery Store</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Quality packaged foodstuffs & household essentials — available for pickup & delivery within Lagos.
          </p>

          <div className="mt-6 flex gap-4">
            <button onClick={onShopClick} className="px-6 py-3 rounded-full bg-morenbeBlue text-white font-semibold shadow-lg hover:brightness-105">
              Shop Now
            </button>
            <a href="#contact" className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium">Contact Us</a>
          </div>

          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li><strong>Address:</strong> 19, Olowora Street, Mafoluku, Oshodi, Lagos.</li>
            <li><strong>Phone:</strong> 08125015031</li>
            <li><strong>Pickup & Delivery:</strong> Available within Lagos</li>
          </ul>
        </motion.div>

        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1400&q=80" alt="grocery shelves" className="w-full h-96 object-cover" />
          </div>
        </motion.div>
      </section>
    </header>
  );
}
