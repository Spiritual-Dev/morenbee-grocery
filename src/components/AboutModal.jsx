import React, {useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const AboutModal = ({ isOpen, onClose }) => {
    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div
              className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-4xl max-h-[85vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-700 hover:text-morenbeGreen transition"
              >
                <X size={28} />
              </button>

              {/* Content */}
              <h2 className="text-3xl font-bold text-center mb-6 text-morenbeGreen">
                About Morenbee Grocery
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
