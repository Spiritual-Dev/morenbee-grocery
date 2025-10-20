import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImg from "../assets/Images/background.jpg"; // modal background

const PRODUCTS = [
  { id: 1, name: "Kullikulli", img: "/src/assets/images/Kullikulli.jpg" },
  { id: 2, name: "Measured sugar", img: "/src/assets/images/sugar.jpg" },
  { id: 3, name: "Crates of Egg", img: "/src/assets/images/eggs.jpg" },
  { id: 4, name: "Bags of rice", img: "/src/assets/images/rice.jpg" },
  { id: 5, name: "Lactorich milk", img: "/src/assets/images/lactorich.jpg" },
  { id: 6, name: "Paints of garri", img: "/src/assets/images/garri.jpg" },
  { id: 7, name: "Classic peanuts", img: "/src/assets/images/peanuts.jpg" },
  { id: 8, name: "Burger peanut", img: "/src/assets/images/burgerpeanut.jpg" },
  { id: 9, name: "Cowbell chocolate", img: "/src/assets/images/cowbellchoco.jpg" },
  { id: 10, name: "Viva bar soap", img: "/src/assets/images/vivabarsoap.jpg" },
  { id: 11, name: "Viva detergent small", img: "/src/assets/images/vivadetergentsmall.jpg" },
  { id: 12, name: "Viva detergent big", img: "/src/assets/images/vivadetergentbig.jpg" },
  { id: 13, name: "Magik detergent small", img: "/src/assets/images/magiksmall.jpg" },
  { id: 14, name: "Magik detergent medium", img: "/src/assets/images/magikmedium.jpg" },
  { id: 15, name: "Magik detergent big", img: "/src/assets/images/magikbig.jpg" },
  { id: 16, name: "Good mama big", img: "/src/assets/images/goodmamabig.jpg" },
  { id: 17, name: "Good mama detergent medium", img: "/src/assets/images/goodmamamedium.jpg" },
  { id: 18, name: "Good mama detergent small", img: "/src/assets/images/goodmamasmall.jpg" },
  { id: 19, name: "Hypo", img: "/src/assets/images/hypo.jpg" },
  { id: 20, name: "Top cafe", img: "/src/assets/images/topcafe.jpg" },
  { id: 21, name: "Rafa detergent", img: "/src/assets/images/rafa.jpg" },
  { id: 22, name: "Peak milk", img: "/src/assets/images/peakmilk.jpg" },
  { id: 23, name: "Cremela", img: "/src/assets/images/cremela.jpg" },
  { id: 24, name: "Good time", img: "/src/assets/images/goodtime.jpg" },
  { id: 25, name: "Choco Robo", img: "/src/assets/images/chocorobo.jpg" },
  { id: 26, name: "Paints of beans", img: "/src/assets/images/beans.jpg" },
  { id: 27, name: "3 crown milk sachet", img: "/src/assets/images/3crown.jpg" },
  { id: 28, name: "Loyal milk", img: "/src/assets/images/loyalmilk.jpg" },
  { id: 31, name: "Top tea", img: "/src/assets/images/toptea.jpg" },
  { id: 35, name: "Corn snack", img: "/src/assets/images/cornsnack.jpg" },
  { id: 36, name: "Strawberry", img: "/src/assets/images/strawberry.jpg" },
  { id: 38, name: "Sweet bite chi chin", img: "/src/assets/images/chinchin.jpg" },
  { id: 39, name: "Klin detergent medium", img: "/src/assets/images/klinmedium.jpg" },
  { id: 42, name: "Crunchy chinchin", img: "/src/assets/images/crunchychinchin.jpg" },
  { id: 44, name: "Cowbell coffee", img: "/src/assets/images/cowbellcoffee.jpg" },
  { id: 45, name: "Dano milk", img: "/src/assets/images/danomilk.jpg" },
  { id: 46, name: "Blue cracker", img: "/src/assets/images/bluecracker.jpg" },
  { id: 47, name: "Tomato paste", img: "/src/assets/images/tomato.jpg" },
  { id: 48, name: "Spaghetti", img: "/src/assets/images/spaghetti.jpg" },
  { id: 49, name: "Yellow cracker", img: "/src/assets/images/yellowcracker.jpg" },
  { id: 50, name: "Air freshener", img: "/src/assets/images/airfreshener.jpg" },
  { id: 51, name: "Coastal biscuits", img: "/src/assets/images/coastalbiscuits.jpg" },
  { id: 52, name: "Wakana", img: "/src/assets/images/wakana.jpg" },
  { id: 53, name: "Family choco", img: "/src/assets/images/familychoco.jpg" },
];

export default function ShopModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Modal Container */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 overflow-y-auto max-h-[90vh] z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-5 rounded-t-3xl text-center border-b">
              <h2 className="text-2xl md:text-3xl font-bold text-morenbeBlue">🛒 Morenbee Grocery Shop</h2>
              <p className="text-gray-600 text-sm md:text-base">Pick your favorite items below</p>
            </div>

            {/* Product Grid */}
            <div className="p-4 sm:p-6 md:p-8 grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {PRODUCTS.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border border-gray-100"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{product.name}</h3>
                    <button className="mt-3 w-full py-2 bg-morenbeBlue text-white rounded-full text-sm sm:text-base font-semibold hover:bg-blue-800 transition">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
