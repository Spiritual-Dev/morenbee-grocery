import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl p-8 shadow">
        <h3 className="text-2xl font-bold text-morenbeGreen">About Morenbee Grocery</h3>
        <p className="mt-4 text-gray-700">
          Morenbee Grocery Store is dedicated to supplying top-quality sealed & packaged foods — from staple grains like rice and beans to cereals, biscuits, and household essentials.
          We pride ourselves on trusted brands and safe packaging — ready for pickup or delivery in Lagos.
        </p>
      </div>
    </motion.section>
  );
}
