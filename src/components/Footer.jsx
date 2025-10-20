import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-white py-6 bg-gradient-to-r from-blue-700 via-blue-800 to-morenbeBlue shadow-inner"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Brand Section */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h2 className="text-xl md:text-2xl font-bold mb-1">Morenbee Grocery</h2>
          <p className="text-xs md:text-sm text-blue-100">
            Quality packaged foods, essentials, and household items delivered fresh.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h3 className="font-semibold mb-2 text-blue-100 uppercase text-xs md:text-sm tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-1 text-xs md:text-sm">
            <li>
              <a href="#products" className="hover:underline text-blue-100">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-blue-100">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="font-semibold mb-2 text-blue-100 uppercase text-xs md:text-sm tracking-wide">
            Connect
          </h3>
          <div className="flex justify-center md:justify-start gap-3">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-blue-200">
              <Facebook size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-blue-200">
              <Instagram size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-blue-200">
              <Twitter size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 text-center text-xs md:text-sm text-blue-200 border-t border-blue-500/30 pt-3">
        © {new Date().getFullYear()} Morenbee Grocery. All rights reserved.
      </div>
    </motion.footer>
  );
}
