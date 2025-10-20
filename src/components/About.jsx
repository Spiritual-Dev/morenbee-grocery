import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="bg-white rounded-2xl p-8 shadow space-y-6">
        <h3 className="text-2xl font-bold text-morenbeGreen">About Morenbee Grocery</h3>

        <p className="text-gray-700">
          Morenbee Grocery Store is dedicated to supplying top-quality sealed and packaged foods — from staple grains like rice and beans to cereals, biscuits, and household essentials. We pride ourselves on trusted brands, hygienic packaging, and reliable delivery across Lagos.
        </p>

        <p className="text-gray-700">
          Our mission is to make grocery shopping simple, safe, and convenient. Whether you’re stocking up for your home, planning for a small business, or looking for everyday essentials, Morenbee Grocery brings everything closer to your doorstep.
        </p>

        <p className="text-gray-700">
          We focus on variety, affordability, and freshness. From dairy products, cooking essentials, snacks, and beverages to cleaning supplies, we ensure our customers have access to everything they need under one roof — delivered with care and professionalism.
        </p>

        <p className="text-gray-700">
          Customer satisfaction is at the heart of what we do. Our team is committed to providing responsive service, clear communication, and timely deliveries to make your shopping experience seamless. With Morenbee Grocery, quality, convenience, and trust come together.
        </p>

        <p className="text-gray-700">
          Join the growing number of Lagos households who rely on Morenbee Grocery for daily essentials. Fresh products, packaged safely, delivered right to your door — that’s the Morenbee promise.
        </p>
      </div>
    </motion.section>
  );
}
