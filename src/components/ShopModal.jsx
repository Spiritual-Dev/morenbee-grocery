import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImg from "../assets/images/background.jpg"; // optional: you can use this for modal background

// ✅ Shared product data (same as ProductGrid)
const PRODUCTS = [
  { id: 1, name: "Kullikulli", price: "₦500", img: "/src/assets/images/Kullikulli.jpg" },
  { id: 2, name: "Measured sugar", price: "₦900", img: "/src/assets/images/sugar.jpg" },
  { id: 3, name: "Crates of Egg", price: "₦6,000", img: "/src/assets/images/eggs.jpg" },
  { id: 4, name: "Bags of rice", price: "₦25,000", img: "/src/assets/images/rice.jpg" },
  { id: 5, name: "Lactorich milk", price: "₦750", img: "/src/assets/images/lactorich.jpg" },
  { id: 6, name: "Paints of garri", price: "₦1,200", img: "/src/assets/images/garri.jpg" },
  { id: 7, name: "Classic peanuts", price: "₦800", img: "/src/assets/images/peanuts.jpg" },
  { id: 8, name: "Burger peanut", price: "₦700", img: "/src/assets/images/burgerpeanut.jpg" },
  { id: 9, name: "Cowbell chocolate", price: "₦500", img: "/src/assets/images/cowbellchoco.jpg" },
  { id: 10, name: "Viva bar soap", price: "₦350", img: "/src/assets/images/vivabarsoap.jpg" },
  { id: 11, name: "Viva detergent small", price: "₦450", img: "/src/assets/images/vivadetergentsmall.jpg" },
  { id: 12, name: "Viva detergent big", price: "₦900", img: "/src/assets/images/vivadetergentbig.jpg" },
  { id: 13, name: "Magik detergent small", price: "₦400", img: "/src/assets/images/magiksmall.jpg" },
  { id: 14, name: "Magik detergent medium", price: "₦700", img: "/src/assets/images/magikmedium.jpg" },
  { id: 15, name: "Magik detergent big", price: "₦1,200", img: "/src/assets/images/magikbig.jpg" },
  { id: 16, name: "Good mama big", price: "₦1,000", img: "/src/assets/images/goodmamabig.jpg" },
  { id: 17, name: "Good mama detergent medium", price: "₦650", img: "/src/assets/images/goodmamamedium.jpg" },
  { id: 18, name: "Good mama detergent small", price: "₦350", img: "/src/assets/images/goodmamasmall.jpg" },
  { id: 19, name: "Hypo", price: "₦300", img: "/src/assets/images/hypo.jpg" },
  { id: 20, name: "Top cafe", price: "₦400", img: "/src/assets/images/topcafe.jpg" },
  { id: 21, name: "Rafa detergent", price: "₦800", img: "/src/assets/images/rafa.jpg" },
  { id: 22, name: "Peak milk", price: "₦450", img: "/src/assets/images/peakmilk.jpg" },
  { id: 23, name: "Cremela", price: "₦350", img: "/src/assets/images/cremela.jpg" },
  { id: 24, name: "Good time", price: "₦250", img: "/src/assets/images/goodtime.jpg" },
  { id: 25, name: "Choco Robo", price: "₦350", img: "/src/assets/images/chocorobo.jpg" },
  { id: 26, name: "Paints of beans", price: "₦2,500", img: "/src/assets/images/beans.jpg" },
  { id: 27, name: "3 crown milk sachet", price: "₦100", img: "/src/assets/images/3crown.jpg" },
  { id: 28, name: "Loyal milk", price: "₦120", img: "/src/assets/images/loyalmilk.jpg" },
  { id: 31, name: "Top tea", price: "₦300", img: "/src/assets/images/toptea.jpg" },
  { id: 35, name: "Corn snack", price: "₦150", img: "/src/assets/images/cornsnack.jpg" },
  { id: 36, name: "Strawberry", price: "₦300", img: "/src/assets/images/strawberry.jpg" },
  { id: 38, name: "Sweet bite chi chin", price: "₦700", img: "/src/assets/images/chinchin.jpg" },
  { id: 39, name: "Klin detergent medium", price: "₦700", img: "/src/assets/images/klinmedium.jpg" },
  { id: 42, name: "Crunchy chinchin", price: "₦650", img: "/src/assets/images/crunchychinchin.jpg" },
  { id: 44, name: "Cowbell coffee", price: "₦450", img: "/src/assets/images/cowbellcoffee.jpg" },
  { id: 45, name: "Dano milk", price: "₦350", img: "/src/assets/images/danomilk.jpg" },
  { id: 46, name: "Blue cracker", price: "₦200", img: "/src/assets/images/bluecracker.jpg" },
  { id: 47, name: "Tomato paste", price: "₦150", img: "/src/assets/images/tomato.jpg" },
  { id: 48, name: "Spaghetti", price: "₦300", img: "/src/assets/images/spaghetti.jpg" },
  { id: 49, name: "Yellow cracker", price: "₦200", img: "/src/assets/images/yellowcracker.jpg" },
  { id: 50, name: "Air freshener", price: "₦700", img: "/src/assets/images/airfreshener.jpg" },
  { id: 51, name: "Coastal biscuits", price: "₦350", img: "/src/assets/images/coastalbiscuits.jpg" },
  { id: 52, name: "Wakana", price: "₦250", img: "/src/assets/images/wakana.jpg" },
  { id: 53, name: "Family choco", price: "₦400", img: "/src/assets/images/familychoco.jpg" },
];

// ✅ Modal Component
export default function ShopModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full mx-4 overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-4 rounded-t-3xl text-center border-b">
              <h2 className="text-2xl font-bold text-morenbeBlue">🛒 Morenbee Grocery Shop</h2>
              <p className="text-gray-600 text-sm">Pick your favorite items below</p>
            </div>

            <div className="p-6 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {PRODUCTS.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{product.price}</p>
                    <button className="mt-3 w-full py-2 bg-morenbeBlue text-white rounded-full text-sm font-semibold hover:opacity-90">
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
