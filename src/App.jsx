import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ShopModal from "./components/ShopModal";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar onShopClick={() => setShowModal(true)} />
      <Hero onShopClick={() => setShowModal(true)} />
      <ProductGrid onShopClick={() => setShowModal(true)} />
      <ContactSection />
      <Footer />
      <AnimatePresence>
        {showModal && <ShopModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}
