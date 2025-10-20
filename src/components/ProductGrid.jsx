import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/Images/background.jpg"; // Hero background continuity

const local = (filename) => {
  try {
    return new URL(`../assets/Images/${filename}`, import.meta.url).href;
  } catch {
    return null;
  }
};

// All products (for ShopModal, but we’ll only show a few here)
const PRODUCTS = [
  { id: 1, name: "Kullikulli", localImg: local("kullikulli.jpg"), fallback: "https://source.unsplash.com/600x600/?kuli-kuli,peanut" },
  { id: 2, name: "Measured sugar", localImg: local("measured-sugar.jpg"), fallback: "https://source.unsplash.com/600x600/?sugar" },
  { id: 3, name: "Crates of Egg", localImg: local("crates-of-egg.jpg"), fallback: "https://source.unsplash.com/600x600/?eggs,crate" },
  { id: 4, name: "Bags of rice", localImg: local("bags-of-rice.jpg"), fallback: "https://source.unsplash.com/600x600/?rice,bag" },
  { id: 5, name: "Lactorich milk", localImg: local("lactorich-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?milk,sachet" },
  { id: 6, name: "Paints of garri", localImg: local("paints-of-garri.jpg"), fallback: "https://source.unsplash.com/600x600/?garri" },
];

export default function ProductGrid({ onShopClick }) {
  // Show only first 4 for homepage
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section
      id="products"
      className="relative py-14 px-4 sm:px-6 lg:px-10 xl:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay to maintain readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-morenbeBlue mb-4 md:mb-0">
            Featured Products
          </h2>
          <button
            onClick={onShopClick}
            className="px-5 py-2.5 bg-morenbeBlue text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow"
          >
            Visit Full Shop
          </button>
        </div>

        {/* Product grid (show only 4 items) */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => {
            const imgSrc = p.localImg ?? p.fallback;
            return (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <img
                  src={imgSrc}
                  alt={p.name}
                  className="w-full h-44 sm:h-48 object-cover"
                />
                <div className="p-4 flex-grow flex items-center justify-center">
                  <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800">
                    {p.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA button at bottom */}
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShopClick}
            className="px-8 py-3 bg-gradient-to-r from-morenbeBlue to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-morenbeBlue transition-all"
          >
            View More Products
          </motion.button>
        </div>
      </div>
    </section>
  );
}
