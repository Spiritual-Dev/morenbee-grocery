import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/Images/background.jpg"; // main background for products

const local = (filename) => {
  try {
    return new URL(`../assets/Images/${filename}`, import.meta.url).href;
  } catch (err) {
    return null;
  }
};

const PRODUCTS = [
  { id: 1, name: "Kullikulli", localImg: local("kullikulli.jpg"), fallback: "https://source.unsplash.com/600x600/?kuli-kuli,peanut" },
  { id: 2, name: "Measured sugar", localImg: local("measured-sugar.jpg"), fallback: "https://source.unsplash.com/600x600/?sugar" },
  { id: 3, name: "Crates of Egg", localImg: local("crates-of-egg.jpg"), fallback: "https://source.unsplash.com/600x600/?eggs,crate" },
  { id: 4, name: "Bags of rice", localImg: local("bags-of-rice.jpg"), fallback: "https://source.unsplash.com/600x600/?rice,bag" },
  { id: 5, name: "Lactorich milk", localImg: local("lactorich-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?milk,sachet" },
  { id: 6, name: "Paints of garri", localImg: local("paints-of-garri.jpg"), fallback: "https://source.unsplash.com/600x600/?garri" },
  { id: 7, name: "Classic peanuts", localImg: local("classic-peanuts.jpg"), fallback: "https://source.unsplash.com/600x600/?peanuts" },
  { id: 8, name: "Burger peanut", localImg: local("burger-peanut.jpg"), fallback: "https://source.unsplash.com/600x600/?peanut,butter" },
  { id: 9, name: "Cowbell chocolate", localImg: local("cowbell-chocolate.jpg"), fallback: "https://source.unsplash.com/600x600/?chocolate" },
  { id: 10, name: "Viva bar soap", localImg: local("viva-bar-soap.jpg"), fallback: "https://source.unsplash.com/600x600/?soap,bar" },
  { id: 11, name: "Viva detergent small", localImg: local("viva-detergent-small.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent" },
  { id: 12, name: "Viva detergent big", localImg: local("viva-detergent-big.jpg"), fallback: "https://source.unsplash.com/600x600/?laundry,detergent" },
];

export default function ProductGrid({ onShopClick }) {
  return (
    <section
      id="products"
      className="relative py-12 px-4 sm:px-6 lg:px-10 xl:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-morenbeBlue mb-4 md:mb-0">
            Products
          </h2>
          <button
            onClick={onShopClick}
            className="px-5 py-2.5 bg-morenbeBlue text-white rounded-full font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Open Shop
          </button>
        </div>

        {/* Product grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {PRODUCTS.map((p) => {
            const imgSrc = p.localImg ?? p.fallback;
            return (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                <img
                  src={imgSrc}
                  alt={p.name}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover"
                />
                <div className="p-3 sm:p-4 flex-grow flex items-center justify-center">
                  <h3 className="text-sm sm:text-base font-semibold text-center text-gray-800">
                    {p.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button at bottom */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onShopClick}
            className="px-8 py-3 bg-morenbeBlue text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
