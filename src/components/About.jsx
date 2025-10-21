import React from "react";
import { motion } from "framer-motion";

export default function About({ onOpenModal }) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="bg-white rounded-2xl p-8 shadow text-center">
        <h3 className="text-2xl font-bold text-morenbeGreen">
          About Morenbee Grocery
        </h3>

        <p className="mt-4 text-gray-700">
          Morenbee Grocery Store is dedicated to supplying top-quality sealed &
          packaged foods — from staple grains like rice and beans to cereals,
          biscuits, and household essentials. We pride ourselves on trusted
          brands and safe packaging — ready for pickup or delivery in Lagos.
        </p>

        <motion.button
          onClick={onOpenModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 px-6 py-2 bg-morenbeBlue text-white rounded-full font-semibold shadow-md hover:bg-blue-800 transition"
        >
          Read More →
        </motion.button>
      </div>
    </motion.section>
  );
}
