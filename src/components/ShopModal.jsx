import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import backgroundImg from "../assets/Images/background.jpg";

/**
 * ShopModal.jsx
 * Props:
 *  - isOpen (boolean): show/hide modal
 *  - onClose (function): called to close modal
 *
 * Behavior:
 *  - click outside modal closes it
 *  - Esc closes it
 *  - body scroll locked while modal is open
 *  - Return to Homepage button closes modal and scrolls to #hero
 */

/* Renumbered product list (1..38). Keep images in src/assets/Images/ */
const PRODUCTS = [
  { id: 1, name: "Kullikulli", img: "/src/assets/Images/Kullikulli.jpg" },
  { id: 2, name: "Measured sugar", img: "/src/assets/Images/sugar.jpg" },
  { id: 3, name: "Crates of Egg", img: "/src/assets/Images/eggs.jpg" },
  { id: 4, name: "Bags of rice", img: "/src/assets/Images/rice.jpg" },
  { id: 5, name: "Lactorich milk", img: "/src/assets/Images/lactorich.jpg" },
  { id: 6, name: "Paints of garri", img: "/src/assets/Images/garri.jpg" },
  { id: 7, name: "Classic peanuts", img: "/src/assets/Images/peanuts.jpg" },
  { id: 8, name: "Burger peanut", img: "/src/assets/Images/burgerpeanut.jpg" },
  { id: 9, name: "Cowbell chocolate", img: "/src/assets/Images/cowbellchoco.jpg" },
  { id: 10, name: "Viva bar soap", img: "/src/assets/Images/vivabarsoap.jpg" },
  { id: 11, name: "Viva detergent", img: "/src/assets/Images/vivadetergentbig.jpg" },
  { id: 12, name: "Magik detergent", img: "/src/assets/Images/magikbig.jpg" },
  { id: 13, name: "Good mama detergent", img: "/src/assets/Images/goodmamabig.jpg" },
  { id: 14, name: "Hypo", img: "/src/assets/Images/hypo.jpg" },
  { id: 15, name: "Top cafe", img: "/src/assets/Images/topcafe.jpg" },
  { id: 16, name: "Rafa detergent", img: "/src/assets/Images/rafa.jpg" },
  { id: 17, name: "Peak milk", img: "/src/assets/Images/peakmilk.jpg" },
  { id: 18, name: "Cremela", img: "/src/assets/Images/cremela.jpg" },
  { id: 19, name: "Good time", img: "/src/assets/Images/goodtime.jpg" },
  { id: 20, name: "Choco Robo", img: "/src/assets/Images/chocorobo.jpg" },
  { id: 21, name: "Paints of beans", img: "/src/assets/Images/beans.jpg" },
  { id: 22, name: "3 crown milk sachet", img: "/src/assets/Images/3crown.jpg" },
  { id: 23, name: "Loyal milk", img: "/src/assets/Images/loyalmilk.jpg" },
  { id: 24, name: "Top tea", img: "/src/assets/Images/toptea.jpg" },
  { id: 25, name: "Corn snack", img: "/src/assets/Images/cornsnack.jpg" },
  { id: 26, name: "Sweet bite chinchin", img: "/src/assets/Images/chinchin.jpg" },
  { id: 27, name: "Klin detergent", img: "/src/assets/Images/klinmedium.jpg" },
  { id: 28, name: "Crunchy chinchin", img: "/src/assets/Images/crunchychinchin.jpg" },
  { id: 29, name: "Cowbell coffee", img: "/src/assets/Images/cowbellcoffee.jpg" },
  { id: 30, name: "Dano milk", img: "/src/assets/Images/danomilk.jpg" },
  { id: 31, name: "Blue cracker", img: "/src/assets/Images/bluecracker.jpg" },
  { id: 32, name: "Tomato paste", img: "/src/assets/Images/tomato.jpg" },
  { id: 33, name: "Spaghetti", img: "/src/assets/Images/spaghetti.jpg" },
  { id: 34, name: "Yellow cracker", img: "/src/assets/Images/yellowcracker.jpg" },
  { id: 35, name: "Air freshener", img: "/src/assets/Images/airfreshener.jpg" },
  { id: 36, name: "Coastal biscuits", img: "/src/assets/Images/coastalbiscuits.jpg" },
  { id: 37, name: "Wakana", img: "/src/assets/Images/wakana.jpg" },
  { id: 38, name: "Family choco", img: "/src/assets/Images/familychoco.jpg" },
];

export default function ShopModal({ isOpen, onClose }) {
  // lock body scroll and restore on close/unmount
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "auto";
      };
    }
    return;
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // handle Return to Homepage: close modal THEN scroll to hero
  const handleReturnHome = () => {
    onClose?.();
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120); // small delay so close animation begins
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-20"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* overlay (click outside closes) */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* modal box */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 overflow-y-auto max-h-[85vh] z-10"
            initial={{ scale: 0.98, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 10, opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing when clicking inside
          >
            {/* top Close (icon) */}
            <button
              onClick={onClose}
              aria-label="Close shop modal"
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold z-30"
            >
              <X size={28} />
            </button>

            {/* header (sticky) */}
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-5 rounded-t-3xl text-center border-b sticky top-0 z-20">
              <h2 className="text-2xl md:text-3xl font-bold text-morenbeBlue">
                🛒 Morenbee Grocery Shop
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Pick your favorite items below
              </p>
            </div>

            {/* products grid */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
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
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {product.name}
                      </h3>
                      {/* no price shown (frontend-only display) */}
                      <button
                        className="mt-3 w-full py-2 bg-morenbeBlue text-white rounded-full text-sm sm:text-base font-semibold hover:bg-blue-800 transition"
                        aria-label={`Add ${product.name} to cart (UI only)`}
                        onClick={() => {
                          /* placeholder — no cart logic */
                          // optionally show a toast/small animation
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* bottom return/close area */}
            <div className="py-6 border-t flex justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-b-3xl">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReturnHome}
                className="px-8 py-2 bg-morenbeBlue text-white rounded-full font-semibold shadow-md transition"
              >
                ← Return to Homepage
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
