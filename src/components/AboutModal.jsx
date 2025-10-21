import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import backgroundImg from "../assets/Images/background.jpg";

export default function AboutModal({ isOpen, onClose }) {
  // lock background scroll
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "auto";
      };
    }
  }, [isOpen]);

  // close on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // return home button logic
  const handleReturnHome = () => {
    onClose?.();
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
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
          {/* overlay */}
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={onClose}
              aria-label="Close about modal"
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold z-30"
            >
              <X size={28} />
            </button>

            {/* header */}
            <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-5 rounded-t-3xl text-center border-b sticky top-0 z-20">
              <h2 className="text-2xl md:text-3xl font-bold text-morenbeGreen">
                🛍️ About Morenbee Grocery
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Learn more about who we are and what we stand for
              </p>
            </div>

            {/* main content */}
            <div className="p-4 sm:p-6 md:p-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                Morenbee Grocery Store is dedicated to supplying top-quality sealed and packaged foods — 
                from staple grains like rice and beans to cereals, biscuits, and household essentials. 
                We pride ourselves on trusted brands, hygienic packaging, and reliable delivery across Lagos.
              </p>

              <p>
                Our mission is to make grocery shopping simple, safe, and convenient. Whether you’re 
                stocking up for your home, planning for a small business, or looking for everyday essentials, 
                Morenbee Grocery brings everything closer to your doorstep.
              </p>

              <p>
                We focus on variety, affordability, and freshness. From dairy products, cooking essentials, 
                snacks, and beverages to cleaning supplies, we ensure our customers have access to everything 
                they need under one roof — delivered with care and professionalism.
              </p>

              <p>
                Customer satisfaction is at the heart of what we do. Our team is committed to providing 
                responsive service, clear communication, and timely deliveries to make your shopping experience 
                seamless. With Morenbee Grocery, quality, convenience, and trust come together.
              </p>

              <p>
                Join the growing number of Lagos households who rely on Morenbee Grocery for daily essentials. 
                Fresh products, packaged safely, delivered right to your door — that’s the Morenbee promise.
              </p>
            </div>

            {/* return home button */}
            <div className="py-5 border-t flex justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-b-3xl">
              <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={handleReturnHome}
               className="px-6 py-2 bg-morenbeBlue text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-800 transition"
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
